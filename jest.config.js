module.exports = {
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            statements: 85,
            branches: 85,
            functions: 85,
            lines: 85,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx|spec.tsx)?$': 'ts-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
    testRegex: ['/src/.*.spec.(ts|tsx)?$'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['build/'],
};
