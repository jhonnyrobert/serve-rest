export function Botao() {
    return new BtnHooks();
}

class BtnHooks {

    Entrar() {
        cy.get('[data-testid="entrar"]')
            .should('be.visible')
            .click()
    }
}

export function Alert() {
    return new AlertHooks();
}

class AlertHooks {

    MessagemAlerta(msg: string) {
        cy.get('.alert')
            .contains(msg)
            .should('be.visible')
    }
}