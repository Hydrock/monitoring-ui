import 'babel-polyfill';
//import * as config from 'config';
import * as path from 'path';

import { Monitor, NewCheckResultsEvent, CheckFailedEvent } from './monitor';

const monitor = new Monitor(/* config.get('checkConfig.interval')*/ );

monitor.on(NewCheckResultsEvent, () => {
    console.log(1111111111, 2222222, 33333)
});
//monitor.on(NewCheckResultsEvent, errorsCounter.onNewCheckResult);

monitor.start();

function onExit(reason) {
    console.log('Exit because of', reason);
    // restInterface.stop();
    monitor.stop();
    //slackBot.stop();
    process.exit();
}

process.on('exit', onExit);
process.on('SIGINT', onExit);
process.on('SIGUSR1', onExit);
process.on('SIGUSR2', onExit);
