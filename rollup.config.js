import replace from '@rollup/plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import sass from 'node-sass';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy'
import path from 'path';
// import tslint from "rollup-plugin-tslint";

/** This is done to resolve the following error while building react with rollup
    createElement is not exported by node_modules/react/index.js
**/
import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';
import * as propTypes from 'prop-types';

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';
const extensions = ['.js', '.ts', '.tsx'];

const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };

const customResolver = resolve({
    extensions: ['.ts', '.ts', '.html', '.css', '.sass', '.scss'],
});
// eslint-disable-next-line no-undef
const projectRootDir = path.resolve(__dirname);

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/public/index.js',
        format: 'es',
        sourcemap: isProd ? false : true,
    },
    // experimentalCodeSplitting: 'treeshake',
    watch: {
        chokidar: true,
        include: 'src/**/**'
    },
    plugins: [
        alias({
            entries: [
                {
                    find: 'components',
                    replacement: path.resolve(projectRootDir, 'src/components/*'),
                },
            ],
            customResolver,
        }),
        // tslint({
        //     exclude: [
        //         'node_modules/**',
        //         'src/styles/**',
        //         'src/assets/**',
        //     ]
        // }),
        eslint(),
        /** Configuring typescript. The default config is loaded from tsconfig.json */
        typescript({
            tsconfigDefaults: defaults,
            tsconfig: 'tsconfig.json',
            tsconfigOverride: override,
            objectHashIgnoreUnknownHack: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
        }),
        resolve({
            extensions,
        }),
        /** Configuring postcss in the project
         *  file extensions handled are css, saas and scss
         */
        postcss({
            preprocessor: (content, id) =>
                // eslint-disable-next-line no-undef
                new Promise((resolve, _) => {
                    const result = sass.renderSync({ file: id });
                    resolve({ code: result.css.toString() });
                }),
            plugins: [autoprefixer({ grid: false })],
            sourceMap: isProd ? false : true,
            extract: 'dist/public/styles/index.css',
            autoModules: true,
            extensions: ['.scss', '.sass', '.css'],
        }),
        commonjs({
            include: /node_modules/,
            sourceMap: isProd ? false : true,
            /** named exports added resolve the following error while building react with rollup
                createElement is not exported by node_modules/react/index.js
            **/
            namedExports: {
                react: Object.keys(react),
                'react-dom': Object.keys(reactDom),
                'react-is': Object.keys(reactIs),
                'prop-types': Object.keys(propTypes),
            },
        }),
        babel({
            extensions,
            exclude: /node_modules/,
            babelrc: false,
            runtimeHelpers: true,
            sourceMaps: isProd ? false : true,
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
                'react-require',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                [
                    '@babel/plugin-proposal-object-rest-spread',
                    {
                        useBuiltIns: true,
                    },
                ],
                [
                    '@babel/plugin-transform-runtime',
                    {
                        corejs: 2,
                        helpers: true,
                        regenerator: true,
                        useESModules: false,
                    },
                ],
            ],
        }),
        /** Copy folder from source to build folders
         *  Images, assets and locales are copied from source to dist folder
         * */
        copy({
            targets: [
              { src: 'src/public/*', dest: 'dist/public' },
              { src: ['assets/fonts/*', 'assets/fonts/*'], dest: 'dist/public/fonts' },
              { src: 'assets/images/**/*', dest: 'dist/public/images' }
            ]
        }),
        isProd && uglify(),
        isProd && terser(),
    ],
};
