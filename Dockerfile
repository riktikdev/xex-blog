# Base image with Node.js 20 and pnpm setup
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable pnpm through corepack
RUN corepack enable

# Set the working directory
WORKDIR /app

# Copy project files into the container
COPY . .

# Install all dependencies and build the project
FROM base AS build
# Use cache for pnpm store
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# Build the Astro project
RUN pnpm run build

# Final stage to run the application
FROM node:20-slim AS runner
WORKDIR /app

# Copy necessary files from previous stages
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

# Expose the default port Astro uses (usually 3000)

# Start the Astro server
CMD ["pnpm", "preview"]
