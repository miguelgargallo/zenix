# 🖋️ About Zenix framework

- [🖋️ About Zenix framework](#️-about-zenix-framework)
  - [About the UPDATE 104](#about-the-update-104)
  - [🎉 The UPDATE 100!!!](#-the-update-100)
  - [✨ What is coming next?](#-what-is-coming-next)
  - [🥰 Our Philosophy](#-our-philosophy)
  - [🚀 In this update](#-in-this-update)
  - [🎁 Features](#-features)
    - [📦 Work in progress](#-work-in-progress)
  - [🧞 Commands](#-commands)
  - [🦄 Project Structure](#-project-structure)
  - [📝 License](#-license)
  
![ZENIX-FRAMEWORK-ASTRO](https://user-images.githubusercontent.com/5947268/213537146-53a81dca-c75a-4493-8123-3cf4098f3cb3.png)

This project is a framework based on a fork of astro-starter-kit, so this is a modified version of the default template.

## About the UPDATE 104

- ✅ All CSS code in one file, WE NEED IT cause it was so frustrating to get repetitive code in the CSS file.
- ✅ We also used internally the css optimizer from Zenix labs, so we can optimize the CSS file, and it is now 8,5 kB, instead of 18,4 kB and more readable.
- ✅ We removed the CSS folder, and we put all the CSS code in one file, so you can modify it easily.

## 🎉 The UPDATE 100!!!

- ✅ We implemented code boxes, so you can add code to your posts, and it will be displayed as a code box, with a copy button, and a button to expand the code box.
- ✅ We implemented with responsiveness, so you can see the code box in mobile, and it will be displayed as a code box, with a copy button, and a button to expand the code box.
- ✅ We made a HARD RESET only on github, never on npm production repository.

## ✨ What is coming next?

Internally we are using the new version of Zenix with DATABASE and it connects successfully to the backend!

Zenix 1.1.0 will continue with the same strict philosophy of the framework, but with the addition of a database, so you can create your own backend and connect it to the frontend, and you can also use the Github API to connect to the backend.

## 🥰 Our Philosophy

Our philosophy is to work with less dependencies and only from very solid sources, by the moment you are:

- "@astrojs/mdx": "^0.14.0",
- "@astrojs/rss": "^2.0.0",
- "@astrojs/sitemap": "^1.0.0",
- "astro": "^1.9.2",

It is included also PocketBase, always we work with the latest version possible, we know by the moment this is not a current feature of the project, but since internally we are devoloping with pocketbase, we are going to keep it updated and inside the package.json, it will be in this way, the way you will know what is coming next to Zenix Framework:

- "pocketbase": "^0.10.0"

We want to mantain the less dependencies possible, but we want to mantain the best quality possible, so we are only going to use what is strictly necessary. We present to you Croco, 🐊, we feed it with updates 😍😍😍 buuuuuuuuut! you can feed too with feedback here [🐊 LOVES YOUR FEEDBACK](https://github.com/miguelgargallo/Blog/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) Feed it!

We are open for issues, so do not dishesitate to open an issue if you find something wrong, or if you want to suggest something, we are open for suggestions.


## 🚀 In this update

Update | github 1.0.77 | npm 0.0.30 | README NOW! | Remote | Pylar AI | Database | Github API | Vercel deployable | Astro components | CSS customization | Markdown & MDX support | SEO-friendly | Sitemap support | RSS Feed support | Lighthouse performance | 100/100

- ✅ Improved Readme (Know who is Croco and our philosophy.)
- ✅ Important notes on Readme read them!
- ✅ We habilitated a zone for feedback! (Feed Croco!)

Update | github 1.0.76 | npm 0.0.29 | Fix Menu | Responsive | Remote | Pylar AI | Database | Github API | Vercel deployable | Astro components | CSS customization | Markdown & MDX support | SEO-friendly | Sitemap support | RSS Feed support | Lighthouse performance | 100/100

- ✅ Added a remote control to use, like tv!
- ✅ Improved responsiveness, now it is 100/100 in mobile, new layout for mobile and new css for mobile
- ✅ Fix margins, menu, leaf and blog buttons

## 🎁 Features

It contains the Zenix Remote (github version 1.0.68 and npm version 0.0.17 Zenix npmjs)

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
- ✅ Improved posts
- ✅ Modified layouts
- ✅ Config customization support

### 📦 Work in progress

- ❌ Pylar AI support (WORK IN PROGRESS)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                          |
| :-------------- | :---------------------------------------------- |
| `npm i`         | Installs dependencies                           |
| `npm zenix`     | Starts local dev server at `localhost:3000`     |
| `./zenix.sh` *1 | Open the remote and don't type commands anymore |

*1: first 'chmod +x ./zenix.sh' then './zenix.sh'.
If you want a first run to try do: 'npm i && ./zenix.sh' and press 2 to start the dev instance at port 3000.

## 🦄 Project Structure

Based on the file structure you provided, it looks like your project is built using Astro, which is a static site generator. The .mdx files in the pages/blog directory are Markdown files with JSX, and they will be rendered as blog posts on your site. The .astro files are Astro components, which are used to build the structure of your site. The .css files in the styles directory contain styles that are applied to the site. The tsconfig.json file is for configuring TypeScript, a programming language that is a strict superset of JavaScript. The package.json file lists the project dependencies and scripts for building and running the project. The public directory contains assets such as images and icons that are used on the site. The .github and .vscode directories contain files related to using GitHub and Visual Studio Code, respectively. The README.md file contains information about the project, and the LICENSE.md file specifies the terms under which the project is licensed.

```tre
* ZENIX FRAMEWORK
├── License.md
├── README.md
├── SECURITY.md
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
│   ├── koldo-koi-superliga.jpg
│   ├── placeholder-about.jpg
│   ├── placeholder-hero.jpg
│   ├── placeholder-social.jpeg
│   └── prompt-chatgpt-results.png
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
│   │   ├── Language.astro
│   │   ├── Menu.astro
│   │   ├── Mobile.astro
│   │   ├── Shortcuts.astro
│   │   ├── Tag.astro
│   │   ├── UpdatesBaseHead.astro
│   │   └── anim.astro
│   ├── config.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BlogPost.astro
│   │   └── UpdatesLayout.astro
│   ├── pages
│   │   ├── License
│   │   ├── about.md
│   │   ├── api.astro
│   │   ├── blog
│   │   │   ├── ai-advancement-science.mdx
│   │   │   ├── ai-costs-savings.mdx
│   │   │   ├── ai-discover-marine-species.mdx
│   │   │   ├── astro-markdown-content.mdx
│   │   │   ├── chatbot-tensorflow-libdevice.mdx
│   │   │   ├── deepmind-ai-algorithms.mdx
│   │   │   ├── docker-containers-devops.mdx
│   │   │   ├── domains-exetensions-handshake.mdx
│   │   │   ├── iphone-future-apple.mdx
│   │   │   ├── licenses-opensource-important.mdx
│   │   │   ├── miencraft-gaming-society.mdx
│   │   │   ├── plagiarism-software-academia.mdx
│   │   │   ├── prompt-chatgpt-results.mdx
│   │   │   ├── rust-interview-questions.mdx
│   │   │   └── ultimate-seo-guide-nextjs.mdx
│   │   ├── blog-cat
│   │   │   └── carles-tamayo-premi-crypto.mdx
│   │   ├── blog-cat.astro
│   │   ├── blog-de
│   │   │   └── astro-markdown-content.mdx
│   │   ├── blog-de.astro
│   │   ├── blog-es
│   │   │   ├── DeepMind-AI-Algoritmos.mdx
│   │   │   ├── ai-avance-ciencia.mdx
│   │   │   ├── ai-costos-ahorros.mdx
│   │   │   ├── ai-descubrimiento-especies copy.mdx
│   │   │   ├── analisis-koi-koldo.mdx
│   │   │   └── astro-markdown-contenido.mdx
│   │   ├── blog-es.astro
│   │   ├── blog-fr
│   │   │   └── astro-markdown-contenu.mdx
│   │   ├── blog-fr.astro
│   │   ├── blog-ita
│   │   │   └── astro-markdown-content.mdx
│   │   ├── blog-ita.astro
│   │   ├── blog-pt
│   │   │   └── astro-markdown-content.mdx
│   │   ├── blog-pt.astro
│   │   ├── blog.astro
│   │   ├── index.astro
│   │   ├── projects.md
│   │   ├── rss.xml.js
│   │   ├── security.md
│   │   └── update.md
│   └── style.css
├── tsconfig.json
├── zenix.sh
└── zenixServer.sh
```

## 📝 License

This projects runs on a [Pylar AI creative ML License](https://huggingface.co/spaces/superdatas/LICENSE).
