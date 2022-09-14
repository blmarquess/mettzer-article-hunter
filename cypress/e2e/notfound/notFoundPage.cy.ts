import { getNotFoundID } from '../../po/notFound'

describe('page 404', () => {
  it('should if visit router note implemented render page 404', () => {
    cy.visit('/notRouter')
    getNotFoundID().contains('voltar para o inicio')
  })
})
