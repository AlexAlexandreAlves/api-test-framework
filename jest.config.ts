import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest', // Define o preset do jest
    testEnvironment: 'node', // Define o ambiente de teste
    maxWorkers: 1, // Define a quantidade de workers simultâneos
    // testPathPattern: '.*.spec.ts', // Define o padrão de busca dos arquivos de teste
    // globalSetup: Define o setup global de configuração
    // modulePathIgnorePatterns: [] Ignora os arquivos que estão no caminho
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            diagnostics: {
                ignoreCodes: ['TS151001'],
            },
        }],
    },
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ],
    testLocationInResults: true
};

export default config;
