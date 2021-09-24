/** @type {import('webpack').Configuration[]} */
module.exports = [
    {
        mode: 'development',
        entry: './index.js',
        output: {
            filename: 'out.amd.js',
            path: __dirname,
            library: 'MyLibrary',
            libraryTarget: 'amd'   //commonjs，commonjs2， window，amd, global,
        }
    },
    {
        mode: 'development',
        entry: './index.js',
        output: {
            filename: 'out.umd.js',
            path: __dirname,
            library: 'MyLibrary',
            libraryTarget: 'umd'   //commonjs，commonjs2， window，amd, global,
        }
    },
]
