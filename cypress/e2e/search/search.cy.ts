import path from 'path'
import { getButtonFavorite, getButtonRemoveFavorite, getButtonUnfavorite } from '../../po/favorite'
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
    it.only('unmarked one to favorite', () => {
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
      fail()
    })
  })
})
