/* eslint-disable */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./apps/home-web"
});

// let createJestConfig = (c: any) => c;

const customJestConfig = {
  displayName: "home-web",
  preset: "../../jest.preset.js",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/home-web",
  testRunner: "jest-jasmine2",

  reporters: [
    // Overriding config.reporters wipes out default reporters, so
    // we need to restore the summary reporter.
    "summary",
    "github-actions"
  ]
};

export default createJestConfig(customJestConfig);