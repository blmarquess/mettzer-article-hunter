import { getButtonRemoveFavorite, getButtonUnfavorite } from '../../po/favorite'
import {
  getButtonSearch,
  getButtonFavorites,
  getInputSearch,
  getButtonViewArticle,
} from '../../po/search'
import { article } from '../../../src/domain/entities'

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

  describe('should mark with favorite', () => {
    it('marked one to favorite', () => {
      SUT()
      cy.fixture('articleResult').then((articleResult) => {
        getButtonUnfavorite(articleResult.data.id).click()
        getButtonFavorites().click()
        cy.location('pathname').should('eq', '/favorites')
        cy.get('[data-field="id"] > .MuiDataGrid-cellContent').should(
          'have.text',
          articleResult.data.id,
        )
      })
    })
    it('unmarked one to favorite', () => {
      SUT()
      cy.fixture('articleResult').then((articleResult) => {
        getButtonUnfavorite(articleResult.data.id).click()
        getButtonFavorites().click()
        cy.location('pathname').should('eq', '/favorites')
        cy.get('[data-field="id"] > .MuiDataGrid-cellContent').should(
          'have.text',
          articleResult.data.id,
        )
        cy.visit('/favorites')
        cy.get('[data-field="id"] > .MuiDataGrid-cellContent').should(
          'have.text',
          articleResult.data.id,
        )
        getButtonRemoveFavorite(articleResult.data.id).click()
        cy.visit('/favorites')
        cy.contains('No rows')
      })
    })
    it('should all marked to favorite has in list on page favorites', () => {
      SUT()
      cy.fixture('searchResult').then((searchResult) => {
        const idsArticles = searchResult.data.map(({ id }) => id) as article[]
        idsArticles.forEach((art) => getButtonUnfavorite(art).click())
        getButtonFavorites().click()
        cy.location('pathname').should('eq', '/favorites')
        cy.get('[data-field="id"]').should('have.length', 4)
      })
    })
  })
})
