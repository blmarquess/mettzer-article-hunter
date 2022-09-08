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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
