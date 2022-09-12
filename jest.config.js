module.exports = {
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    root: ['<rootDir>/tests'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}