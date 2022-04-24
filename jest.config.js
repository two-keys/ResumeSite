module.exports = {
  "moduleNameMapper": {
    "^@Components(.*)$": "<rootDir>/src/common/frontend/components$1",
    "^@Backend(.*)$": "<rootDir>/src/common/backend$1",
    "^@Frontend(.*)$": "<rootDir>/src/common/frontend$1",
    "^@Modules(.*)$": "<rootDir>/src/modules$1"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};