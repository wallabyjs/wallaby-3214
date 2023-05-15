const { getJestProjects } = require("@nx/jest");
export default {
  projects: getJestProjects(),
  testRunner: "jest-jasmine2"
};