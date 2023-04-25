export function Dash() {
    return new Hooks();
}

class Hooks {

    ValidarTelaPrincipal() {
        cy.get('[data-testid="logout"]:contains(Logout)')
        cy.contains('h1', 'Bem Vindo Fulano da Silva')
            .should('be.visible')
    }

}