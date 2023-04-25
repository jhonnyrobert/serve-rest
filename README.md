Introdução

Este documento descreve as práticas recomendadas e os exemplos de teste de API com Cypress para a API ServeRest. A ServeRest é uma API pública para testes e desenvolvimento de software. A API ServeRest é usada para testar aplicativos RESTful que usam o protocolo HTTP.

Pré-requisitos

Para seguir este guia, é necessário ter as seguintes ferramentas instaladas e configuradas:

Node.js
Cypress
ServeRest
Configuração

Para começar, é necessário configurar o ambiente de teste. Primeiro, instale o Node.js e o Cypress.

Em seguida, crie um diretório para o projeto de teste e instale o Cypress como dependência de desenvolvimento com o seguinte comando:

 - npm install cypress --save-dev

Depois de instalar o Cypress, abra o Cypress com o seguinte comando:

 - npx cypress open

Isso abrirá a janela do Cypress com a estrutura padrão do projeto.

Para configurar a API ServeRest, basta acessar a documentação em https://serverest.dev/#/ e seguir as instruções para usar a API.