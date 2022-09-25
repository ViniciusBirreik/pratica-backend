import jestConfig from "./jest.config";

export const config = {
    ...jestConfig,
    testMatch: ['**/*.spec.ts']
}