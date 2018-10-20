module.exports = {
    //globalSetup: './scripts/tests/setup.js',
    //globalTeardown: './scripts/tests/teardown.js',
    //testEnvironment: './scripts/tests/puppeteer_environment.js',
    // testRegex: '(/tests/charity\\.test\\.ts)$',
    testRegex: '(/tests/.*\\.test\\.js)$',
    testResultsProcessor: require.resolve('jest-json-reporter'),
    moduleFileExtensions: [
        'ts',
        'js',
        'json'
    ],
    automock: false,
    testURL: 'http://localhost',
    // transform: {
    //     '.(ts)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
    // },
    // globals: {
    //     'ts-jest': {
    //         tsConfigFile: 'tests/tsconfig.json'
    //     }
    // }
    transform: {
        '.js': 'babel-jest'
    }
};
