import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';
// import { TestsResults } from '../shared/models';

// отдельный процесс для запуска тестов и получения результатов
function spawnAsync(command, args, options) { // 'npm', ['run', 'test']
    const spawned = childProcess.spawn(command, args, options);
    let stdout = '';
    let stderr = '';

    return new Promise((resolve) => {
        // при выводе в процессе данных - выводим их в консоль
        spawned.stdout.on('data', (data) => {
            console.log('jest output: ', data.toString());
            stdout += data;
        });

        spawned.stderr.on('data', (data) => {
            console.log('jest output: ', data.toString());
            stderr += data;
        });

        spawned.on('close', (code) => {
            resolve({
                code,
                stdout,
                stderr
            });
        });
    })
}

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

// запуск тестов
export async function runTests(screenTimestamp, screensPath) {
    // запускаем дочерний процесс - тесты
    // ждем выполнения
    const testProcess = await spawnAsync('npm', ['run', 'test'], {
        env: { ...process.env, SCREENS_PATH: screensPath },
        encoding: 'utf-8'
    });

    // читаем результаты
    const resultOutput = /* await readFile('./test-results.json', 'utf8') */ '3245235';

    const screens = (await readDir(screensPath)).map(s => path.join('screens', screenTimestamp, s));

    // возвращаем результаты тестов
    return {
        stdout: testProcess.stdout,
        stderr: testProcess.stderr,
        results: JSON.parse(resultOutput),
        screens,
        screenTimestamp
    };
}