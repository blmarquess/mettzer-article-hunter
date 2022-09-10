import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/components/**/*.cy.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1366,
    viewportHeight: 768,
  },
})
