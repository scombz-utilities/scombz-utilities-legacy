import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import userscript from 'rollup-plugin-userscript'
import metablock from 'rollup-plugin-userscript-metablock'
import pkg from './package.json'

export default [
  {
    input: './src/manifest.json',
    output: {
      dir: './dist/chromium_extension',
      format: 'esm'
    },
    plugins: [
      chromeExtension(), // Always put chromeExtension() before other plugins
      simpleReloader()
    ]
  },
  {
    input: './src/main.js',
    output: {
      file: './dist/bundle.user.js',
      format: 'esm'
    },
    plugins: [
      userscript('./src/main.js'),
      metablock({
        file: './meta.json',
        override: {
          version: pkg.version
        }
      })
    ]
  }
]
