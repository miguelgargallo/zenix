---
layout: "../layouts/BlogPost.astro"
title: "About MyBlog framework"
description: "About MyBlog framework | Miguel Gargallo"
updatedDate: "August 10 2022"
pubDate: "Jan 10 2023"
author: "Miguel Gargallo"
---

# 🖋️ About MyBlog framework

This project is a framework based on a fork of [astro-starter-kit](https://astro.build), so this is a modified version of the default template.

## ✨ Features

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Based on the file structure you provided, it looks like your project is built using Astro, which is a static site generator. The .mdx files in the pages/blog directory are Markdown files with JSX, and they will be rendered as blog posts on your site. The .astro files are Astro components, which are used to build the structure of your site. The .css files in the styles directory contain styles that are applied to the site. The tsconfig.json file is for configuring TypeScript, a programming language that is a strict superset of JavaScript. The package.json file lists the project dependencies and scripts for building and running the project. The public directory contains assets such as images and icons that are used on the site. The .github and .vscode directories contain files related to using GitHub and Visual Studio Code, respectively. The README.md file contains information about the project, and the LICENSE.md file specifies the terms under which the project is licensed.

```
.
├── .github
│   └── FUNDING.yml
├── .gitignore
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── License.md
├── README.md
├── api
│   ├── API.js
│   └── License.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── favicon.icns
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon.svg
│   ├── icon.icns
│   ├── icon.ico
│   ├── info.json
│   ├── input.png
│   ├── placeholder-about.jpg
│   ├── placeholder-hero.jpg
│   └── placeholder-social.jpeg
├── src
│   ├── components
│   │   ├── ApiHeader.astro
│   │   ├── BaseHead.astro
│   │   ├── Calendar.astro
│   │   ├── Copyright.astro
│   │   ├── Footer.astro
│   │   ├── Ga.astro
│   │   ├── Header.astro
│   │   ├── HeaderLink.astro
│   │   ├── Menu.astro
│   │   ├── Mobile.astro
│   │   ├── Shortcuts.astro
│   │   └── Tag.astro
│   ├── config.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BaseHead.astro
│   │   └── BlogPost.astro
│   ├── pages
│   │   ├── License.md
│   │   ├── about.md
│   │   ├── api.astro
│   │   ├── api
│   │   │   └── License.md
│   │   ├── blog.astro
│   │   ├── blog
│   │   │   ├── AI and the Advancement of Math, Science, Cryptography, and Planets.mdx
│   │   │   ├── How to make chatGPT to write Readme perfectly copy.mdx
│   │   │   ├── How to make chatGPT to write Readme perfectly.mdx
│   │   │   ├── License.md
│   │   │   ├── Next13-and-Google-SEO.mdx
│   │   │   ├── Ultimate-React-Guide.mdx
│   │   │   ├── Using AI to Discover New Marine Species.mdx
│   │   │   ├── iPhone in 2025.mdx
│   │   │   └── why-AI.mdx
│   │   ├── book
│   │   │   └── License.md
│   │   ├── index.astro
│   │   ├── projects.md
│   │   ├── register.astro
│   │   └── rss.xml.js
│   └── styles
│       ├── general.css
│       ├── icons.css
│       ├── layout.css
│       └── typography.css
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 📝 License

This projects runs on a [Pylar AI creative ML License](https://huggingface.co/spaces/superdatas/LICENSE).
