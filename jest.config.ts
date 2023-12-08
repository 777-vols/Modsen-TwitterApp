export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.js|jsx|ts|tsx$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['dotenv/config'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '\\.(css|less)$': '<rootDir>/fileTransformer.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest/__ mocks __/fileMock.js'
  }
};
