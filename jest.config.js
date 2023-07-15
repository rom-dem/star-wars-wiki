const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
  transformIgnorePatterns: ["node_modules/(?!axios)"],
});

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  testEnvironment: "jest-environment-jsdom",

  resolver: "jest-ts-webcompat-resolver",

  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/index.tsx",
    "!next.config.js",
    "!next-env.d.ts",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx",
    "!src/styles/globals.scss",
    "!src/styles/Home.module.scss",
  ],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};

module.exports = createJestConfig(customJestConfig);
