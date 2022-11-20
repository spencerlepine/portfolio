---
date: '2022-06-20'
title: 'Llama as a Service'
github: 'https://github.com/llama-as-a-service'
external: 'https://www.youtube.com/watch?v=uDQUA_JTMJk'
description: Random Llama Image API. The world's first Llama as a Service (LaaS)
tech:
  - React
  - Node.js
  - MongoDB
  - Docker
  - Netlify
  - GitHub Actions
  - Heroku
featureSection: 'hobby'
thumbnail: ./laas-thumbnail.png
slug: /portfolio/llama-as-a-service
screenshots:
 - './diagram.png'
 - './laas-thumbnail.png'
---

Random Llama Image API. The world's first Llama as a Service (LaaS) - by @spencerlepine

This is a simple Node/Express REST API deployed to Heroku with GitHub Actions. It connects to the MongoDB NoSQL database, which stores image URL strings.

Check out the Image API source code on [GitHub](https://github.com/llama-as-a-service/images-service).

Originally, the goal of this project was to create a dockerized microservice architecture, with a gateway API and JWT authentintication. As you may suspect, this is an overly-complex solution for a simple REST API. I ran into a lot of issues working with Kubernetes, and have since left the project as is.

To keep development of each service organized, I used the polyrepo approach with everything organized under the [GitHub Organization](https://github.com/llama-as-a-service).

#### ✅ Try It Out:
```sh
curl https://llama-as-a-service-images.herokuapp.com/random
```

##### JSON Response
```json
{
  "message": "https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
}
```

## 🎥 Walkthrough Video

[![YouTube Video](https://user-images.githubusercontent.com/60903378/178522554-bdd1e702-b01c-4433-8d11-2b8e4ccf4f75.png)](https://www.youtube.com/watch?v=uDQUA_JTMJk)

## 💡 Blog Post
Read about the development process and what I learned on my [blog post](https://www.spencerlepine.com/blog/building-llama-as-a-service)

### 🛠️ Built with:
  - Node.js
  - Express
  - Docker
  - Heroku
  - GitHub Actions
  - MongoDB

---

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
