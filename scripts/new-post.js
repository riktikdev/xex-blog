/* This is a script to create a new post markdown file with front-matter */

import fs from "fs"
import path from "path"

const translit = (str) => {
  const ru = 'А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
  const en = 'A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-\'-\'-Y-y-\'-\'-E-e-YU-yu-YA-ya'.split('-');
  
  let res = '';

  for (let i = 0, l = str.length; i < l; i++) {
    const s = str.charAt(i);
    const n = ru.indexOf(s);
    res += n >= 0 ? en[n] : s;
  }

  return res;
};

const generateSlug = (str) => {
  let url = str.replace(/[\s]+/gi, '-');

  url = translit(url)
    .replace(/[^0-9a-z_\-]+/gi, '')
    .replace(/---/g, '-')
    .replace(/--/g, '-')
    .toLowerCase();

  return url;
};

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(`Error: No title argument provided
Usage: npm run new-post -- <post title>`);
  process.exit(1);
}

const postTitle = args[0];
const slug = generateSlug(postTitle);

let fileName = `${slug}.md`;

const targetDir = "./src/content/posts/";
const fullPath = path.join(targetDir, fileName);

if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists`);
  process.exit(1);
}

const content = `---
title: "${postTitle}"
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
`;

fs.writeFileSync(fullPath, content);

console.log(`Post ${fullPath} created with title: "${postTitle}"`);
