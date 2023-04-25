
describe('Funcionalidade: Autenticação', () => {
    // code here
    context('Credenciais válidas', () => {
        it('Autenticação bem-sucedida', () => {
            cy.api({
                method: 'POST',
                url: '/login',
                failOnStatusCode: false,
                body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('message')
                expect(response.body.message).to.equal('Login realizado com sucesso')                       
            })
        })
    });

    context('Credenciais inválidas', () => {
        it('Autenticação mal-sucedida', () => {
            cy.api({
                method: 'POST',
                url: '/login',
                failOnStatusCode: false,
                body: {
                    "email": "ciclano@qa.com",
                    "password": "teste"
                }
            }).then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body).to.have.property('message')
                expect(response.body.message).to.equal('Email e/ou senha inválidos')
            })
        })
    });

})