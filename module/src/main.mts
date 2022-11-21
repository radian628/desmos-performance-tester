import * as puppeteer from "puppeteer";
import * as fs from "node:fs/promises";
import { DesmosSource, DesmosTest, sourceIsGraphState, sourceIsHash } from "./types.mjs";
import * as path from "node:path";
import * as url from "node:url";

const baseInjectionFile = (await fs.readFile(path.join(path.dirname(url.fileURLToPath(import.meta.url)), "../assets/injection.js"))).toString();

export async function test(browser: puppeteer.Browser, test: DesmosTest) {
    const page = await browser.newPage();
    

    if (sourceIsHash(test.source)) {
        await page.goto(`https://www.desmos.com/calculator/${test.source.hash}`);
    } else {
        await page.goto("https://www.desmos.com/calculator");
    }

    let injectionFile = baseInjectionFile;

    if (sourceIsGraphState(test.source)) {
        injectionFile = injectionFile.replace(
            /\/\*CALCSTATE_START\*\/[\w\W]*\/\*CALCSTATE_END\*\//g,
            `Calc.setState(JSON.parse('${test.source.graphState.replace(/\\/g, "\\\\")}'))`
        );
    }

    await page.addScriptTag({
        content: injectionFile
    });

    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            resolve({
                name: test.name,
                ...await page.evaluate(() => {
                    //@ts-ignore
                    return window.getPerfInfo();
                })
            });
        }, test.duration);
    });
}