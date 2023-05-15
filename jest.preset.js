const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    ]
  },
  setupFilesAfterEnv: ["./setupTests.ts"]
};