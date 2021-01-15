module.exports = {
   // preset: 'ts-jest',
   // globals: {
   //    // we must specify a custom tsconfig for tests because we need the typescript transform
   //    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
   //    // can see this setting in tsconfig.jest.json -> "jsx": "react"
   //    "ts-jest": {
   //       tsConfig: "tsconfig.jest.json"
   //    }
   // },
   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
   setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
   transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
   }
};