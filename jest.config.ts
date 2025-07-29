import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
};

export default config;
