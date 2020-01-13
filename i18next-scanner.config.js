// eslint-disable-next-line no-undef
module.exports = {
    input: [
        'src/**/*.{ts,tsx}',
        // Use ! to filter out files or directories
        '!src/**/*.spec.{ts,tsx}',
        '!src/translations/**',
        '!**/node_modules/**',
    ],
    output: './',
    options: {
        debug: true,
        removeUnusedKeys: true,
        sort: true,
        func: {
            list: ['t'],
            extensions: ['.ts', '.tsx']
        },
        resource: {
            loadPath: './src/translations/locales/{{lng}}/{{ns}}.json',
            savePath: 'dist/public/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        lngs: ['en','fr'],
        defaultValue: '__STRING_NOT_TRANSLATED__'
    }
};