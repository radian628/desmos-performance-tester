import * as puppeteer from "puppeteer";
import { DesmosTest } from "./types.mjs";
export declare function test(browser: puppeteer.Browser, test: DesmosTest): Promise<unknown>;
