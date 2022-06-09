module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-config/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      ignoreCoverageForDecorators: true,
      ignoreCoverageForAllDecorators: true,
      diagnostics: {
        // do not fail test run when there are typescript errors see https://huafu.github.io/ts-jest/user/config/diagnostics
        // (they would be caught by `npm run check` anyway)
        warnOnly: true,
      },
    },
  },
  testMatch: ['**/__tests__/*.+(ts)?(x)', 'spec/**/*.+(ts)?(x)', '**/+(*.)+(spec).+(ts)?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/ui-test/'],
  moduleNameMapper: {
    '^@mocks/(.*)': '<rootDir>/src/app/__mocks__/$1',
    '^@core/(.*)': '<rootDir>/src/app/core/$1',
    // workaround for ng2-chart https://github.com/valor-software/ng2-charts/issues/1352
    'ng2-charts': '<rootDir>/node_modules/ng2-charts/fesm2020/ng2-charts.mjs',
    // Hacky fix for working with ng2-charts in jest test
    // see https://github.com/valor-software/ng2-charts/issues/1291#issuecomment-915519862
    '^lodash-es$': 'lodash',
  },
  coverageThreshold: {
    global: {
      statements: 84,
      branches: 67,
      functions: 70,
      lines: 84,
    },
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/__testTools__/*.ts',
    '!**/node_modules/**',
    '!**/*.spec.ts',
    '!src/app/core/services/log/**',
  ],
};
