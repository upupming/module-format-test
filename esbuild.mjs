import esbuild from 'esbuild'

/** @type {import('esbuild').BuildOptions} */
const commonOptions = {
    bundle: true,
    entryPoints: ['index.js'],
}

const formatList = ['cjs', 'esm', 'iife']
const platformList = ['browser', 'node', 'neutral']

for (const format of formatList) {
    for (const platform of platformList) {
        esbuild
            .build({
                ...commonOptions,
                format,
                platform,
                outfile: `out.${format}.${platform}.js`
            })
            .catch(() => {
                process.exit(1)
            })
    }
}

