var express = require('express');
var router = express.Router();

const puppeteer  = require('puppeteer');

let browser;
let urls;

 async function scrape (){
  try {

    console.log('opening browser...');
    browser = await puppeteer.launch({
            headless: false, 
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
    })

 
  } catch (error) {

    console.log("upss could not create browser instance => :", error); 

  } 

  let page = await browser.newPage()
     await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36') 
     await page.goto('https://www.instagram.com/flart.i/?hl=en', {waitUntil: 'networkidle2' })


    try {
        await page.click('.aOOlW.bIiDR')
    } catch (error) {
        console.log("cookiji so ze sprejeti"); 
    }
 

  try { 
      urls = await page.$$eval('article.ySN3v img', links=> links.map(link => link.src))  
      console.log(urls);
    } catch (error) {
      console.log("cant find pics ", error);
  }
await browser.close() 
}


scrape()

router.get('/', function(req, res, next) {
  console.log(urls);
    res.send(urls);
});

module.exports = router;
 
 