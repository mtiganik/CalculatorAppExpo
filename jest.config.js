// jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // Specify the test environment as 'jsdom'
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
