Funcionalidade: Carrinhos
Como um usuário
Eu quero gerenciar meu carrinho de compras
Para fazer pedidos de produtos

Contexto: Dados de carrinho válidos
Dado que eu tenho um produto e quantidade válidos

Cenário: Adicionar um produto ao carrinho
Quando eu enviar uma requisição POST para "/carrinhos"
Então eu devo receber um status code "201"
E eu devo receber os dados do novo carrinho no corpo da resposta

Cenário: Listar todos os carrinhos
Quando eu enviar uma requisição GET para "/carrinhos"
Então eu devo receber um status code "200"
E eu devo receber uma lista de carrinhos no corpo da resposta

Cenário: Obter detalhes de um carrinho específico
Dado que eu tenho o ID de um carrinho válido
Quando eu enviar uma requisição GET para "/carrinhos/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados do carrinho no corpo da resposta

Cenário: Atualizar a quantidade de um produto no carrinho
Dado que eu tenho o ID de um carrinho válido e dados de carrinho válidos
Quando eu enviar uma requisição PUT para "/carrinhos/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados atualizados do carrinho no corpo da resposta

Cenário: Excluir um produto do carrinho
Dado que eu tenho o ID de um carrinho válido
Quando eu enviar uma requisição DELETE para "/carrinhos/{id}"
Então eu devo receber um status code "200"
E eu devo receber uma mensagem de sucesso no corpo da resposta
