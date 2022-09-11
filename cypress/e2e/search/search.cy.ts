import path from 'path'
import {
  getButtonSearch,
  getButtonFavorites,
  getInputSearch,
  getButtonViewArticle,
} from '../../po/search'

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

  it('should possible visit page of article on click in visit button', () => {
    cy.MockSearch()
    getInputSearch().type('rust')
    getButtonSearch().click()
    cy.wait('@MockSearch')
    cy.fixture('articleResult').then((articleResult) => {
      cy.MockArticle()
      getButtonViewArticle(articleResult.data.id).click()
      cy.wait('@MockArticle')
      cy.location('pathname').should('eq', `/article/${articleResult.data.id}`)
    })
  })
})
