## 💻 Sobre o projeto
Pizzaria Polar é um projeto para o 1º semestre do curso de Análise e Desenvolvimento de Sistemas da Fatec. Desenvolvemos um website para uma pizzaria fictícia com funcionalidades de login e cadastro de usuários, gerenciamento de sessão do usuário e visualização de itens ofertados pela pizzaria.

O projeto conta com um gerenciamento de rotas do frontend e rotas da API REST para acessar o conteúdo do banco de dados. Os recursos do frontend conseguem se comunicar com o backend para acessar os conteúdos desejados.

---

## 🛠 Stack utilizada

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

* `HTML 5`
* `CSS`
* `Node.js` v20.11.0
* `Bcrypt` v5.1.1 
* `Express` v5.1 
* `JsonWebToken` v9.0.2 
* `Sequelize` v6.37.7 
* `MySQL` 
---


## ⚙️ Endpoints


A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:8080`:

**/api/usuario**
* `GET /api/usuario` Listar todos os usuários
* `GET /api/usuario/foto` Buscar a foto do usuário
* `GET /api/usuario/:id` Buscar um usuário pelo ID
* `GET /api/usuario/email/:email` Verificar se o email já está cadastrado
* `POST /api/usuario` Cadastrar usuário
* `POST /api/usuario/foto` Cadasrtar foto do usuário
* `PUT /api/usuario/:id` Atualizar usuário
* `DELETE /api/usuario/:id` Deletar usuário

**/api/produto**
* `GET /api/produto` Listar todos os produtos
* `GET /api/produto/:id` Buscar um produto pelo ID
* `POST /api/produto` Cadastrar produto
* `PUT /api/produto/:id` Atualizar produto
* `DELETE /api/produto/:id` Deletar produto

**/auth**
* `POST /auth/login` Realizar login
* `POST /auth/logout` Realizar logout
* `GET /auth/logado` Verificar se o usuário está logado

**/api**
* `GET /api/cep/:cep` Consumir a API busca cep para verificar o endereço do CEP digitado
---
