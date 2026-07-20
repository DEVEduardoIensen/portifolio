# Portfólio 3D - Eduardo Iensen Prestes

Este é o repositório do meu portfólio web moderno e em 3D, construído com React, TypeScript, Tailwind CSS e Framer Motion. 

## Estrutura do Repositório

- **`/jack-3d-portfolio/`**: Contém todo o código-fonte original (Vite + React) do projeto. Se você quiser editar, rodar o servidor de desenvolvimento ou fazer modificações no código, é aqui que você deve entrar.
- **Arquivos na Raiz (`/`)**: A raiz do projeto (como o arquivo `index.html` e a pasta `assets/`) contém a build final já compilada do portfólio. Esses arquivos estão aqui para que o **GitHub Pages** consiga ler e hospedar o site de forma automática a partir da branch `master`.

## Como Rodar e Editar o Projeto Localmente

1. Abra o terminal na pasta do projeto:
   ```bash
   cd jack-3d-portfolio
   ```

2. Instale as dependências (caso seja a primeira vez):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```

## Como Atualizar o Site no GitHub Pages

Toda vez que você fizer alterações no código dentro de `jack-3d-portfolio`, você precisará compilar o código e mover para a raiz do repositório.

1. Dentro de `jack-3d-portfolio`, rode:
   ```bash
   npm run build
   ```
2. O Vite criará uma pasta chamada `dist`. Copie todos os arquivos de dentro de `dist` e cole-os na pasta raiz do repositório, substituindo os arquivos antigos.
3. Faça o commit e o push para o GitHub:
   ```bash
   git add .
   git commit -m "Atualizando portfólio"
   git push origin master
   ```
O GitHub Pages atualizará o site em alguns minutos!
