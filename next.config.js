/* eslint-disable @typescript-eslint/no-var-requires */
const removeImports = require('next-remove-imports')()

module.exports = removeImports({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
})
