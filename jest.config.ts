/* eslint-disable import/no-anonymous-default-export */
export default {
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '/^.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '/^.+.(css|less|scss|sass)$/': '<rootDir>/node_modules/identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
}
