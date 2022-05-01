import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'

export default [
  {
    input: './ScombZ Utilities/manifest.json',
    output: {
      dir: './dist/chromium_extension',
      format: 'esm'
    },
    plugins: [
      chromeExtension(), // Always put chromeExtension() before other plugins
      simpleReloader()
    ]
  }
]
