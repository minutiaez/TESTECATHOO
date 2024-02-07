# My GitHub Project


BACKEND
Para rodar o BackEnd eh simples, após clonar o projeto e instalar suas dependencias(caso não tenha é só baixa-los no CMD do projeto API) como o node, typescript, react, mongodb, fastify e prisma, va para o CMD.
Instalar o typescript(npm install typescript) prisma(npm install prisma) prisma client(npm install @prisma/client) e mongoDB(npm install mongodb) é crucial para o funcionamento do projeto, após instalar eles crie um arquivo .env dentro da pasta API(cuidado p n criar dentro das subpastas) e coloque isto dentro (# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb+srv://felipezuco04:apicand123@candidatos.hiroa2s.mongodb.net/candidatos?retryWrites=true&w=majority") 

Após isso  escreva 'npm run dev' na pasta API para rodar o backend(!!!Se não rodar a API antes o frontend não vai conseguir se conectar com ela!!!)



para ver o banco, basta ir no CMD da pasta API e colocar 'npx prisma studio' para ver o banco! eh o candidates.
(se precisar olhar como vc escreveu as skills quaando cadastrou, para buscar tem que estar escrito igual)


FRONTEND

para rodar o Frontend eh simples, após a clonagem do projeto vc tera q instalar no cmd do projeto o next e o react(npm install next react react-dom), no CMD do projeto frontend  ira dar um 'npm run dev'.
ele ira abrir no google uma aba com o projeto no index, caso não abra, coloque esta URL : http://localhost:3000 e vá para a pagina de cadastro

talvez vc tbm tenha q baixar certas coisas como typescript, react, axios e next.js, mas basta instalar todos eles no CMD do projeto frontend.

Não se esqueça de quando for escrever as skills buscar escrever todas iguais, se escrever 'JavaScript' em um candidato, escreva 'Javascript' no outro e não 'JS', se não estiver igual a API ira comparar as 'skills' dos candidatos de forma errada.

NOTA
caso n consigam rodar, podem entrar em contato comigo que eu mostro funcionando, até mais!!

