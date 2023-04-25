export function Login() {
    return new Hooks();
}

class Hooks {

    ValidarPaginaInicial() {
        cy.get('.form')
            .should('be.visible')
    }

    PreencherDadosDeAcesso(email: string, senha: string) {
        cy.get('[data-testid="email"]')
            .type(email)
        cy.get('[data-testid="senha"]')
            .type(senha)
    }

    Entrar() {
        cy.get('[data-testid="entrar"]')
            .should('be.visible')
            .click()
    }

    ValidarTelaPrincipal() {
        cy.get('[data-testid="logout"]:contains(Logout)')
        cy.contains('h1', 'Bem Vindo Fulano da Silva')
            .should('be.visible')
    }

    MessagemAlerta(msg: string) {
        cy.get('.alert')
            .contains(msg)
            .should('be.visible')
    }
}