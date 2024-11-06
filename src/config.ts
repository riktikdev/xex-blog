import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Xex Blog',
  subtitle: '',
  lang: 'ru',
  themeColor: {
    hue: 250,
    fixed: false,
  },
  banner: {
    enable: false,
    src: 'https://i.pinimg.com/736x/f8/e2/12/f8e212a17a29d71d0ac6fa0de0a1da22.jpg',
    position: 'center',
    credit: {
      enable: false,
      text: '',
      url: ''
    }
  },
  toc: {
    enable: true,
    depth: 3
  },
  favicon: []
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Telegram',
      url: 'https://rootmybox1.t.me',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://cdn.discordapp.com/avatars/1232744967202537564/8132b8cf4b7138afa889174c0cbc1085.webp?size=512',
  name: 'Xex',
  bio: '',
  links: [
    {
      name: 'Telegram',
      icon: 'ic:baseline-telegram',
      url: 'https://rootmybox1.t.me',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
