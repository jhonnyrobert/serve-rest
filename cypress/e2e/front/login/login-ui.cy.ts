import { Alert, Botao } from "../../pages/ui-page/componentes/componentes-ui-page";
import { Dash } from "../../pages/ui-page/dash/dash-ui-page";
import { Login } from "../../pages/ui-page/login/login-ui-page";

const email = Cypress.env('email')
const senha = Cypress.env('senha')
describe('Funcionalidade: Autenticação', () => {
    // code here
    context('Credenciais válidas', () => {
        beforeEach(() => {
            cy.visit('https://front.serverest.dev/login')
        })

        it('Login Bem-sucedido', () => {
            Login().ValidarPaginaInicial()
            Login().PreencherDadosDeAcesso(email, senha)
            Botao().Entrar()
            Dash().ValidarTelaPrincipal()
        })

        it('Login Email Incorreto', () => {
            Login().ValidarPaginaInicial()
            Login().PreencherDadosDeAcesso('joao@email.com', senha)
            Botao().Entrar()
            Alert().MessagemAlerta('Email e/ou senha inválidos')
        })

        it('Login Senha Incorreta', () => {
            Login().ValidarPaginaInicial()
            Login().PreencherDadosDeAcesso(email, '123')
            Botao().Entrar()
            Alert().MessagemAlerta('Email e/ou senha inválidos')
        })

        it('Login Sem Preencher Campos Obrigatorios', () => {
            Login().ValidarPaginaInicial()
            Botao().Entrar()
            Alert().MessagemAlerta('Email é obrigatório')
            Alert().MessagemAlerta('Password é obrigatório')
        })

    })
})


