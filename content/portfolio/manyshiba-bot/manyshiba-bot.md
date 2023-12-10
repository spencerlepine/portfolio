---
date: '2021-06-09'
title: 'ManyShiba Twitter/X Bot'
github: 'https://github.com/spencerlepine/manyshiba-bot'
external: 'https://twitter.com/manyshiba'
youtube: ''
description: Twitter (X) bot posting daily Shiba Inu pictures. A NodeJS script using Shiba.online API and Twitter API, automated with GitHub Actions
tech:
  - Node.js
  - Netlify
  - GitHub Actions
featureSection: 'hobby'
thumbnail: ./manyshiba.png
slug: /portfolio/manyshiba-bot
screenshots:
  - ./manyshiba.png
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/d1a88ec1-3ed1-451e-9f20-d170a3f725ec/deploy-status)](https://app.netlify.com/sites/manyshiba/deploys)

[@ManyShibu](https://twitter.com/manyshiba) Twitter bot posting random (sacred) Shiba Inu pictures.

### 🛠️ Built with:
 - [Shibe.online API](https://shibe.online/)
 - [Node.js](https://nodejs.org/)
 - [twit](https://www.npmjs.com/package/twit)

## 🌟 How It was Built
Using the [Shibe.online API](https://shibe.online/) for dog images, a [Node.js](https://nodejs.org/) script connects to the [Twitter API](https://developer.twitter.com/en/docs/twitter-api). The script will pull a random image from the dog API, then the [twit](https://www.npmjs.com/package/twit) npm package uses the Twitter API token to publish a tweet with the image.

Everything is deployed to Heroku, which runs a [CRON job](https://simple.wikipedia.org/wiki/Cron) to execute the script daily.

Check out the source code [on GitHub](https://github.com/spencerlepine/manyshiba-bot)

---

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)