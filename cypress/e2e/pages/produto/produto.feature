Funcionalidade: Produtos
Como um administrador
Eu quero gerenciar produtos
Para manter o catálogo atualizado

Contexto: Dados de produto válidos
Dado que eu tenho um nome, preço e descrição válidos

Cenário: Criar um novo produto
Quando eu enviar uma requisição POST para "/produtos"
Então eu devo receber um status code "201"
E eu devo receber os dados do novo produto no corpo da resposta

Cenário: Listar todos os produtos
Quando eu enviar uma requisição GET para "/produtos"
Então eu devo receber um status code "200"
E eu devo receber uma lista de produtos no corpo da resposta

Cenário: Obter detalhes de um produto específico
Dado que eu tenho o ID de um produto válido
Quando eu enviar uma requisição GET para "/produtos/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados do produto no corpo da resposta

Cenário: Atualizar um produto específico
Dado que eu tenho o ID de um produto válido e dados de produto válidos
Quando eu enviar uma requisição PUT para "/produtos/{id}"
Então eu devo receber um status code "200"
E eu devo receber os dados atualizados do produto no corpo da resposta

Cenário: Excluir um produto específico
Dado que eu tenho o ID de um produto válido
Quando eu enviar uma requisição DELETE para "/produtos/{id}"
Então eu devo receber um status code "200"
E eu devo receber uma mensagem de sucesso no corpo da resposta

