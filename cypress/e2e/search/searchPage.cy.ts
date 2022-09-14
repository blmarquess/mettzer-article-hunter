import {
  getButtonSearch,
  getButtonFavorites,
  getInputSearch,
  getButtonViewArticle,
} from '../../po/search'

describe('Search/list and open article', () => {
  const SUT = () => {
    getInputSearch().type('rust')
    getButtonSearch().click()
    cy.wait('@MockSearch')
  }
  beforeEach(() => {
    cy.MockRequest()
    cy.visit('/')
    cy.wait('@MockRequest')
    cy.MockSearch()
  })
  describe('render components', () => {
    it('should visible all buttons and input box to search', () => {
      getButtonSearch().should('be.visible')
      getButtonFavorites().should('be.visible')
      getInputSearch().should('be.visible')
    })

    it('should possible search any article', () => {
      SUT()
      cy.contains('Rust & Joiner')
    })

    it('should possible visit page of article on click in visit button', () => {
      SUT()
      cy.fixture('articleResult').then((articleResult) => {
        cy.MockArticle()
        getButtonViewArticle(articleResult.data.id).click()
        cy.wait('@MockArticle')
        cy.location('pathname').should('eq', `/article/${articleResult.data.id}`)
      })
    })
  })
})
