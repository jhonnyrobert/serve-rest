# Projeto ServeRest - Testes de Automação

## Descrição

Este projeto visa realizar testes de automação para a API ServeRest utilizando o framework Cypress, juntamente com outras bibliotecas complementares.

## Autor

Jhonny Santos

## Licença

MIT

## Versão

1.0.0

## Dependências

- cypress: ^12.10.0
- cypress-plugin-api: ^2.11.0
- faker-br: ^0.4.1

## Dependências de Desenvolvimento

- typescript: ^5.0.4

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

## Executando os Testes

Você pode executar os testes de diferentes maneiras:

- Para verificar se o Cypress está instalado corretamente, execute:

```bash
npm run cy:verify
```

- Para executar os testes no modo headless, execute:

```bash
npm run cy:run
```

- Para executar um conjunto específico de testes, utilize:

```bash
npm test
```

Este comando executará os testes localizados no diretório `cypress/e2e/integration`.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
.
├── cypress
│   ├── e2e
│   │   └── integration
│   │       ├── usuarios_api.spec.js
│   │       └── (outros arquivos de teste)
│   └── (configurações do Cypress)
├── node_modules
├── package.json
└── (outros arquivos de configuração)
```

Os arquivos de teste estão localizados no diretório `cypress/e2e/integration`. Eles são escritos em JavaScript e utilizam o framework Cypress para interagir com a API ServeRest.

## Palavras-chave

- cypress
- nodejs