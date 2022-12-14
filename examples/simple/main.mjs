import * as desmosPerf from "desmos-performance-tester";
import * as puppeteer from "puppeteer";

// Create puppeteer browser
const browser = await puppeteer.launch();

// Run a test from a Desmos graph hash
const testResult = await desmosPerf.test(browser, {
  // The hash is the sequence of ten characters at the end of a Desmos link
  // So the full link for this graph would be 'https://www.desmos.com/calculator/l7nehb64nz'
  source: { hash: "l7nehb64nz" },

  // Duration in milliseconds for which to run the Desmos graph
  duration: 4000,

  // Display name for this test once it is done running
  name: "Desmos Plane"
});

// Display the test results
console.log(testResult);

// Close the puppeteer browser
await browser.close();