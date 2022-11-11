---
date: '2022-11-11'
title: 'Bezos API'
github: 'https://github.com/bezos-api/bezos-api'
description: 'Random Jeff Bezos quote API deployed to AWS'
tech:
  - AWS Lambda
  - GitHub Actions
  - Amazon Gateway API
  - AWS CDK
featureSection: 'hobby'
slug: /portfolio/bezos-api
thumbnail: ./diagram.png
screenshots:
  - ./diagram.png
---
[![Continuous Integration](https://github.com/bezos-api/bezos-api/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bezos-api/bezos-api/actions/workflows/ci.yml) [![Deploy Lambda](https://github.com/bezos-api/bezos-api/actions/workflows/deploy-lambda.yml/badge.svg?branch=main)](https://github.com/bezos-api/bezos-api/actions/workflows/deploy-lambda.yml)

API to fetch a random Jeff Bezos quote deployed to AWS.

> To see tickets - view the status of the [GitHub Project](https://github.com/orgs/bezos-api/projects/1).

This is a serverless API using Amazon Gateway API connected to AWS Lambda. Deployments are automated using AWS CDK (w/ GitHub Actions) to provision resources and permissions automatically.


## 🔥 API Endpoint

```sh
$ curl -L https://czrnt8u0m7.execute-api.us-east-1.amazonaws.com/prod/api/random
```

### Example `JSON` response

```json
{
  "content": "Good intentions don't work, mechanisms do"
}
```

## Contact

Spencer Lepine - [@spencerlepine](https://twitter.com/spencerlepine)

Project link: [https://github.com/bezos-api/bezos-api](https://github.com/bezos-api/bezos-api)

---

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
