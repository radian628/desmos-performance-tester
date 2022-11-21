import * as desmosPerf from "desmos-performance-tester";
import * as puppeteer from "puppeteer";

const browser = await puppeteer.launch();

const testResult = await desmosPerf.test(browser, {
    source: { hash: "l7nehb64nz" },
    duration: 4000,
    name: "Desmos Plane"
});

console.log(testResult);

await browser.close();