import {faker} from "../../pages/ui-page/shared/bibliotecas-page";
const emailFalso = faker.internet.email();


describe('Funcionalidade: Usuários', () => {
   
    // Dados do usuário para os testes
    const userData = {
        id: '0uxuPY0cbmQhpEz1',
        nome: 'Fulano da Silva',
        email: 'fulano@qa.com'
    };

    const userData1 = {
        nome: "Fulano da Silva",
        email: emailFalso, 
        password: "teste",
        administrador: "true"
    };

    const updatedUserData = {
        nome: "Fulano da Silva",
        email: emailFalso, 
        password: "teste",
        administrador: "true"
    };

    it('Criar um novo usuário', () => {
        cy.api({
            method: 'POST',
            url: `/usuarios`,
            body: userData1,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            Cypress.env('id', response.body._id);
        });
    });
    
    it('Listar todos os usuários', () => {
        cy.api({
            method: 'GET',
            url: `/usuarios`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.usuarios).to.be.an('array');
        });
    });

    it('Obter detalhes de um usuário específico', () => {
        cy.api({
            method: 'GET',
            url: `/usuarios/${userData.id}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.nome).to.eq(userData.nome);
            expect(response.body.email).to.eq(userData.email);
        });
    });

    it('Atualizar um usuário específico', () => {
        cy.api({
            method: 'PUT',
            url: `/usuarios/${Cypress.env('id')}`,
            body: updatedUserData,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Registro alterado com sucesso');
        });
    });

    it('Excluir um usuário específico', () => {
        cy.request({
            method: 'DELETE',
            url: `/usuarios/${Cypress.env('id')}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Registro excluído com sucesso');
        });
    });
});
