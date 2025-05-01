module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/__tests__/*.test.ts',
    '<rootDir>/**/__tests__/*.it.ts',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
}
