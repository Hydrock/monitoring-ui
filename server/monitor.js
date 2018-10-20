import { EventEmitter } from 'events'; // Плагин для инициализации событий
import * as mkdirp from 'mkdirp'; // like mkdir -p
import * as rimraf from 'rimraf'; // like rm -rf
import * as path from 'path';

import { runTests } from './jest-checker';

export const NewCheckResultsEvent = 'NewCheckResults';
export const CheckFailedEvent = 'CheckFailedEvent';

export class Monitor extends EventEmitter {
    constructor() {
        super();
        this.timeoutId = '';
        this.interval = 30;
    }

    async runTests() {
        try {
            console.log('run tests', new Date());

            const screenTimestamp = Date.now().toString();
            const screensPath = path.join(process.cwd(), 'screens', screenTimestamp);
            mkdirp.sync(screensPath);

            const testResults = await runTests(screenTimestamp, screensPath);

            this.emit(NewCheckResultsEvent, testResults);

            this.timeoutId = setTimeout(() => {
                this.runTests();
            }, this.interval * 1000);

        } catch(e) {
            this.emit(CheckFailedEvent);
            console.error(e);
            throw e;
        }
    }

    async start() {
        rimraf.sync(path.join(process.cwd(), 'screens'));
        await this.runTests();
    }

    stop() {
        clearTimeout(this.timeoutId);
    }
}