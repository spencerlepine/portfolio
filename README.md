# [SpencerLepine.com](https://www.spencerlepine.com/) Portfolio Site

[![CI](https://github.com/spencerlepine/portfolio-site/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/ci.yml) [![Netlify Deploy](https://github.com/spencerlepine/portfolio-site/actions/workflows/netlify.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/netlify.yml) [![Link Snitch](https://github.com/spencerlepine/portfolio-site/actions/workflows/link-snitch.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/link-snitch.yml) [![Uptime CI](https://github.com/spencerlepine/portfolio-site-uptime/workflows/Uptime%20CI/badge.svg)](https://github.com/spencerlepine/portfolio-site-uptime/actions?query=workflow%3A%22Uptime+CI%22)

[![Publish Docker](https://github.com/spencerlepine/portfolio-site/actions/workflows/publish-to-ghcr.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/publish-to-ghcr.yml) [![Stable Version](https://img.shields.io/github/v/tag/spencerlepine/portfolio-site)](https://img.shields.io/github/v/tag/spencerlepine/portfolio-site) [![Latest Release](https://img.shields.io/github/v/release/spencerlepine/portfolio-site?color=%233D9970)](https://img.shields.io/github/v/tag/spencerlepine/portfolio-site?color=%233D9970)

[**Visit the status website →**](https://spencerlepine.github.io/portfolio-site-uptime)

![OG Snapshot](./static/og@2x.png)

## ⭐ How It's Built
Developer Portfolio and Blog site powered by React, GatsbyJS, GraphQL and TailwindCSS. Builds static pages from markdown content, and includes light/dark theme toggle.

## 📦 Technologies:

- [GatsbyJS](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
- [Husky](https://typicode.github.io/husky/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## ⚙️ Development Setup
```sh
$ git clone https://github.com/spencerlepine/portfolio-site.git
$ cd portfolio-site
$ yarn install
$ yarn start
# access on localhost:3000
```

## 🐳 Pull Docker Image
```sh
# docker pull ghcr.io/OWNER/IMAGE_NAME
$ docker pull ghcr.io/spencerlepine/portfolio-site:1.1.0
# runs on port 80
```

## Features
- Landing page
- About me
- Socials Links
- Tech Stack Showcase
- Portfolio Showcase
- Contact Form
- Blog