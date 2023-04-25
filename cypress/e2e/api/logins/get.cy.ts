
it('Teste', () => {
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

