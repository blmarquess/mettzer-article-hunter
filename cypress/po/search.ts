export const getButtonSearch = () => cy.get('.MuiButton-contained').should('have.text', 'search')
export const getButtonFavorites = () =>
  cy.get('.MuiButton-outlined').should('have.text', 'favoritos')
export const getInputSearch = () => cy.get('[data-testid="search-input"]')
export const getButtonViewArticle = (id) => cy.get(`[data-testid="article-${id}"]`)
export const getButtonFavorite = (id) => cy.get(`[data-testid="favorite-${id}"]`)
export const getButtonUnfavorite = (id) => cy.get(`[data-testid="unfavorite-${id}"]`)
