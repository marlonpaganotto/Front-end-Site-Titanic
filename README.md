# Projeto Frontend em React

Este é o frontend de um projeto desenvolvido com React, que se comunica com o backend para fornecer a interface do usuário. Abaixo estão as instruções para configurar e rodar o projeto localmente.

## 🚀 Tecnologias Utilizadas

- **React**
- **React Router DOM**
- **Axios** (para chamadas HTTP)
- **Styled Components** (ou outra lib de estilização, se usada)

## ⚙️ Configuração do Ambiente

Certifique-se de ter o seguinte instalado na sua máquina:

1. **Node.js** (v16 ou superior)
2. **NPM** ou **Yarn**

### Instalação


##### Clone o repositório para sua máquina local:
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

##### Instale as dependências do projeto:
npm install
 ou
yarn

### Crie um arquivo .env na raiz do projeto com as seguintes variáveis (ajustadas conforme necessário):
- REACT_APP_API_URL=http://localhost:3000 (ou a pporta onde estiver rodando seu back end)

 - Rodando o Projeto Localmente
   - npm start
    ou
    yarn start
## Notas
- Certifique-se de ter configurado corretamente o arquivo .env com a URL da API do backend(Outro repositorio que você deve clonar antes de iniciar este.) antes de iniciar o servidor. Se encontrar problemas ou bugs, fique à vontade para abrir uma issue.

____________________________________
#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
