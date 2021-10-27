# [spencerlepine.com](https://www.spencerlepine.com/) [![build](https://github.com/spencerlepine/portfolio-site/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/main.yml) [![build](https://github.com/spencerlepine/portfolio-site/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/spencerlepine/portfolio-site/actions/workflows/deploy.yml)

Portfolio and blog website powered by GatsbyJS and TailwindCSS.

## ⚙️ Setup

```sh
npm install
npm run develop
```

## 📦 Technologies:

- [GatsbyJS](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Digital Ocean Droplet](https://www.digitalocean.com/products/droplets/)
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

---

> [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
