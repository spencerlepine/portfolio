---
date: '2021-10-20'
title: 'Atelier API'
github: 'https://github.com/sdc-bareminimum/project-catwalk-related-service'
external: ''
description: 'Node.js RESTful API serving retail product data built to handle demands of production level traffic.'
tech:
  - Node.js
  - Express
  - PostgresSQL
  - AWS EC2
  - NGINX
  - Docker
  - GitHub Actions
company: ''
slug: /portfolio/atelier-api
thumbnail: ./diagram.png
screenshots:
  - ./diagram.png
isFeatured: 'yes'
showInProjects: true
---

## 🌟 Project Overview

**Situation:** Refactoring a Node.js RESTful API deployed on AWS EC2, serving retail product data from a PostgreSQL database.

**Task:** Optimize and scale the API to handle production level traffic with low latency and <1% error rate. This backend was crucial to have ready for the next project, which was the frontend serving this data. It was a challenge without using a Kubernetes cluster or database sharding.

**Action:** Dockerized the API for horizontal scaling with the NGINX proxy service. Used the dynamic least connection algorithm for load balancing to distribute traffic.  Optimized the Node.js app  with caching, refactoring database queries, and other minor code improvements.  Identified and resolved system bottlenecks with load testing using K6 and Loader.io.

**Result:** Achieved traffic from <10 RPS to reliable 700 RPS with 70 ms average latency and <1% error rate. Avoided breaking changes with testing and continuous integration, decreasing the stress testing cycle length to allow  quick iteration of the system..

## 📈 Preformance Results

#### Target Preformance
- [ ] Throughput: 100 RPS
- [ ] Latency: 2000 ms
- [ ] Error rate: <1% rate

#### Actual Preformance
- [x] Throughput: ~700 RPS (Max 5000 RPS)
- [x] Latency: ~70 ms
- [x] Error rate: <1% rate

## Engineering Journal

To keep track of everything I learned, along with the challenges faced during this project, I maintained an Engineering Journal available as a [PDF](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/resources/system_design_project_engineering_journal.pdf), [Markdown](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/resources/JOURNAL.md), or [Google Docs](https://docs.google.com/document/d/1pTTeDCzcKNozd9dljexVn-PrXwzoTBS0hby2dOZ95yw)


## API Documentation

The endpoints for this project are documented in [this markdown file](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/ATELIER_API_DOCS.md). This project was dedicated to rebuilding the Products module of the [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f).

## 📦 Technologies:
- [NGINX](https://www.nginx.com/)
- [Docker](https://www.docker.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Postgres](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/) / [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [GitHub Actions](https://github.com/features/actions)
- [Loader.io](https://loader.io/)
- [K6](https://k6.io/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [ESLint](https://eslint.org/)
- [Husky](https://www.npmjs.com/package/husky)
- [Prettier](https://prettier.io/)

## Extra Resources:

- API Documentation: [Atelier API](https://github.com/sdc-bareminimum/project-catwalk-related-service/blob/main/ATELIER_API_DOCS.md)
- Engineering Journal: [PDF](resources/system_design_project_engineering_journal.pdf) &nbsp; [Markdown](resources/JOURNAL.md) &nbsp; [Google Doc](https://docs.google.com/document/d/1pTTeDCzcKNozd9dljexVn-PrXwzoTBS0hby2dOZ95yw)
- Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
- Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)