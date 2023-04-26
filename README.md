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
     npm run test
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
## PLANO DE TESTES - SERVE REST
### Entendimento do produto

   1.1 Objetivo:
   
   - Fornecer uma API REST para e-commerce

   1.2 Funcionalidades:
   
   [ Criar - Buscar - Atualizar - Remover ]
   - usuários
   - produtos
   - carrinhos
   - pedidos

1.3 Público-alvo:

- Testadores

1.4 Documentação:

- https://serverest.dev/#

### Escopo de teste

2.1 Funcionalidades a serem testadas:

- CRUD
 ```    
   usuários
   produtos
   carrinhos
   pedidos
 ```
 
Criterios de aceite
``` 
   Validação de status codes
   Mensagens em cada operação
``` 


2.2 Requisitos não funcionais a serem testados:

  - Performance
  ``` 
   Pico
   Carga
  ```      
  - Segurança
  ``` 
   Autenticação
   Autorização
  ``` 
  
Criterios de aceite
``` 
   80% das requisições devem se obter sucesso 
   95% das requisições devem ser menor que 05min
``` 

2.3 Limitações e exclusões de teste:
``` 
   SQL injection
``` 
### Abordagem ágil e iterações

   3.1 - ` Testes em sprints`
   
   3.2 - ` Integração contínua e entrega contínua (CI/CD)`
   
   3.3 - ` Colaboração entre a equipe de desenvolvimento e teste`

### Técnicas de teste

   4.1 - ` Teste manual`
   
   4.2 - ` Teste automatizado`
   
   4.3 - ` Teste exploratório`

### Ferramentas

   5.1 Documentação
```
   wiki
```  
   5.2 Teste manual
```
   Postman
   Insomnia
   Test Plans
```  
   5.3 Teste automatizado
```
   Linguagem: TS
   Padrão: Page Objects
   Framework: Cypress
```  

### Ambientes de teste

   6.1 - `Ambiente de desenvolvimento`
   
   6.2 - `Ambiente de homologação/staging`
   
   6.3 - `Ambiente de produção`

### Papéis e responsabilidades

   7.1 - ` Testadores`
   
   7.2 - ` Desenvolvedores`
   
   7.3 - ` Gerente de projeto/Scrum Master`
   
   7.4 - ` Product Owner`

### Métricas e indicadores

   8.1 - ` Cobertura de teste`
   
   8.2 - ` Taxa de defeitos encontrados`
   
   8.3 - ` Taxa de defeitos corrigidos`
   
   8.4 - ` Tempo médio para correção de defeitos`

### Riscos e mitigação

   9.1 - ` Identificação de riscos`
   
   9.2 - ` Plano de contingência e mitigação de riscos`

### Cronograma

   10.1 - ` Duração das sprints`
   
   10.2 - ` Quantidade de sprints`
   
   10.3 - ` Prazo para realização dos testes`
   
   10.4 - ` Data de entrega do produto`

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

