---
date: '2021-09-19'
title: 'Quickcart'
github: 'https://github.com/spencerlepine/quickcart'
external: 'https://grocery-client-sl.herokuapp.com/'
description: 'Grocery product catalog to assist budgeting and managing a shopping list stored in the cloud'
tech:
  - React
  - Firebase
  - Spoonacular
  - Testing Library
company: ''
showInProjects: true
slug: /projects/quickcart
screenshots:
  - ./quickcart.png
  - ./scan-upc.png
  - ./cart-screenshot.png
  - ./analyzer-screenshot.png
  - ./customize-product.png
  - ./saved-screenshot.png
  - ./search-screenshot.png
---

Make a shopping list with personal grocery data to help budget. Inspired by [Instacart](https://www.instacart.com/).

## Description
I built this website for myself to help assist and track grocery shopping lists. It all started from using a spreadsheet with products prices to budget. I needed some way to avoid manually entering product records and customize images, prices, and preferences.

Early on, this was a full-stack project with a [Mongo](https://www.mongodb.com/) and [Express](https://expressjs.com/) server. This was an iteration to the original spreadsheet, providing a simpler interface for managing a grocery list than Google Sheets. The MERN app had basic CRUD operations, but only stored data in the cloud for one user.

While working through a React course on [Scrimba](https://scrimba.com/), I applied my new-found knowledge to upgrade QuickCart. I migrated to [Firebase Firestore](https://firebase.google.com/docs/firestore) and implemented proper authentication for individual users.

From there, I continued expanded the database with product data, cart history, and individual user account details. I added many features to the client to save time when grocery shopping, including a bar-code scan to onboard products and a search bar.

I started working with the [OpenFoodFacts API](https://wiki.openfoodfacts.org/API) and the [Spoonacular API](https://spoonacular.com/food-api) to save even MORE grocery products. These also provided nutrition data to be displayed for each product.

One issue I ran into was trying to automatically save estimate prices. No services actually track this varying data, it was overkill to start scraping sites for this.

I learned many development skills during this project, and also had many failures. I learned React, React Router, React Context, MongoDB, Express, Firebase Authentication, Firebase Firestore, MaterialUI, Jest and React Testing Library, using a linter, git workflow, and deploying to Heroku.

## 🌟 Features:
- Browse grocery products records served from the Firestore database
- Save products to your cart, always persisted in the cloud.
- Analyze the cart to identify empty categories
- Customized product records and create a personal list
- Create an account to access your list anywhere
- Scan a bar code to upload a product pulled from Spoonacular or OpenFoodFacts
- View a history of transaction receipts previous from shopping lists
- Save product images with a convient image searching pop-up connected to Google CSE

## Project Takeaways:

- Designed a Firebase Cloud Firestore NoSQL database managing user records, grocery product catalogs, and cart purchase histories
- Organized state management for products, account information, and carts with Context hooks also persisted in the database.
- Integrated Firebase Authentication to assist storing user unique shopping lists, along with customized product records.
- Created a clean and modern user experience with Material UI following a wireframe and site-wide color theme.
- Implemented barcode scanning and external records from the OpenFoodFacts API to onboard new products
- Deployed static client (React) build files to Heroku.

## Wireframes:

I planned out the UI in Figma for this project, checkout [the wireframes here](https://github.com/spencerlepine/quickcart/tree/master/whitepaper).

## 📦 More Technologies:
- [Jest](https://jestjs.io/)
- [React Testing Libary](https://testing-library.com/)
- [OpenFoodFacts](https://world.openfoodfacts.org)
- [Google CSE](https://cse.google.com)
- [Spoonacular](https://spoonacular.com/food-api/docs)

---

🏠 [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; 😺 GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; 🐦 Twitter [@spencerlepine](http://twitter.com/spencerlepine)