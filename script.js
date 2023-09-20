const puppeteer = require('puppeteer');

async function sendMessage() {
  const browser = await puppeteer.launch({ headless: false }); // Set headless to true for production use
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com', { waitUntil: 'networkidle0' });

  console.log('Please scan the QR code.');
  await page.waitForSelector('span[title=" Tejaswini"]'); 

  await page.click('span[title=" Tejaswini"]');
  await page.waitForSelector('div[contenteditable="true"]');

  await page.type('div[contenteditable="true"]', 'Hello, this is an automated message.');
  await page.keyboard.press('Enter');

  console.log('Message sent.');
  await browser.close();
}

sendMessage();