'use strict';

const sharp = require('sharp');
const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
const hexRgb = require('hex-rgb');

const quantcastCleaner = require('./utils/cleaners/quantcast');
const bannerCleaner = require('./utils/cleaners/banner');

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
    let color = 'transparent';

    if (event.queryStringParameters && event.queryStringParameters.url) {
      url = decodeURIComponent(event.queryStringParameters.url);

      if (!url.startsWith('http')) {
        url = 'http://' + url;
      }
    }

    if (event.queryStringParameters && event.queryStringParameters.color) {
      color = event.queryStringParameters.color;
    }

    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url, { waitUntil: 'networkidle2' });

    const cleaners = [bannerCleaner, quantcastCleaner];

    let elementRemoved = false;
    cleaners.forEach(async cleaner => {
      if (!elementRemoved) {
        elementRemoved = await page.evaluate(cleaner);
      }
    });

    await page._client.send('Animation.setPlaybackRate', { playbackRate: 20 });
    await page.waitFor(500);

    const screenshot = await page.screenshot();
    await browser.close();

    let r,
      g,
      b = 0;

    try {
      ({ red: r, green: g, blue: b } = hexRgb(color));
    } catch (e) {
      color = 'transparent';
    }

    let image = await sharp(__dirname + '/assets/browser.png').overlayWith(screenshot, { top: 138, left: 112 });
    if (color !== 'transparent') {
      image = await image.flatten({ background: { r, g, b, alpha: 1 } });
    }

    const buffer = await image.toBuffer();

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
