# My Shows

## Aplicação de treinamento para o time de desenvolvimento da Agrione aprimorar os conhecimentos em Front-end e React

### Dependências

-   Node.js v20
-   Vite
-   TypeScript
-   Axios
-   React v18
-   React Router
-   React Query
-   Material UI

### Instalação

-   **Setup com Vite**
    1. `npm create vite@latest`
    2. `cd my-shows && npm install`
-   **Material UI**

    1. `npm install @mui/material @emotion/react @emotion/styled`
    2. `npm install @fontsource/roboto`
    3. Adicione o seguinte código no arquivo App.tsx:

    ```javascript
    import '@fontsource/roboto/300.css'
    import '@fontsource/roboto/400.css'
    import '@fontsource/roboto/500.css'
    import '@fontsource/roboto/700.css'
    ```

    4. `npm install @mui/icons-material`
    5. Adicionar o seguinte código ao `tsconfig.json`:

    ```javascript
    {
      // ...
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": [
            "./src/*"
          ]
        }
        //...
      }
    }
    ```

    6. `npm install -D @types/node`
    7. Adicionar o seguinte código ao `vite.config.ts`

    ```javascript
    import path from 'path'
    import react from '@vitejs/plugin-react'
    import { defineConfig } from 'vite'

    export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    })
    ```

-   Prettier

    1. `npm install --save-dev --save-exact prettier`
    2. `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`
    3. Criar um arquivo chamado `.prettierignore` e adicionar o seguinte código:

    ```
    # Ignore artifacts:
    build
    coverage
    ```

    4. `npm install --save-dev eslint-config-prettier`
    5. Adicionar ao arquivo `eslintrc.cjs`:

    ```javascript
    {
      "extends": [
        // ...
        "prettier"
      ]
    }
    ```

    6. Instalar extensão do Prettier no VS Code: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
    7. Instalar extensão do ESLint no VS Code: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### Instruções de uso

1. Clone o repositório: `git clone https://github.com/username/my-shows.git` 📥
2. Navegue até o diretório do projeto: `cd my-shows` 📂
3. Instale as dependências: `npm install` ⚙️
4. Inicie o servidor de desenvolvimento: `npm run dev` 🚀
5. Acesse a aplicação no navegador: `http://localhost:5173` 🌐
