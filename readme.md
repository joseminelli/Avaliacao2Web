# 2° Avaliação Web: App de Alunos (Web + Mobile)

 Este projeto é uma avaliação prática para criar uma aplicação em duas partes: Web (React + Vite) e Mobile (React Native + Expo). As duas aplicações consomem a mesma API REST para listar e detalhar informações de alunos.

## Estrutura do Projeto

O repositório está organizado na seguinte estrutura:

```
/meu-estudo-caso
├── /web/       # Aplicação React com Vite e TypeScript
└── /mobile/    # Aplicação React Native com Expo e TypeScript
```

## Tecnologias Utilizadas

| Web (React) | Mobile (React Native) | Comum / Testes |
| :--- | :--- | :--- |
| React | React Native | Axios  |
| Vite | Expo  | TypeScript |
| React Router DOM| React Navigation | Vitest|
| React Bootstrap| | React Testing Library  |

## Como Rodar (Localmente)

Para rodar o projeto, você deve clonar o repositório e rodar as aplicações `web` e `mobile` separadamente.

```bash
git clone https://github.com/joseminelli/Avaliacao2Web.git
cd Avaliacao2Web
```

-----

### Aplicação Web (React + Vite)

1.  **Navegue até a pasta web:**
    ```bash
    cd web
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  Abra `http://localhost:5173` (ou a porta indicada) no seu navegador.

-----

### Aplicação Mobile (Expo)

1.  **Navegue até a pasta mobile:**
    ```bash
    cd mobile
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor do Expo:**
    ```bash
    npx expo start
    ```
4.   Digite 'c' para exibir o QR Code

5.  Escaneie usando o aplicativo **Expo Go** no seu celular (Android ou iOS).

## Testes Automatizados (Web)

Os testes automatizados foram configurados para a aplicação web usando Vitest e React Testing Library

1.  **Navegue até a pasta web:**
    ```bash
    cd web
    ```
2.  **Execute os testes:**
    ```bash
    npm run test
    ```

## Rotas Implementadas

### Web (React Router)

  * `/` : (Página `Home`) Página inicial com a listagem de todos os alunos.
  * `/aluno/:id` : (Página `Detalhes`) Página de detalhes de um aluno específico.

### Mobile (React Navigation)

  * `Home` : Tela inicial com a lista de alunos (botões).
  * `Detalhes` : Tela que exibe os detalhes do aluno selecionado.

## Deploy (Web)

A aplicação web foi configurada para deploy contínuo através da plataforma **Vercel**.

  * **Link da Aplicação:** [https://avaliacao2-web.vercel.app/](https://avaliacao2-web.vercel.app/)

## Créditos e Referências 

  * **API de Alunos:** O backend consumido por este projeto está documentado via Swagger e disponível em: [https://proweb.leoproti.com.br/swagger-ui/index.html](https://www.google.com/search?q=https://proweb.leoproti.com.br/swagger-ui/index.html).