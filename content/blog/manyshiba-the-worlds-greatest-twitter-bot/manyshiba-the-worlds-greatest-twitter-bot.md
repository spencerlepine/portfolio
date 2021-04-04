---
title: ManyShiba - The World's Greatest Twitter Bot
description: Exploration of building a custom Twitter Bot.
date: 2021-09-01
draft: false
slug: /blog/manyshiba-the-worlds-greatest-twitter-bot
tags:
  - GitHub
  - Twitter
  - Node.js
  - Bot
thumbnail: 'thumbnail.png'
---

ManyShiba is the greatest Twitter bot ever created. Bless your soul with a daily photo of the almighty Shiba. Be uplifted by the spirit of this holy and sacred creature to free your soul.

For so long, I felt that something was missing in my life. After being blessed by the presence of a divine Shiba Inu dog, I had my answer. I could cleanse my soul each day by reminding myself of this divine being. But that couldn’t be it, there had to be some way I could bless EVERYONE.

Behold - your new favorite Twitter bot - [@ManyShiba](https://twitter.com/manyshiba). (source code: [GitHub](https://github.com/spencerlepine/manyshiba-bot))

### So what exactly is the ManyShiba Bot?

This is a simple Node.js app connected to the Twitter API. The app is deployed on [Heroku](https://dashboard.heroku.com/)  and connected to the Twitter developer account.

Each time the script runs, a new dog image will be fetched from the [Shibe.online](https://shibe.online/) API. That image will then be uploaded and posted on the Twitter feed.

### Technologies:
To build this app, there were three technologies I worked with.

 - [Node.js](https://nodejs.org/)
 - [Shibe.online API](https://shibe.online/)
 - [twit](https://www.npmjs.com/package/twit)

Node is a popular Javascript runtime environment that can easily run on Heroku. Heroku is a PaaS and great tool to deploy a small app for free.

The Shibe.online API is a third party service to retrieve a link for dog pictures. Since there are many random photos to use in that database, it is the perfect resource for finding many new photos.

Finally, the twit library is a Twitter API Client for Node that simplifies the REST requests. Since this app will only be posting tweets, there are on advanced requests being made to the Twitter API.

With each of these tools, we can have a functioning Twitter bot. Here are the steps for code:

- Save the Twitter API configuration
- Initialize the Twit Client with the configuration
- Fetch a random image from Shibe.online
- Convert the image from a URL to base64
- Tweet the image

After registering a [Twitter App](https://developer.twitter.com/), make sure to enable Read/Write permissions in the App settings. Create an `.env` file in the root of the project based on `.env.example`. We can use this data in our file with an object like this:

```js
const config = {
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_API_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
}
```

In `app.js` we can import `twit` and pass along the config obj:

```js
import twit from 'twit';
...
const twitterClient = new twit(config);
```

Before we tweet anything, we first need to generate the content to post. This is where we will retrieve an image from the Shibe.online API. Note, the Shibe endpoint will return a list of image URLs stored on a third party server. We must download this image, because posting an image URL does not actually display it on the feed.

```js
const API_ENDPOINT = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false';
...
const fetchRandomImage = async (tweetFunction) => {
  const resultList = await fetch(API_ENDPOINT).then(res => res.json());
  const newImage = resultList[0];
  return newImage
}
```

After retrieving a URL from Shibe.online, we must fetch the image as well. We can convert the data from the image URL and convert it to a base64 string in memory. Since we are saving the image data, a Tweet will always load the image since it does not depend on the third party image database anymore.

Note, you can use any library for HTTP requests like [axios](https://axios-http.com/). This example uses the `http` and `node-fetch` libraries available on [npm](https://www.npmjs.com/).

```js
import fetch from 'node-fetch';
import http from 'http';
...
const urlToBase64 = async (imgUrl, tweetFunction) => {
  await http.get(imgUrl, async (httpRes) => {
    httpRes.setEncoding('base64');
    // Exclude -> "data:" + httpRes.headers["content-type"] + ";base64,";
    let body = "";
    await httpRes.on('data', (data) => {
      body += data;
    });
    await httpRes.on('end', () => {
      tweetFunction(body);
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

const fetchRandomImage = async (tweetFunction) => {
  ...
  await urlToBase64(newImage, tweetFunction);
}
```

With a base64 string, we need to upload it as media context to Twitter. After uploading it, we have access to a `media_id`. This media_id can be attached to the actual Tweet, which will cause the image to render on the feed. For this project, there is no text context attached to this Tweet.

```js
...
const tweetImage = (tweetContent) => {
  if (tweetContent) {
    twitterClient.post('media/upload', { media_data: tweetContent }, function (err, data, response) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      var mediaIdStr = data.media_id_string
      var altText = "Shiba Inu"
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

      twitterClient.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var params = { status: '', media_ids: [mediaIdStr] }

          twitterClient.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })
  }
}

fetchRandomImage(tweetImage);
```

With each step tied together, we can retrieve Shiba images and generate Tweets with media content. To see the source code, head over to the [GitHub repository](https://github.com/spencerlepine/manyshiba-bot).

With a working Twitter bot, I could run the script with Node on my local machine. However, it wouldn’t be automated if I had to run it manually. To solve this, I decided to deploy everything onto Heroku. This service allows node servers to run not just simple static files.

With [Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler), you can configure script executions. Make sure to add this script to your `package.json` file:

```js
{
  ...
  “scripts”: {
    “start”: “node app.js”
  }
}
````

Adding a setting to execute the script on a timer makes the bot automated. I decided to let the bot create a daily Tweet with this tool. Our ManyShiba bot is now fully functional!

---

View the source code on [GitHub](https://github.com/spencerlepine/manyshiba-bot).

Also find me here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
* [YouTube (Spencer Lepine)](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)
