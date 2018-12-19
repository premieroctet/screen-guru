'use strict';

const sharp = require('sharp');
const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
const hexRgb = require('hex-rgb');

module.exports.screenshot = async (event, context, callback) => {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    let page = await browser.newPage();

    let url = 'https://www.premieroctet.com/';
    let color = 'E9D460';

    if (event.queryStringParameters && event.queryStringParameters.url) {
      const httpPrefix = 'http://';
      const httpsPrefix = 'https://';
      url = event.queryStringParameters.url;

      if (url.substr(0, httpPrefix.length) !== httpPrefix && url.substr(0, httpsPrefix.length) !== httpsPrefix) {
        url = httpPrefix + url;
      }
    }

    if (event.queryStringParameters && event.queryStringParameters.color) {
      color = event.queryStringParameters.color;
    }

    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1280, height: 800 });
    const screenshot = await page.screenshot();
    await browser.close();

    let r = 233;
    let g = 212;
    let b = 96;

    try {
      ({ red: r, green: g, blue: b } = hexRgb(color));
    } catch (e) {}

    const buffer = await sharp(__dirname + '/browser.png')
      .overlayWith(screenshot, { top: 138, left: 112 })
      .flatten({ background: { r, g, b, alpha: 1 } })
      .toBuffer();

    callback(null, {
      statusCode: 200,
      isBase64Encoded: true,
      body: buffer.toString('base64'),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'image/png',
        'Cache-Control': 'max-age=60',
      },
    });
  } catch (error) {
    callback(error);
  }
};
