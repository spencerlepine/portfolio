---
date: '2021-10-20'
title: 'Atelier Products'
github: 'https://github.com/sdc-bareminimum/project-catwalk-related-service'
external: ''
description: 'An API serving retail product data built to handle demands of production level traffic'
tech:
  - Node.js
  - Express
  - PostgresSQL
  - AWS EC2
  - NGINX
  - Docker
company: ''
showInProjects: true
slug: /portfolio/atelier-products
screenshots:
  - ./diagram.png
isFeatured: ''
---

## Overview
This was a solo, week long **system design** project to serve 20 million retail product records. The goal was to design the robust database and API matching an expected [schema](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/README.md). Preformance expectactions were 100 request per second throughput, with sub 2000 ms latency, and a less than 1% error rate.

## Description
The Hack Reactor System Design Capstone Project. The goal was to replace the existing API (for Project Catwalk) with a backend system that can support the full (retail product) data set for the project and can scale to meet the demands of production level traffic.

This projects consists of a Nginx load balancer, a Node/Express server, and a PostgreSQL database. All three are built/run in docker containers and deployed to AWS EC2 instances. This API endpoint has been optimized to handle product level traffic, verified by load testing.

## Preformance End Results:
 - Throughput: ~400 RPS (Max 5000RPS)
 - Latency: ~70ms
 - Error rate: <1% rate

## Project Takeaways:

 - Built a multi-layer backend system with initial capacity of 100 rps then optimized to handle 5000 rps, maintaining 70ms latency with a <1% error rate
 - Increased fault tolerance and system availability for users by horizontally scaling proxy and service layers with NGINX load balancers using a dynamic least connection algorithm.
 - Decreased stress testing cycle length by identifying and revising system bottlenecks using Loader.io and K6
 - Simplified deployment process with Docker images to create Node.js server instances on AWS EC2
 - Implemented continuous integration with GitHub Actions running unit and integration tests with Jest.

## Engineering Journal:

To keep track of everything I learned, along with the challenges faced during this project, I maintained an Engineering Journal available as a [PDF](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/resources/system_design_project_engineering_journal.pdf), [Markdown](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/resources/JOURNAL.md), or [Google Docs](https://docs.google.com/document/d/1pTTeDCzcKNozd9dljexVn-PrXwzoTBS0hby2dOZ95yw)


## API Documentation:
This project was dedicated to rebuilding the Products module of the [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f).

## 📦 More Technologies:
- [Sequelize](https://sequelize.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://www.npmjs.com/package/husky)
- [Prettier](https://prettier.io/)

---

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
