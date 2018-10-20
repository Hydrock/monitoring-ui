const { spawn } = require('child_process');
const path = require('path');

const env = Object.create(process.env);
env.BABEL_TARGET = 'node';

spawn('node', [path.join(__dirname, './start-frontend')], { stdio: 'inherit' });