# Sistema de Cadastramento

Aplicação web desenvolvida para realizar o cadastro de pessoas, com validação de dados e armazenamento em banco de dados PostgreSQL.

O projeto utiliza tecnologias de desenvolvimento web no frontend e no backend, integrando um formulário de cadastro a um banco de dados relacional.

## Tecnologias utilizadas

- **HTML5:** estrutura da página.
- **CSS3:** estilização e organização visual da interface.
- **JavaScript:** validação dos dados e interação com o usuário.
- **Node.js:** execução do JavaScript no backend.
- **Express:** criação das rotas e gerenciamento das requisições HTTP.
- **PostgreSQL:** armazenamento e gerenciamento dos dados.
- **Git e GitHub:** controle de versão e hospedagem do código-fonte.

## Funcionalidades

- Formulário para cadastro de pessoas.
- Validação dos campos obrigatórios.
- Verificação do formato do CPF.
- Tratamento de CPFs duplicados.
- Integração entre frontend, backend e banco de dados.
- Armazenamento dos registros no PostgreSQL.

## Demonstração

<img width="1365" height="647" alt="tela-cadastro" src="https://github.com/user-attachments/assets/fc0c923a-cdad-401c-b1a3-23cd5aba2a5e" />

## Estrutura do projeto

```text
SiteCadastramento/
├── images/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- PostgreSQL instalado e configurado.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/OtavioAugusto0/SiteCadastramento.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd SiteCadastramento
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente em um arquivo `.env`, utilizando as credenciais do seu banco PostgreSQL.

5. Crie o banco de dados e a tabela necessários conforme a estrutura utilizada no projeto.

6. Inicie o servidor:

   ```bash
   node server.js
   ```

7. Acesse a aplicação conforme a configuração do projeto.

Consulte a configuração do servidor para verificar o endereço local utilizado pela aplicação.

## Objetivo

Projeto acadêmico desenvolvido para praticar conceitos de desenvolvimento web, programação JavaScript, criação de APIs com Node.js e Express, validação de dados e integração com banco de dados relacional.

   ```bash
   node server.js
   ```

