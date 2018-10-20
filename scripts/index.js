#! /usr/bin/env node
/* eslint import/no-dynamic-require: 0 */

const commands = [
    'start',
    'start-frontend'
];

const command = process.argv[2]; // получаем команду из env

if (!command || commands.indexOf(command) === -1) {
    console.error(`Please specify one of available commands: ${commands.map(c => `"${c}"`).join(' ')}`);
    process.exit(-1);
}

require(`./commands/${command}`); // подлючаем нужную комманду