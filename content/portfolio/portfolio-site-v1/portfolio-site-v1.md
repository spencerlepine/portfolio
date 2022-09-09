---
date: '2021-08-28'
title: 'Portfolio Site v1'
github: 'https://github.com/spencerlepine/portfolio-site/tree/v1'
external: 'https://youtu.be/g_OAnrkNDH8'
description: 'Portfolio site and blog powered by Gatsby with automated deployment'
tech:
  - React
  - GatsbyJS
  - GraphQL
  - Tailwindcss
company: ''
showInProjects: false
isFeatured: ''
thumbnail: ./og.png
slug: /portfolio/portfolio-site-v1
---

A GatsbyJS site styled with TailwindCSS.

## 📦 More Technologies:

- [TailwindCSS](https://tailwindcss.com/)
- [Digital Ocean Droplet](https://www.digitalocean.com/products/droplets/)
- [GitHub Actions](https://github.com/features/actions)
- [Husky](https://typicode.github.io/husky/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Features
### Pre-commit hooks
- Uses `Husky`, `ESLint`, and `Prettier` to enforce code styles and ensure Gatsby will build before pushing to remote.
### Static Files
- `GatsbyJS` will dynamically build static files from files in the [`/content](./content) folder, including blog posts and projects.

### Continuous Integration
- GitHub Actions will ensure a valid Gatsby build on the `master` branch

- Pushes to `master` will trigger automatic deployment to the [Digital Ocean Droplet](https://www.digitalocean.com/products/droplets/). GitHub Actions with SSH into the remote server and replace static files.

