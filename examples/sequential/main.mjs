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

// Run the tests in sequence, and display results.
for (const [hash, name] of hashesAndNames) {
    console.log(await desmosPerf.test(browser, {
      source: { hash }, name, duration
    }));
}

// Close the puppeteer browser
await browser.close();