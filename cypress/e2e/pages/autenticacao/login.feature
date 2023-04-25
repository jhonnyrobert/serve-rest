Funcionalidade: Autenticação
Como um usuário
Eu quero me autenticar na aplicação
Para ter acesso aos recursos protegidos


Contexto: Credenciais válidas
Dado que eu tenho um email válido e uma senha válida

Cenário: Autenticação bem-sucedida
Quando eu enviar uma requisição POST para "/login"
Então eu devo receber um status code "200"
E eu devo receber um token de acesso no corpo da resposta


Contexto: Credenciais inválidas
Dado que eu tenho um email inválido ou uma senha inválida

Cenário: Autenticação mal-sucedida
Quando eu enviar uma requisição POST para "/login"
Então eu devo receber um status code "400"
E eu devo receber uma mensagem de erro no corpo da resposta
