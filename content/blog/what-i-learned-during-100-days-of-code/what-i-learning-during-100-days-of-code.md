---
title: What I Learned During 100DaysOfCode
description: A recap of the concepts and skills I acquired during this challenge.
date: 2021-06-26
draft: false
slug: /blog/what-i-learned-during-100-days-of-code
tags:
  - React
  - ES6
  - Toy Problems
  - API
  - 100DaysOfCode
thumbnail: 'thumbnail.png'
---

<!-- MARKDOWN CONTENT -->

![](https://miro.medium.com/max/1400/1*n2qkciO2rlQFMSrCwUAZYQ.png)

I recently completed a popular challenge on Twitter name #100DaysOfCode. There is no barrier to entry, and you just need to code for at least 1 hour a day. This is a great challenge to motivate yourself and see your progress alongside others.

In my case, it was not my first time coding when I started this. However, the challenge helped me stay dedicated and build upon each skill I learned.

Day 1–10: The Challenge Begins!
===============================

It all started with a ton of useful lessons on ES6 skills. There was a lot of new syntax and tricks that I never knew about. Since I started learning Javascript before ES6 was released, there were quite a few features I needed to practice.

[ ES6 Course - Scrimba](https://scrimba.com/learn/introtoes6)

Having just completed a small course on the React framework, I worked on implementing ES6 skills I picked up to make small projects. Here is a simple React app connected to GitHubs REST API. This helped me learn how to make fetch calls and save the data to state.

[ spencerlepine/github-api-react - GitHub](https://github.com/spencerlepine/github-api-react)

Each day I worked on different React concepts. Connecting/modifying a mock database locally. Working with state and props and pass data around. My most effective learning styles was learning-by-doing. After reading the docs and seeing a new feature, I would realize how I could use it to improve my project.

To wrap up this part of the challenge, there were some coding challenges from Cyber Dojo to help practice problem solving. I was able to solve “Align Columns”, “LCD Digits”, “Wonderland Number”. Check out my repo with my solutions here:

[spencerlepine/cyber-dojo-exercises - GitHub](https://github.com/spencerlepine/cyber-dojo-exercises)

Day 11–20: Just Getting Started
===============================

At this point, there was some great momentum and I was always feeling more motivated to learn. The Scrimba React course had a lot of great lessons on all the basics of React.

[The React Bootcamp - Scrimba](https://scrimba.com/learn/react)

I built a controlled-form in React that would update state based on events and targets. Next up was the big concept of hooks and functional components. Little did I know this was only the START of what is possible in React.

The React course was complete, which led me to start a new project called Spotify Top Songs. This site would connect to the Spotify Web API with client-side authentication. When a user connected their account, they could select various artists from a menu. The script would then generate a playlist by accessing the top 5 songs of each artist.

This time, code was much more organized with the components and logic separated. With so many fetch calls and bits of logic to intertwine, it was important to build everything slowly and cleanly.

[spencerlepine/spotify-top-songs - GitHub](https://github.com/spencerlepine/spotify-top-songs)

I learned about prop-types and default props, which can be pretty handy. Worked React higher order components and children components. Started learning about AWS S3 buckets. To practice, I deployed my Spotify Top Songs to the S3 bucket.

After discovering the behemoth of AWS products, I wasted no time working to set up an AWS EC2 instance to host a static site, which I would connect to my Route53 domain.

Just before reaching day 20, a worked on an in-browser [Chess React](https://github.com/spencerlepine/react-chess) app. This was just another opportunity to practice Javascript and apply knowledge.

Day 21–30: Gaining Momentum!
============================

With a solid understanding of React, it was time to double down on more computer science fundamentals. It was exciting to build toy projects, but that wouldn’t be enough.

After finding the CS50 course online, I watched the lectures on C and Python. This was very useful to learn about memory pointers and how the interpreter reads code. Dave is a GREAT teacher and I would highly recommend going through the course.

Lots to learn about memory allocation, what libraries are doing under the hood, string manipulation, and regex.

Alongside CS50 was more material about React memo and Context API — write a component to access a ‘global’ state in a separate file. Import that file and render through that in any component of choice. Custom hooks that handle business logic. React router basics. Conditional rendering. All of these skills would allow me to start creating real multi-page sites!

Day 29 was the day I started working on Galvanize basic prep lessons.

Day 31–40: Diving Deeper
========================

CS50 included some lessons about data structures and SQL. I worked on some really good challenges for the CS50 Fiftyville assignment.

It was time for me to learn how to connect a database. I began working with MongoDB and Node.js. I used Postman to practice making requests.

With a lot of data to store in state, I needed a way to organize it all. Thats where React Redux came up — createStore, redux philosophies, subscribe, dispatch, combineReducer. Abstracting reducers to handle each state in isolation. combineReducers to combine everything and handle state more cleanly in a rootReducer.

With MongoDB connected to React, I was able to work on a MERN app that could read/write from the database. Connecting back-end/front-end routes and using controllers for the fetch logic/requests.

Day 36 was when I began the QuickCar react app. Connected it to a backend MongoDB Atlas server. Add reducer + actions for post/fetch from frontend. Save the data in redux state. I created forms and routes with components connected to the Redux state using useSelectors.

Day 41–50: Working on QuickCart
===============================

As I worked through some lessons for Galvanize basic prep, I also started lessons on [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/). Got a better understanding of Regex from that.

Next came Javascript algorithm practice + Object Orientated Programming review. Inheriting methods from parent objects. Using Object.prototypes to reuse methods.

I revisited my AWS account. Started basic portfolio site using React — Set up LAMP stack server to host website. Direct AWS Route53 domain to DigitalOcean droplet. Set up SSL, MySQL, and WordPress. Working to set up a blog too.

With a working site, it would be really nice to have a blog hosted on the domain. I attempted to set up a blog. Researched Gatsby, GraphCMS, ButterCMS, GraphQL. Queries were not working. Unable to route to posts. This was a difficult concept to navigate, but along the way I learned a lot about apache and setting up ssl.

Day 51–60: A Working Blog!
==========================

Gatsby.js was the answer. Instead of using a headless CMS, I settled with local md files to use for an article. During this challenge, I spent many hours working with the ‘mdx’ plugin. I tried to connect a CMS through queries and GraphQL, but it was very difficult.

Around this time I continued working through Learn.co lessons for Flatiron prep. There were two main sections on Javascript and Ruby. The Ruby material was interesting and they even did a review on Object Oriented Programming.

Flatiron wasn’t the only school that I was preparing for though. I completed my technical assessment by creating a basic HTML page with images and a clickable button.

The last major assignment on hand was working through more of the freeCodeCamp Javascript fundamentals material.

Day 51–60: Coding Bootcamp!
===========================

No, I didn’t start a coding bootcamp, but I was getting ready! I got accepted into Flatiron (they didn’t do a TAA anymore), accepted into General Assembly, and I was studying to pass my Hack Reactor technical assessment. My target was in August, which was over 100 days from this point.

Making sure I could get into these schools was my main priority, but I continued learning and working on projects on the side.

I worked on building the QuickCart app and added tons of features. Import/Export a grocery database. Improve the UI and styles. Upload images for a product in the form. Convert images to base64 strings. Work with file blobs and cropping images. Generate suggested products with a recommendation algorithm. Work on authentications between the front/back-end for the MERN app. Add a “cart” to store items until purchase.

At this point, the grocery app was still connected to MongoDB. I was able to use localStorage and save some user data, but I knew I needed EVERYTHING to be in the cloud.

With all that work done, I began Hack Reactor premium prep. The technical admissions assessment was going to be difficult, so this would help me prepared my vocalization and problem solving.

This is where I began working testing. Test driven development is integral to Software Engineering. I was able to appreciate my code much more after practicing it.

Day 71–80: Hack Reactor and Firebase
====================================

At this point, I was making really good progress in my Hack Reactor prep work. I was able to learn the basic methodology of testing my code. Whenever I worked on Javascript challenges, it was important to practice writing tests and get used to the upfront setup.

This week was my first attempt at the Hack Reactor TAA, and I passed! This was incredible, because I got to choose between GA, Flatiron, and Hack Reactor.

I continued working on QuickCart on the side. There were some bug fixes and UI improvements that needed to be done. I migrated from MongoDB to Firebase for the backend. I had to read through the docs and get familiar with Firestore.

One of the most important themes of this week was practicing problem solving. Hack Reactor was really pushing best practices and effective communication. Each day I worked on a toy problem/code challenge. With a timer running, I would work on my pseudo-code BEFORE starting and really explain/verbalize my thought process as much as I could.

Now that I was able to write small tests for a challenge, I wanted to work on writing tests for a real project. I started learning how to use Enzyme and Jest for React test-driven-development. The process is tedious at the start, but it will ensure the code is more robust. This was difficult for me at first, because I wasn’t sure if my React test was written incorrectly, or I needed to pass the test now instead. There were lots of features to read Docs about, like redirecting, testing contexts/store, and tons more.

Day 81–90: Test Driven Development and APIs
===========================================

The TDD practice with React was the birth of Woofer. I wanted to work on a project and build it from the ground up writing tests. I did my best to write a test FIRST before writing code. This project did not go very far during my challenge, since there were other priorities. It was going to take a long time to complete the idea, and it was just good practice to implement testing.

I documented/planned out the Woofer app before starting. I made wireframes and planned out the logic/routing ahead of time. It was taking WAY too much time to work with mock stores and complex routing in testing. I even fell into certain anti-patterns with testing after researching about tests online.

[spencerlepine/woofer - GitHub](https://github.com/spencerlepine/woofer)

I stepped away from the deep rabbit hole of React TDD. I went back to QuickCart and migrated EVERYTHING to client-side. Now it was one complete React app with firebase authentication built in. I was able to host this site on Heroku too, so anyone could use it.

[spencerlepine/quickcart  - GitHub](https://github.com/spencerlepine/quickcart)

One feature I had been eager to add to the grocery app was “searching products”. With an empty form, users could manually input EVERY detail about a product, but nobody would want to use that. By connecting to the OpenFoodFacts API, I could search a dump of thousands of grocery products. This was an open source dump that anybody can contribute to. They also feature nutrition score data, so it can help users see healthier options.

Day 91–100: The Final Stretch
=============================

After learning so much with Javascript and best-practices for writing code, it was time to USE these skills. I continued working through Hack Reactor prep material. I learned about higher order functions, scopes, and hoisting. There were lessons about terminal commands and important dev tools like homebrew. It was time to upgrade my developer workflow, and get familiar with industry standard software.

Here I read about Node.js, npm, semvar, and modules. This was everything I need to know about how projects are set up and how developers are able to work together. There needs to be structure and conventions throughout the code base so everyone is on the same page.

I also added a some features to QuickCart on the side again. I connected a Google Custom Search Engine to allow image searches for a product. Instead of having the user upload or snap a photo, they could simply link an existing photo. This allowed me to store the image sources with links, instead a long base64 string with image data. That would improve scalability and prevent product images from being lost easily.

The next Hack Reactor prep section was about Git and GitHub. This was a REALLY useful sections to go through because it will be the backbone of any project. Knowing how to properly document and collaborate on a project makes everything so much more compatible. Your code needs to be readable and maintainable. People can review your code and merge branches to improve the project. You could even checkout different commits and revert your code. Before I learned about these practices, I would always CTRL+Z my file and start over again, wasting so much time.

More work on Mocha and Chai testing was done. Getting familiar with different libraries and how they have similar functions.

**Challenge Complete!**
=======================

After 100 days of coding, I was able to explore new features and concepts relating to Javascript and software development. The dedication allowed me to keep my momentum and build upon what I learned the previous day.

Interested in working together?
-------------------------------

Let’s connect! Find me on any of my socials linked below:

*   [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
*   [GitHub (@spencerlepine)](https://github.com/spencerlepine)
*   [YouTube (Spencer Lepine)](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)

Here is an overview of everything I learned:
--------------------------------------------

*   ES6 Javascript
*   Functional vs. OPP programming
*   Javascript algorithms and data structures
*   Node.js
*   Redux
*   React
*   SQL
*   Python
*   Comp Sci fundamentals
*   MongoDB
*   Firebase
*   React Context, state, props, controlled forms
*   CMS
*   Hosting a static site
*   Procedure for problem solving (pseudocode, breaking it down)
*   Mocha/Chai testing
*   React Jest/Enzyme testing
*   Connecting to APIs (Spotify Web API, GitHub REST API, OpenFoodFacts API)
*   Fetch calls + axios
*   Separating the front-end / back-end
*   Deploying to Heroku

**Projects:**
-------------

Explore more [projects](https://spencerlepine.com/portfolio) — or check out the ones mentioned in the article:


### QuickCart

Make a shopping list with personal grocery data to help budget.

[GitHub Repo](https://github.com/spencerlepine/quickcart)

-----------------------


### Portfolio Site

Portfolio and blog website ( Visit Here) created by Spencer Lepine. Built using static pages created with GatsbyJS…

[GitHub Repo](https://github.com/spencerlepine/spencerlepine.com)

-----------------------

### Cyber Dojo Exercises

Personal solutions to various Cyber Dojo exercises. Code is written in Python and tests use 'asserts' with pytest. All…

[GitHub Repo](https://github.com/spencerlepine/cyber-dojo-exercises)

-----------------------


### Woofer

Tinder for Pets Web App. Swipe and connect with other furry friends in the area.

[GitHub Repo](https://github.com/spencerlepine/woofer)

-----------------------

### React Chess

Play chess in the browser by with drag and drop moves. This was created using the Javascript React framework. component…

[GitHub Repo](https://github.com/spencerlepine/react-chess)

-----------------------

### Study Garden

Improve focus and discipline with this timer app. Study until the timer runs out and add plants to your personal…

[GitHub Repo](https://github.com/spencerlepine/study-garden)

-----------------------


### Spotify Top Songs

Generate a Spotify playlist based on the top rated songs of your favorite artists. Connect user Spotify accounts to…

[GitHub Repo](https://github.com/spencerlepine/spotify-top-songs)

-----------------------

### GitHub User Overview

This React App allows the user to type a username get an overview of their GitHub repos using the GitHub REST API.

[GitHub Repo](https://github.com/spencerlepine/github-api-react)

-----------------------

### CS50 Problem Sets

My solutions to the online CS50 course generously provided by Harvard University.

[GitHub Repo](https://github.com/spencerlepine/cs50-problem-sets)
