---
date: '2022-10-12'
title: 'Open Source Repository Web Crawler'
github: 'https://github.com/spencerlepine/open-source-crawler'
external: 'TODO'
description: 'Web crawler finding open source GitHub repositories, parsing README files, and scanning for typo/security issues.'
tech:
  - GitHub Actions
  - AWS Lambda
  - Redis
  - Node.js
  - Serverless
featureSection: 'hobby'
thumbnail: ./crawler-thumbnail.png
slug: /portfolio/open-source-crawler
screenshots:
  - ./crawler-thumbnail.png
  - ./crawler-components.png
  - ./crawler-flowchart.png
---

[![🕷️ Repo Crawler](https://github.com/spencerlepine/open-source-crawler/actions/workflows/repo-crawler.yml/badge.svg?branch=main)](https://github.com/spencerlepine/open-source-crawler/actions/workflows/repo-crawler.yml) [![🧐 Repo Analyzer](https://github.com/spencerlepine/open-source-crawler/actions/workflows/repo-analyzer.yml/badge.svg?branch=main)](https://github.com/spencerlepine/open-source-crawler/actions/workflows/repo-analyzer.yml) [![🚀 Deploy Lambda](https://github.com/spencerlepine/open-source-crawler/actions/workflows/deply-lambda.yml/badge.svg?branch=main)](https://github.com/spencerlepine/open-source-crawler/actions/workflows/deply-lambda.yml) [![📝 Status Reporter](https://github.com/spencerlepine/open-source-crawler/actions/workflows/status-reporter.yml/badge.svg?branch=main)](https://github.com/spencerlepine/open-source-crawler/actions/workflows/status-reporter.yml)

GitHub Repository web crawler and security scanner to streamline my contributions to open source on GitHub. 

Uses scheduled GitHub Actions invoking AWS Lambda functions connected to Redis database.

## 🌟 How It's Built

- Development Process - [Blog Post](TODO) | [Medium Post](TODO)
- Project Walk-through - [Youtube Video](TODO)
- Project Walk-through Slideshow - [Google Slides](https://docs.google.com/presentation/d/1sANVXPe05rDFzKI7B5r8jIwC-Qpg4v47SLCIn9kdRBA/edit?usp=sharing)

<!-- [!["Project Walk-through Video Thumbnail"](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE) TODO -->

[![Project Walk-through Video Thumbnail](./readme-thumbnail.png)](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)


## 🧰 Technologies
- [GitHub Actions](https://docs.github.com/en/action)
- [Node.js](https://nodejs.org)
- [AWS Lambda](https://aws.amazon.com/lambda)
- [Redis](https://redis.io)

## 📄 Documentation

- [Installation](https://github.com/spencerlepine/open-source-crawler/blob/main/docs/installation.md)
- [Getting Started](https://github.com/spencerlepine/open-source-crawler/blob/main/docs/getting-started.md)
- Components:
  - [GitHub Actions](https://github.com/spencerlepine/open-source-crawler/blob/main/docs/actions.md)
  - [Lambda Functions](https://github.com/spencerlepine/open-source-crawler/blob/main/docs/lambda.md)
  - [Repository Secrets](https://github.com/spencerlepine/open-source-crawler/blob/main/docs/secrets.yml)
  
---

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)