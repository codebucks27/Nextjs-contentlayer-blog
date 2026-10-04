import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            { char: "'", alternative: '&apos;' },
            { char: '"', alternative: '&quot;' },
          ],
        },
      ],
    },
  },
])
