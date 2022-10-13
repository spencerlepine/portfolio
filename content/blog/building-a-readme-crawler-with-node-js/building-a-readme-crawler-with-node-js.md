---
title: Building a README Crawler with Node.js
description: An Overview of the Node.js README Web Crawler project and how I created it.
date: 2021-08-15
draft: false
slug: /blog/building-a-web-crawler-with-node-js
tags:
  - GitHub
  - Repositories
  - WebCrawler
  - Node.js
thumbnail: 'thumbnail.png'
---

Building a README Crawler with Node.js

An Overview of the Node.js README Web Crawler project and how I created it.

A recent project of mine was this Node.js [web crawler](https://spencerlepine.com/blog/building-a-web-crawler-with-node.js). Working on that led to this idea for another crawler. I wanted a way to navigate through GitHub and search for obvious typos. I had this idea after stumbling across silly typos on numerous portfolio pages. Perhaps I could help fix these errors and ensure these portfolio/sites are more presentable.

If you’re interest in the final product, you can find the package [here](https://www.npmjs.com/package/readme-crawler), as well as the [GitHub Repo](https://github.com/spencerlepine/readme-crawler).

The goal was to create a process for automatically navigating through repositories and creating a method for spell-checking what is found. Doing that manually is time consuming, so the computer will execute that process for us. A [web crawler](https://www.cloudflare.com/learning/bots/what-is-a-web-crawler/) will systematically browse different pages across the internet. The purpose of this specific crawler would be scraping GitHub only.

Here's the breakdown of this problem:
  - Fetch the HTML data from a URL
  - Look at the README file displayed in that  DOM
  - Export README and details README for later use
  - Generate a list of repository links in displayed in README

To execute the algorithm, we will use [Node.js](https://nodejs.org/) (for the JavaScript runtime) and [node-fetch](https://www.npmjs.com/package/node-fetch) (for network requests). This means we will run the code locally from the command line.
For this project, we will have an output folder to store all the README data, as well as a list (queue) of repository URLs to visit.
Before diving into the code, it is important to plan the input and output of the algorithm. For this web crawler, we will start at a valid GitHub repository page, which would be one URL string. After visiting each page with a README, we will export the data into a new file.
Now lets cover the process of requesting a repository page from a URL. For this, we only care about saving the README file that is displayed, and we will ignore any other links that GitHub displays (such as the navbar). We will send a URL request with node-fetch, and retrieve the result of a HTML string. If we convert the HTML string to a DOM Tree, we can search for a specific element. GitHub stores the README file under a div with the class "markdown-body". We can use a library called 'jsdom' to use Browser API methods, and return a specific node.

```js
const fetchReadMeDOMFromRepoURL = async function (url) {
  let destinationDOM;

  await fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const { document } = new JSDOM(data).window;
      const readmeNode = document.querySelector(".markdown-body");
      destinationDOM = readmeNode;
    })
    .catch((err) => {
      console.warn("Could not fetch url: " + url);
    });

  return destinationDOM;
};
```

Now that we have access to a local node displaying the README content, we can export that data.
Instead of using a spell checker at this stage, I decided to handle that separately and resort to a command-line alternative. This meant the README file could be exported to file locally, and then we process spell checking files after the crawler stops running.
With a README DOM node we will convert it from HTML to a markdown file. Websites give the browser HTML code to display.

```js
const exportRepoDOM = async function (readmeNode, repoURL, outputFolderPath) {
  if (readmeNode) {
    const { name, owner, href } = parseGitHubUrl(repoURL);
    const folderDestination = `${outputFolderPath}${owner}-${name}/`;

    if (!fs.existsSync(folderDestination)) {
      fs.mkdirSync(folderDestination);
    }

    const markdown = turndownService.turndown(readmeNode.outerHTML);
    createMarkdownFile(markdown, folderDestination);

    const info = `URL=${href}\nGIT_URL=${href}.git\nREPO_NAME=${name}\nOWNER=${owner}\n`;
    createInfoFile(info, folderDestination);
  }
};
```
Before we are finished with this README, we have to traverse the DOM node to find any other GitHub repository links. This will allow us to follow pages and crawl GitHub. Keep in mind though, there could be a README without any links, and we might want to navigate through GitHub some other way.
Since we are using jsdom, we can use the built-in getElementsByTagName method. We only want to save valid GitHub links, so we can use a helper function to test with regex. With that, we can create a list of links found.

```js
const getLinksFromDOM = function (jsDOM, isUsableLink) {
     const validLinks = [];

    const linkElements = (jsDOM && jsDOM.getElementsByTagName("a")) || [];
    for (let i = 0; i < linkElements.length; i++) {
      const thisElement = linkElements[i];
      const thisUrl = thisElement.href;

      if (isUsableLink(thisUrl)) {
         validLinks.push(thisUrl);
      }
    }
    return validLinks;
};
```

Great, so far we retrieve README content from a URL and use that to generate a list of new URLs. If we want to continue searching and finding README files, we can follow the links and repeat entire process. This will recursively crawl the GitHub repositories, allowing us to gather data.
To keep track of the new URLs to visit, each link needs to be stored in a queue, or in terms of data structures, a (stack)[https://www.geeksforgeeks.org/stack-data-structure/]. To implement this, I append all the items of the new list to a file. Whenever the program is ready to fetch the next link, we can pull and remove the first line of the queue file and return it for a new URL string. The link queue will be stored in a file where we append/delete line by line. This was done to avoid storing an array in memory to avoid crashing, and to allow pausing the crawler and any point.

```js
const saveLinkToQueue = function (linkStr, outputFolderPath, outputFileName) {

    const filePath = outputFolderPath + outputFileName;
    if (fs.existsSync(filePath)) {
      fs.appendFile(filePath, linkStr + "\r\n", function (err) {
        if (err) throw err;
      });
    } else {
      fs.writeFile(filePath, linkStr + "\r\n", function (err) {
        if (err) throw err;
      });
    }
};
```

All of these modules together will download README files in an organized output folder. After running the web crawler, we can run a spell checker on the exported data. To do this, I used a package called ‘[yaspeller](https://www.npmjs.com/package/yaspeller)’. Each time I want to correct a README, I can generate a file with all common typos and errors.

```sh
yaspeller -e ".md" ./ --find-repeat-words --ignore-digits --ignore-urls --only-errors &> "spellcheck.txt"
```

And that's it! I now have a way to look through hundreds of repositories. I can spell check tons of README files and help people remove possibly embarrassing typos. There are many ways to expand on this. You could analyze the languages used, the diction, create a Graph, or even run the data through machine learning algorithms.

```js
run() {
    const repositoriesFolder = this.outputFolderPath + "repositories/";
    const linkQueueFile = "linkQueue.txt";

    const linkListCallback = async function (linkList) {
      const outputFolderPath = this.outputFolderPath;
      if (this.followReadMeLinks) {
        await linkList.forEach(async (link) => {
          await saveLinkToQueue(link, outputFolderPath, linkQueueFile);
        });
      }
    }.bind(this);

    let nextURL =await getNextLinkFromQueue(this.outputFolderPath, linkQueueFile

    while (nextURL) {
      fetchAndProcessRepo(nextURL, repositoriesFolder, linkListCallback);
      nextURL = await getNextLinkFromQueue(this.outputFolderPath, linkQueueFile);
    }
  }
```


This project is also available on [npm](www.npmjs.com/package/readme-crawler). Install the package and try it yourself!

```js
import ReadMeCrawler from 'readme-crawler';

var crawler = new ReadMeCrawler({
    startUrl: 'https://github.com/jnv/lists',
    followReadMeLinks: true,
    outputFolderPath: './output/'
 });

 crawler.run();

```

Not only was this project fun, but I was able to learn about using Node.js and other npm packages. I spent many hours reading about the 'fs' module, and thinking of different ways to process/store the data. I also tried working with executing commands with Node.js, to run the spell checker synchronously on each result. However, It was difficult to pipe the stdout correctly, and I realized that spell checking was a separate concern apart from web crawling anyways.
Overall, this was a great learning experience and problem solving exercise.

---

View the source code on [GitHub](https://github.com/spencerlepine/readme-crawler).

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
* [YouTube (Spencer Lepine)](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)
