import * as React from 'react'
import { SearchPage } from '../../src/modules/search/SearchPage'
import { mount } from '@cypress/react'

it('renders learn react link', () => {
  mount(<SearchPage />)
  cy.contains(/search/i).should('be.visible')
})
