/// <reference types="cypress" />

describe('test: caesar.html', () => {
    beforeEach(() => {
        cy.visit('../../caesar.html')
    })

    it('displays I for G - key: 2', () => {
        
        // Complétion du formulaire
        cy.dataCy('cypher-key').clear().type('2')
        cy.dataCy('cypher-msg').type('G')

        // Validation du formulaire
        cy.dataCy('cypher-btn').click()

        // Vérification du résultat (msg chiffré)
        cy.dataCy('cypher-result').should('have.text', 'I')

    });
})