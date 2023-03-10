# đď¸ About Zenix framework

- [đď¸ About Zenix framework](#ď¸-about-zenix-framework)
  - [About the UPDATE 104](#about-the-update-104)
  - [đ The UPDATE 100!!!](#-the-update-100)
  - [â¨ What is coming next?](#-what-is-coming-next)
  - [đĽ° Our Philosophy](#-our-philosophy)
  - [đ In this update](#-in-this-update)
  - [đ Features](#-features)
  - [đŚ Work in progress](#-work-in-progress)
  - [đ§ Commands](#-commands)
  - [đŚ Project Structure](#-project-structure)
  - [đ License](#-license)
  
![ZENIX-FRAMEWORK-ASTRO](https://user-images.githubusercontent.com/5947268/213537146-53a81dca-c75a-4493-8123-3cf4098f3cb3.png)

This project is a framework based on a fork of astro-starter-kit, so this is a modified version of the default template.

## About the UPDATE 104

- â All CSS code in one file, WE NEED IT cause it was so frustrating to get repetitive code in the CSS file.
- â We also used internally the css optimizer from Zenix labs, so we can optimize the CSS file, and it is now 8,5Â kB, instead of 18,4Â kB and more readable.
- â We removed the CSS folder, and we put all the CSS code in one file, so you can modify it easily.

## đ The UPDATE 100!!!

- â We implemented code boxes, so you can add code to your posts, and it will be displayed as a code box, with a copy button, and a button to expand the code box.
- â We implemented with responsiveness, so you can see the code box in mobile, and it will be displayed as a code box, with a copy button, and a button to expand the code box.
- â We made a HARD RESET only on github, never on npm production repository.

## â¨ What is coming next?

Internally we are using the new version of Zenix with DATABASE and it connects successfully to the backend!

Zenix 1.1.0 will continue with the same strict philosophy of the framework, but with the addition of a database, so you can create your own backend and connect it to the frontend, and you can also use the Github API to connect to the backend.

## đĽ° Our Philosophy

Our philosophy is to work with less dependencies and only from very solid sources, by the moment you are:

- "@astrojs/mdx": "^0.14.0",
- "@astrojs/rss": "^2.0.0",
- "@astrojs/sitemap": "^1.0.0",
- "astro": "^1.9.2",

It is included also PocketBase, always we work with the latest version possible, we know by the moment this is not a current feature of the project, but since internally we are devoloping with pocketbase, we are going to keep it updated and inside the package.json, it will be in this way, the way you will know what is coming next to Zenix Framework:

- "pocketbase": "^0.10.0"

We want to mantain the less dependencies possible, but we want to mantain the best quality possible, so we are only going to use what is strictly necessary. We present to you Croco, đ, we feed it with updates đđđ buuuuuuuuut! you can feed too with feedback here [đ LOVES YOUR FEEDBACK](https://github.com/miguelgargallo/Blog/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) Feed it!

We are open for issues, so do not dishesitate to open an issue if you find something wrong, or if you want to suggest something, we are open for suggestions.


## đ In this update

Update | github 1.0.77 | npm 0.0.30 | README NOW! | Remote | Pylar AI | Database | Github API | Vercel deployable | Astro components | CSS customization | Markdown & MDX support | SEO-friendly | Sitemap support | RSS Feed support | Lighthouse performance | 100/100

- â Improved Readme (Know who is Croco and our philosophy.)
- â Important notes on Readme read them!
- â We habilitated a zone for feedback! (Feed Croco!)

Update | github 1.0.76 | npm 0.0.29 | Fix Menu | Responsive | Remote | Pylar AI | Database | Github API | Vercel deployable | Astro components | CSS customization | Markdown & MDX support | SEO-friendly | Sitemap support | RSS Feed support | Lighthouse performance | 100/100

- â Added a remote control to use, like tv!
- â Improved responsiveness, now it is 100/100 in mobile, new layout for mobile and new css for mobile
- â Fix margins, menu, leaf and blog buttons

## đ Features

It contains the Zenix Remote (github version 1.0.68 and npm version 0.0.17 Zenix npmjs)

![Zenix Remote](https://user-images.githubusercontent.com/5947268/212189978-7b24b4ad-bb43-4edf-b81b-f5df5a35783b.png)

Features:

- â Minimal styling (make it your own!)
- â A remote control to use, like tv!
- â 100/100 Lighthouse performance
- â SEO-friendly with canonical URLs and OpenGraph data
- â Sitemap support
- â RSS Feed support
- â Markdown & MDX support
- â CSS full customization
- â Astro components
- â Database support
- â Github API support
- â Vercel deployable support
- â Improved posts
- â Modified layouts
- â Config customization support

## đŚ Work in progress

- đŚ Pylar AI support
- đŚ Full integration of Astro 2.0, at this moment is installed, and works like a charm, but we are working on the integration of the new features.

## đ§ Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                          |
| :-------------- | :---------------------------------------------- |
| `npm i`         | Installs dependencies                           |
| `npm zenix`     | Starts local dev server at `localhost:3000`     |
| `./zenix.sh` *1 | Open the remote and don't type commands anymore |

*1: first 'chmod +x ./zenix.sh' then './zenix.sh'.
If you want a first run to try do: 'npm i && ./zenix.sh' and press 2 to start the dev instance at port 3000.

## đŚ Project Structure

Based on the file structure you provided, it looks like your project is built using Astro, which is a static site generator. The .mdx files in the pages/blog directory are Markdown files with JSX, and they will be rendered as blog posts on your site. The .astro files are Astro components, which are used to build the structure of your site. The .css files in the styles directory contain styles that are applied to the site. The tsconfig.json file is for configuring TypeScript, a programming language that is a strict superset of JavaScript. The package.json file lists the project dependencies and scripts for building and running the project. The public directory contains assets such as images and icons that are used on the site. The .github and .vscode directories contain files related to using GitHub and Visual Studio Code, respectively. The README.md file contains information about the project, and the LICENSE.md file specifies the terms under which the project is licensed.

```tre
* ZENIX FRAMEWORK
âââ License.md
âââ README.md
âââ SECURITY.md
âââ astro.config.mjs
âââ favicon.ico
âââ package-lock.json
âââ package.json
âââ public
â   âââ favicon.icns
â   âââ favicon.ico
â   âââ favicon.png
â   âââ favicon.svg
â   âââ icon.icns
â   âââ icon.ico
â   âââ info.json
â   âââ input.png
â   âââ koldo-koi-superliga.jpg
â   âââ placeholder-about.jpg
â   âââ placeholder-hero.jpg
â   âââ placeholder-social.jpeg
â   âââ prompt-chatgpt-results.png
âââ src
â   âââ components
â   â   âââ ApiHeader.astro
â   â   âââ BaseHead.astro
â   â   âââ Calendar.astro
â   â   âââ Copyright.astro
â   â   âââ Footer.astro
â   â   âââ Ga.astro
â   â   âââ Header.astro
â   â   âââ HeaderLink.astro
â   â   âââ Language.astro
â   â   âââ Menu.astro
â   â   âââ Mobile.astro
â   â   âââ Shortcuts.astro
â   â   âââ Tag.astro
â   â   âââ UpdatesBaseHead.astro
â   â   âââ anim.astro
â   âââ config.ts
â   âââ env.d.ts
â   âââ layouts
â   â   âââ BlogPost.astro
â   â   âââ UpdatesLayout.astro
â   âââ pages
â   â   âââ License
â   â   âââ about.md
â   â   âââ api.astro
â   â   âââ blog
â   â   â   âââ ai-advancement-science.mdx
â   â   â   âââ ai-costs-savings.mdx
â   â   â   âââ ai-discover-marine-species.mdx
â   â   â   âââ astro-markdown-content.mdx
â   â   â   âââ chatbot-tensorflow-libdevice.mdx
â   â   â   âââ deepmind-ai-algorithms.mdx
â   â   â   âââ docker-containers-devops.mdx
â   â   â   âââ domains-exetensions-handshake.mdx
â   â   â   âââ iphone-future-apple.mdx
â   â   â   âââ licenses-opensource-important.mdx
â   â   â   âââ miencraft-gaming-society.mdx
â   â   â   âââ plagiarism-software-academia.mdx
â   â   â   âââ prompt-chatgpt-results.mdx
â   â   â   âââ rust-interview-questions.mdx
â   â   â   âââ ultimate-seo-guide-nextjs.mdx
â   â   âââ blog-cat
â   â   â   âââ carles-tamayo-premi-crypto.mdx
â   â   âââ blog-cat.astro
â   â   âââ blog-de
â   â   â   âââ astro-markdown-content.mdx
â   â   âââ blog-de.astro
â   â   âââ blog-es
â   â   â   âââ DeepMind-AI-Algoritmos.mdx
â   â   â   âââ ai-avance-ciencia.mdx
â   â   â   âââ ai-costos-ahorros.mdx
â   â   â   âââ ai-descubrimiento-especies copy.mdx
â   â   â   âââ analisis-koi-koldo.mdx
â   â   â   âââ astro-markdown-contenido.mdx
â   â   âââ blog-es.astro
â   â   âââ blog-fr
â   â   â   âââ astro-markdown-contenu.mdx
â   â   âââ blog-fr.astro
â   â   âââ blog-ita
â   â   â   âââ astro-markdown-content.mdx
â   â   âââ blog-ita.astro
â   â   âââ blog-pt
â   â   â   âââ astro-markdown-content.mdx
â   â   âââ blog-pt.astro
â   â   âââ blog.astro
â   â   âââ index.astro
â   â   âââ projects.md
â   â   âââ rss.xml.js
â   â   âââ security.md
â   â   âââ update.md
â   âââ style.css
âââ tsconfig.json
âââ zenix.sh
âââ zenixServer.sh
```

## đ License

This projects runs on a [Pylar AI creative ML License](https://huggingface.co/spaces/superdatas/LICENSE).
