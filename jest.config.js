/** @type {import('jest').Config} */

const config = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./babel.config.js",
    "src/constants/envs.ts",
    ".*__snapshots__/.*",
  ],
};

export default config;
