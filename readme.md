# Regras Rest
1 Client - Server
2 Stateless - Não armazenamos nenhuma informação sobre as requisições.
3 Cache - Nossa aplicação pode conseguir fazer cache
4 Interface Uniforme - Contrato
    - Identificação de recursos // https://minhaapi.com/recurso/1
    - Representação dos recursos //
    - Mensagens auto descritivas 
    - HATEOAS (Hypertext as the engine of application state) - Pode mandar links em respostas

# Requisições e respostas

- GET - LEITURA
- POST - CRIAÇÃO
- PUT - ATUALIZAÇÃO
- DELETE - DELEÇÃO
- PATCH - ATUALIZAÇÃO PARCIAL

# Parametros de requisição

- Header Params { Authorization: Bearer token }
- Query params ?name='Gabriel' // GET 
- Route Params // minhaapi.com/users/1
- Body Params {} // POST, PUT, PATCH

# HTTP Codes

1xx - Informativo
2xx - Confirmação
3xx - Redirecionamento
4xx - Erro do cliente
5xx Erro do servidor
