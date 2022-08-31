---
date: '2021-09-19'
title: 'QuickCart'
github: 'https://github.com/spencerlepine/quickcart'
external: 'https://grocery-client-sl.herokuapp.com/'
description: 'QuickCart web app is a grocery product catalog for budgeting a shopping list stored in the cloud. Connected to Firebase (BaaS) and multiple external APIs'
tech:
  - React
  - Node.js
  - Material UI
  - Firebase
  - Spoonacular API
  - Google CSE API
  - GitHub Actions
  - Testing Library
company: ''
showInProjects: true
isFeatured: 'yes'
slug: /portfolio/quickcart
thumbnail: ./quickcart.png
screenshots:
  - ./quickcart.png
  - ./scan-upc.png
  - ./cart-screenshot.png
  - ./analyzer-screenshot.png
  - ./customize-product.png
  - ./saved-screenshot.png
  - ./search-screenshot.png
---

## QuickCart Overview
A personalized recreation of [Instacart](https://www.instacart.com/). Create an account, browse the grocery product catalog, and record weekly shopping trips by saving items to cart. Search countless groceries from the OpenFoodFacts API and Spoonacular API records.

The features don't end there. Can't find a product listed? Scan a barcode or enter product details (price, name, category) to save a record to your account. Can't capture an image of this product? Easily find images through Google Search imported with the Google CSE API. Need to compare products? Sort through the catalog and your saved items, or even view nutrition facts for select products. Unsure you have enough items for your shopping list? Analyze the cart to see what categories are needed.

## Project Context
This is a solo project that was developed over the course of several months. My goal was to learn React, authentication, styling, test driven development, designing wireframes, working with third party APIs, and managing complex state across components.

## 🌟 Features
- Browse grocery products records
- Create an account and log in on web or mobile
- Manage a shopping list by saving products to your cart persisted in the cloud.
- Analyze the cart to identify empty categories
- View a history of transaction receipts previous from shopping lists
- Upload products to personal list by filling out form
- OR, scan a bar code to quickly upload a product
- Customize product records by saving images, prices, and nutrition facts

## 📦  Technologies
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Libary](https://testing-library.com/)
- [OpenFoodFacts](https://world.openfoodfacts.org)
- [Google CSE](https://cse.google.com)
- [Spoonacular](https://spoonacular.com/food-api/docs)

## Technical Achievements

- Designed a Firebase Cloud Firestore NoSQL database managing user records, grocery product catalogs, and cart purchase histories
- Organized state management for products, account information, and carts with Context hooks also persisted in the database.
- Integrated Firebase Authentication to assist storing user unique shopping lists, along with customized product records.
- Created a clean and modern user experience with Material UI following a wireframe and site-wide color theme.
- Implemented barcode scanning and external records from the OpenFoodFacts API to onboard new products
- Deployed static client (React) build files to Heroku.

## Wireframes:

I planned out the UI in Figma for this project, checkout [the wireframes here](https://github.com/spencerlepine/quickcart/tree/master/whitepaper).

## Challenges

#### Authentication
Since the goal of this project was to have grocery lists accessible on any device, I planned to deploy it. This was my first experience with Authentication, and I wasn't sure how to approach it.

With the client/server MERN stack, I began with sending a user/password to the server. I quickly realized this flaw, which led me to Firebase.

Instead of investing in the backend and database, I decided to focus on the client side. This transition allowed me only develop the UI/UX and user stories to improve the actual product.

#### The Database
In the beginning, I started with a simple MongoDB database writing CRUD operations with an Express server. I also had a `.csv` file with grocery product data, and I needed a way to import/export it all. I was able to integrate a CSV file download and upload feature in the client. However, this was not a great solution if I were to use this app on my phone as well.

The other problem was everything was stored a single user. After integrating Firebase for authentication, I decided to scrap the MERN stack and migrate to Firebase Firestore.

I found Firestore to be very intuitive and continued expanding the database. Overall, it was helped me understand the importance of following a database design and schema just like crafting code.

#### State Management
As more features were added, the code base became more complex. Eventually, I was managing many Context hooks, API helper functions, and components.

This forced me to carefully design components and organize data passed down through props. At one point, I did a complete overhaul of the codebase to clean up the project.

As a result, it was a great lesson for writing better front end code.

## Background Story
I built this website for myself to help assist and track grocery shopping lists. It all started from using a spreadsheet with products prices to budget. I needed some way to avoid manually entering product records and customize images, prices, and preferences.

Early on, this was a full-stack project with a [Mongo](https://www.mongodb.com/) and [Express](https://expressjs.com/) server. This was an iteration to the original spreadsheet, providing a simpler interface for managing a grocery list than Google Sheets. The MERN app had basic CRUD operations, but only stored data in the cloud for one user.

While working through a React course on [Scrimba](https://scrimba.com/), I applied my new-found knowledge to upgrade QuickCart. I migrated to [Firebase Firestore](https://firebase.google.com/docs/firestore) and implemented proper authentication for individual users.

From there, I continued expanded the database with product data, cart history, and individual user account details. I added many features to the client to save time when grocery shopping, including a bar-code scan to onboard products and a search bar.

I started working with the [OpenFoodFacts API](https://wiki.openfoodfacts.org/API) and the [Spoonacular API](https://spoonacular.com/food-api) to save even MORE grocery products. These also provided nutrition data to be displayed for each product.

One issue I ran into was trying to automatically save estimate prices. No services actually track this varying data, it was overkill to start scraping sites for this.

I learned many development skills during this project, and also had many failures. I learned React, React Router, React Context, MongoDB, Express, Firebase Authentication, Firebase Firestore, MaterialUI, Jest and React Testing Library, using a linter, git workflow, and deploying to Heroku.

---

🏠 [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; 😺 GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; 🐦 Twitter [@spencerlepine](http://twitter.com/spencerlepine)