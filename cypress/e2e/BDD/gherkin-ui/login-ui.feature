
Funcionalidade: Login
Como um usuário
Eu quero fazer login no sistema
Para acessar os recursos disponíveis

Cenário: Login bem-sucedido
Dado que estou na página inicial de login
Quando preencho os dados de acesso com um email e senha corretos
E clico no botão "Entrar"
Então a tela principal do painel é exibida

Cenário: Login com email incorreto
Dado que estou na página inicial de login
Quando preencho os dados de acesso com um email incorreto e uma senha correta
E clico no botão "Entrar"
Então uma mensagem de alerta "Email e/ou senha inválidos" é exibida

Cenário: Login com senha incorreta
Dado que estou na página inicial de login
Quando preencho os dados de acesso com um email correto e uma senha incorreta
E clico no botão "Entrar"
Então uma mensagem de alerta "Email e/ou senha inválidos" é exibida

Cenário: Login sem preencher campos obrigatórios
Dado que estou na página inicial de login
Quando clico no botão "Entrar" sem preencher os campos obrigatórios
Então uma mensagem de alerta "Email é obrigatório" é exibida
E uma mensagem de alerta "Password é obrigatório" é exibida
