import * as desmoscript from "desmoscript";
import puppeteer from "puppeteer";
import * as fs from "node:fs/promises";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto("https://www.desmos.com/calculator/l7nehb64nz");

await page.addScriptTag({
  content: (await fs.readFile("./injection.js")).toString()
});

console.log("Script injected! Waiting 5 seconds to collect performance info...")

setTimeout(async () => {
  console.log("Average timeInWorker:", await page.evaluate(() => {
    //@ts-ignore
    window.getPerfInfo();
  }));
  await browser.close();
}, 5000)