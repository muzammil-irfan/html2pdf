// import {puppeteer} from 'puppeteer'
const puppeteer = require('puppeteer')
const hello = async () => {
    const url = "https://sparksuite.github.io/simple-html-invoice-template/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "networkidle2",
    });
    await page.pdf({ path: "hn.pdf", format: "a4" });

    await browser.close();
  };
  hello();