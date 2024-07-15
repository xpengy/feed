export default {
  verbose: true,
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      useESM: true,
    }],
  },
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "__tests__/util/"],
  testRegex: "(/__tests__/.*\\.spec)\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest/presets/default-esm',
};