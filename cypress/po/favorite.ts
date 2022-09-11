export const getButtonFavorite = (id) => cy.get(`[data-testid="favorite-${id}"]`)
export const getButtonUnfavorite = (id) => cy.get(`[data-testid="unfavorite-${id}"]`)
export const getButtonRemoveFavorite = (id) => cy.get(`[data-testid="remove-favorite-${id}"]`)
