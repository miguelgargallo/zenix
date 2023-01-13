# 🖋️ About Zenix framework
- [🖋️ About Zenix framework](#️-about-zenix-framework)
  - [-🚀 In this update](#--in-this-update)
  - [🎁 Features](#-features)
  - [🧞 Commands](#-commands)
  - [🦄 Project Structure](#-project-structure)
  - [📝 License](#-license)

This project is a framework based on a fork of astro-starter-kit, so this is a modified version of the default template.

## -🚀 In this update

Update | github 1.0.75 | npm 0.0.27 | Responsive | Remote | Pylar AI | Database | Github API | Vercel deployable | Astro components | CSS customization | Markdown & MDX support | SEO-friendly | Sitemap support | RSS Feed support | Lighthouse performance | 100/100

- ✅ Added a remote control to use, like tv!
- ✅ Added a new layout for posts
- ✅ Added a new css for mobile
- ✅ Improved responsiveness
- ✅ Fix margins
- ✅ Fix menu
- ✨ Internally we are using the new version of Zenix with DATABASE and it connects successfully to the backend!

## 🎁 Features

🎁 It contains the Zenix Remote (github version 1.0.68 and npm version 0.0.17 Zenix npmjs)

![Zenix Remote](https://user-images.githubusercontent.com/5947268/212189978-7b24b4ad-bb43-4edf-b81b-f5df5a35783b.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ A remote control to use, like tv!
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ CSS full customization
- ✅ Astro components
- ✅ Database support
- ✅ Github API support
- ✅ Vercel deployable support
- ✅ Pylar AI support
- ✅ Improved posts
- ✅ Modified layouts
- ✅ Config customization support


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm i`                | Installs dependencies                            |
| `npm zenix`            | Starts local dev server at `localhost:3000`      |
| `./zenix.sh` *1       | Open the remote and don't type commands anymore   |

*1: first 'chmod +x ./zenix.sh' then './zenix.sh'.
If you want a first run to try do: 'npm i && ./zenix.sh' and press 2 to start the dev instance at port 3000.

## 🦄 Project Structure

Based on the file structure you provided, it looks like your project is built using Astro, which is a static site generator. The .mdx files in the pages/blog directory are Markdown files with JSX, and they will be rendered as blog posts on your site. The .astro files are Astro components, which are used to build the structure of your site. The .css files in the styles directory contain styles that are applied to the site. The tsconfig.json file is for configuring TypeScript, a programming language that is a strict superset of JavaScript. The package.json file lists the project dependencies and scripts for building and running the project. The public directory contains assets such as images and icons that are used on the site. The .github and .vscode directories contain files related to using GitHub and Visual Studio Code, respectively. The README.md file contains information about the project, and the LICENSE.md file specifies the terms under which the project is licensed.

```
.
├── .api
│   ├── API.js
│   ├── License.md
│   └── README.md
├── .github
│   └── FUNDING.yml
├── .gitignore
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── License.md
├── README.md
├── astro.config.mjs
├── favicon.ico
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
├── remote.sh
├── remoteServer.sh
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
│   │   └── BlogPost.astro
│   ├── pages
│   │   ├── License
│   │   ├── about.md
│   │   ├── api.astro
│   │   ├── blog.astro
│   │   ├── blog
│   │   │   ├── ai-advancement-science.mdx
│   │   │   ├── ai-costs-savings.mdx
│   │   │   ├── ai-discover-marine-species.mdx
│   │   │   ├── chatgpt-write-perfectly.mdx
│   │   │   ├── domains-exetensions-handshake.mdx
│   │   │   ├── iphone-future-apple.mdx
│   │   │   ├── licenses-opensource-important.mdx
│   │   │   └── ultimate-seo-guide-nextjs.mdx
│   │   ├── index.astro
│   │   ├── projects.md
│   │   └── rss.xml.js
│   └── styles
│       ├── general.css
│       ├── icons.css
│       ├── layout.css
│       └── typography.css
└── tsconfig.json
```

## 📝 License

This projects runs on a [Pylar AI creative ML License](https://huggingface.co/spaces/superdatas/LICENSE).
