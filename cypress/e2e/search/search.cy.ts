import { getButtonSearch, getButtonFavorites, getInputSearch } from '../../po/search'

describe('Search/list and open article', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should visible all buttons and input box to search', () => {
    getButtonSearch().should('be.visible')
    getButtonFavorites().should('be.visible')
    getInputSearch().should('be.visible')
  })

  it('should possible search any article', () => {
    getInputSearch().type('rust')
    getButtonSearch().click()
  })
})
