Funcionalidade: Usuários
Como um administrador
Eu quero gerenciar usuários
Para controlar o acesso à aplicação

Contexto: Dados de usuário válidos
Dado que eu tenho um nome, email e senha válidos

Cenário: Criar um novo usuário
Quando eu enviar uma requisição POST para "/usuarios"
Então eu devo receber um status code "201"
E eu devo receber os dados do novo usuário no corpo da resposta

Cenário: Listar todos os usuários
Quando eu enviar uma requisição GET para "/usuarios"
Então eu devo receber um status code "200"
E eu devo receber uma lista de usuários no corpo da resposta

Cenário: Obter detalhes de um usuário específico
Dado que eu tenho o ID de um usuário válido
Quando eu enviar uma requisição GET para "/usuarios/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados do usuário no corpo da resposta

Cenário: Atualizar um usuário específico
Dado que eu tenho o ID de um usuário válido e dados de usuário válidos
Quando eu enviar uma requisição PUT para "/usuarios/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados atualizados do usuário no corpo da resposta

Cenário: Excluir um usuário específico
Dado que eu tenho o ID de um usuário válido
Quando eu enviar uma requisição DELETE para "/usuarios/{id}"
Então eu devo receber um status code "200"
E eu devo receber uma mensagem de sucesso no corpo da resposta
