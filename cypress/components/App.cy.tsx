import * as React from 'react'
import App from '../../src/App'
import { mount } from '@cypress/react'

it('renders learn react link', () => {
  mount(<App />)
  cy.contains(/learn react/i).should('be.visible')
})
