const puppeteer = require('puppeteer'); // library for running chrome headless and scraping
const fs = require('fs'); // node module for saving files to computer

// media-element evajbz-0 jooYZN || name of Media Element on Reddit

// s14d20sq-0 lboNlC || Name of the URL Link for the `i.redd.it`

dankMemes = () => {
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.reddit.com/r/dankmemes');

    const imageElement = await page.$('.img');

    // console.log(await page.content());

    //let img = $('.media-preview-content').find('a').attr('href');
    await imageElement.click();
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
  });
};

dankMemes();

// navigate to subreddit

// Grab `Media Element` --

// add node filesystem to download images to certain directory, make directory if it doesn't exist

// add the links to a mongoDB database and check if the image name/link already exists

// upload images in folder once every 10 minutes using a cron job

// run scrape function once every 12 hours using a cron job
