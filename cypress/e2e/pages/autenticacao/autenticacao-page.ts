
export function SegurancaHooks() {
    return new Hooks();
}

class Hooks {
    CapturarToken() {
        return cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email: Cypress.env('email'),
                senha: Cypress.env('senha')
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.equal('Login realizado com sucesso')
            const token = response.body.authorization.substring(7).trim()
            Cypress.env('token', token)
        })
    }
}