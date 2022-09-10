import { getButtonSearch, getButtonFavorites, getInputSearch } from '../../po/search'

describe('Search/list and open article', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should visible all buttons and input box to search', () => {
    cy.MockRequest()
    getButtonSearch().should('be.visible')
    getButtonFavorites().should('be.visible')
    getInputSearch().should('be.visible')
    cy.wait('@MockRequest')
  })

  it('should possible search any article', () => {
    cy.MockSearch()
    getInputSearch().type('rust')
    getButtonSearch().click()
    cy.wait('@MockSearch')
    cy.contains('Rust & Joiner')
  })
})
