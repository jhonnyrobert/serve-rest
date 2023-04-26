# Documentação do Projeto ServeRest

## Descrição

O projeto ServeRest é um projeto de testes para uma aplicação RESTful. Ele utiliza o Cypress, um framework de testes de ponta a ponta, para testar a interface do usuário e as APIs. Este projeto também utiliza o k6 para testes de carga e desempenho.

## Requisitos

- Node.js
- Cypress
- Docker (para testes de carga com k6)

## Dependências

- `cypress`: Framework de teste de ponta a ponta.
- `cypress-plugin-api`: Plugin do Cypress para testar APIs.
- `faker-br`: Biblioteca para gerar dados falsos no formato brasileiro.

## Scripts

- `cy:verify`: Verifica se o Cypress está instalado e funcionando corretamente.
- `cy:run`: Executa todos os testes do Cypress.
- `test`: Executa todos os testes de integração.
- `test:interface`: Executa os testes relacionados à interface do usuário.
- `test:api`: Executa os testes relacionados às APIs.
- `test:load`: Executa os testes de carga usando k6 (é necessário ter o Docker instalado).

## Como executar os testes

1. Instale as dependências do projeto:

   ```sh
   npm install
   ```

2. Verifique se o Cypress está instalado e funcionando corretamente:

   ```sh
   npm run cy:verify
   ```

3. Execute os testes de sua escolha usando os scripts disponíveis:

   - Para executar todos os testes:

     ```sh
     npm test
     ```

   - Para executar os testes de interface do usuário:

     ```sh
     npm run test:interface
     ```

   - Para executar os testes de API:

     ```sh
     npm run test:api
     ```

   - Para executar os testes de carga (certifique-se de ter o Docker instalado):

     ```sh
     npm run test:load
     ```


## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
.
serverest/
│
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── (arquivos de teste de API)
│   │   ├── front/
│   │   │   ├── (arquivos de teste de interface do usuário)
│   ├── fixtures/
│   │   ├── (arquivos de dados de teste)
│   └── plugins/
│       ├── (plugins do Cypress)
│
├── k6/
│   ├── index.js
│   └── (outros arquivos de teste de carga, se necessário)
│
├── node_modules/
│
├── .gitignore
├── package.json
└── README.md

```
## Contribuindo

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Clone o fork para sua máquina local.
3. Instale as dependências com `npm install`.
4. Faça suas alterações e adicione testes apropriados.
5. Certifique-se de que todos os testes estão passando.
6. Faça um commit com suas alterações e envie um pull request para o repositório original.

## Palavras-chave

- cypress
- nodejs

## Licença

Este projeto está licenciado sob a licença MIT.

