const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
    const browser = await puppeteer.launch({
        headless: !process.env.SHOW_BROWSER_WINDOW,
        args: process.env.BROWSER_PROXY
            ? [`--proxy-server=${process.env.BROWSER_PROXY}`, '--no-sandbox']
            : ['--no-sandbox']
    });
    global.__BROWSER__ = browser;
    mkdirp.sync(DIR);
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
