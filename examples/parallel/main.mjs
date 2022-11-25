import * as desmosPerf from "desmos-performance-tester";
import * as puppeteer from "puppeteer";

// What to test?
const hashesAndNames = [
  ["ufkinmcv74", "1"],
  ["ufkinmcv74", "2"],
  ["ufkinmcv74", "3"],
];

// For how long?
const duration = 1500;


// Create puppeteer browser
const browser = await puppeteer.launch();

// Run the tests in parallel, and display results.
console.log(await Promise.all(hashesAndNames.map(([hash, name]) => desmosPerf.test(browser, {
  source: { hash }, name, duration
}))));

// Close the puppeteer browser
await browser.close();