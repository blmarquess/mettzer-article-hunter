# Hunter of article

Caçador de artigos é uma aplicação para pesquisar e salvar artigos científicos utilizando a base de dados ca api Core

## Requisitos da aplicação

- Deve ser possível buscar por artigos científicos na API do portal CORE
  - Exibir na listagem:
  - i. authors
  - ii. type
  - iii. title
  - iv. description
  - v. urls (devem ser clicáveis e abrir em uma nova aba)
- Deve ser possível marcar/desmarcar os resultados da pesquisa como favorito.
- Deve ter uma listagem com os artigos favoritados e ela deve estar disponível mesmo
  que a janela do navegador seja fechada e aberta novamente.
- As listagens, tanto da pesquisa quanto dos favoritos, devem ter paginação

### Tecnologias utilizadas na aplicação

ReactJS
Typescript
React-Query
Cypress

### Para testar a aplicação rodando acesse

```curl
https://mettzer-article-hunter.vercel.app
```

### Para rodar a aplicação localmente

Pré requisitos:
NodeJS 16+
Yarn/ Npm

clone o repositório para sua máquina

```shell
git clone https://github.com/blmarquess/mettzer-article-hunter.git
```

Entre na pasta do projeto e altere o nome do arquivo env.example para .env
e adicione uma chave válida da api Core que você pode conseguir nesse [link](https://core.ac.uk/services/api/).

após incluir a chave de acesso da api no arquivo .env

![exemplo do arquivo .env](public_imgs/Captura%20de%20Tela%202022-09-11%20%C3%A0s%2000.04.22.png)

utilize o yarn de preferência para iniciar e executar os testes da aplicação
para iniciar a aplicação primeiro faça a instalação das dependências com o comando :

```shell
yarn && yarn start
```

Ou utilizando o NPM

> ou npm install && npm start

A aplicação inicia na porta 3000 na sua máquina local <http://localhost:3000>

para rodar os testes da aplicação utilize o comando:

```shell
yarn cy:open
```

![Imagem dos testes da aplicação](public_imgs/Captura%20de%20Tela%202022-09-11%20%C3%A0s%2000.24.33.png)
