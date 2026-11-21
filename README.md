# Food Explorer — frontend

Interface de um restaurante fictício com catálogo de pratos, área de cliente e área de administração. Projeto final da trilha Explorer da Rocketseat.

[Abrir a interface](https://foodexplorer-bsv.netlify.app/) · [Repositório da API](https://github.com/vbruno/RS-Explorer-Final-Backend-FoodExplorer) · [Layout no Figma](https://www.figma.com/community/file/1196874589259687769/food-explorer-v2)

## Funcionalidades

- Cadastro e autenticação de usuários.
- Navegação por pratos e consulta dos detalhes de cada item.
- Seleção de pratos e resumo do pedido.
- Cadastro, edição e exclusão de pratos na área de administrador.

O frontend depende da [API do Food Explorer](https://github.com/vbruno/RS-Explorer-Final-Backend-FoodExplorer). A interface publicada pode abrir mesmo quando a API hospedada estiver indisponível; nesse caso, as funções que usam dados e autenticação não funcionarão.

## Tecnologias

React, React Router, Styled Components, Axios, Swiper e Vite.

## Executar localmente

Com Node.js e npm instalados:

```bash
npm ci
npm run dev
```

Esse comando usa a API hospedada configurada em `src/services/api/axios/axiosConfig.js`. Para usar uma instância local da API em `http://localhost:3333`, inicie o [backend](https://github.com/vbruno/RS-Explorer-Final-Backend-FoodExplorer) e execute:

```bash
npm run dev:local
```

Para gerar a versão de produção:

```bash
npm run build
```

## Autor

[Bruno S Velho](https://github.com/vbruno) · [LinkedIn](https://www.linkedin.com/in/brunovelho/)
