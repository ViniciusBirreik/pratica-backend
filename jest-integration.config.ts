import jestConfig from "./jest.config";

export const config = {
    ...jestConfig,
    testMatch: ['**/*.test.ts']
}