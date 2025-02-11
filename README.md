This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



### Criando projeto react usando frameWork next

$ npx create-next-app@latest web --use-npm

### executando programa

$ npm run dev

- limpando o projeto para iniciar o projeto

@ public

- exclui todos os arquivos 

@ src/app/favicion.ico

- excluir favicon.ico

@ src/app/global.css

- remover tudo deixando apenas os codigos dos tailwind

@ src/app/page.tsx

- apaga tudo dentro do return
e crie um <h1>hello Wordk</h1>

### Estrutura react

## Components
- conceito mais importante do react
- Componentes
- Eh separar as partes dos projetos em componentes

- componentes sao funcoes que retornam html
- tsx = typeScript + JSX

- componentes no final das contas eh uma funcao que retorna html

- Os componentes servem para 2 grandes objetivos
 1. Separar nossa aplicacao em pedacinhos menores,
para que o codigo fique de mais simples manutencao
 2. Re-aproveitar comportamento e visual/interface de algo,
 em varios locais da aplicacao

 ## Propriedades

- segundo conceito mais importante do react
- Propriedades eh uma forma de passar informacoes dentro de um componente

- A grande maioria do codigo de react
usa 90% desses dois conceitos "Components" e "propriedades"
- com isso voce vai criar toda a interface da sua aplicacao

- o restante eh pra parte de interatividade
como o usuario click e alguma coisa acontece e ele eh enviado pra
alguma pagina

- pra parte visual eh tudo sobre componentes e propriedades

### Roteamento / paginas / pages

- quase toda aplicacao tem diferentes paginas
- e o Next tras esse sistema de ter varias paginas de forma pronta

- nao precisa instalar mais nada

# NEXT
- No next tudo que eu colocar dentro do app, todo o arquivo que tiver o nome
page, vai automaticamente virar uma rota de nossa aplicacao
- se eu criar uma pasta e escrevo o nome da pasta
- se dentro dela eu criar um arquivo ignite/page.tsx
  @ignite/page.tsx
- e de dentro exportar por padrao
$ export default function Ignite() {
  return <h1>ignite</h1>
}

- se eu acessar com o meu navegador
% localhost:3000/ignite
- veja que ele ira mostrar essa rota

- ou seja o next automaticamente identifica a extrutura de pastas
- que eu coloco dentro dessa da pasta app.
- ou seja tudo que eu colocar dentro dessa pasta app eh, especificamente
as paginas da nossa aplicacao

- dai eu posso criar quantas sub pastas eu quiser
- ex: 
  @depoimentos/page.tsx


###  Tailwind

- ferramenta de estilizacao, substitui o css

> documentation
- https://v2.tailwindcss.com/docs/width

$
   <div className="text-2xl font-bold uppercase w-20 h-20 bg-red-500 rounded m-10">
      oi
   </div>

### Install dependencies @rocketseat/eslint-config

$ npm i @rocketseat/eslint-config -D

- eslint da rocketseat

### install dependencies prettier-plogin-tailwindcss -D

$ npm i prettier-plugin-tailwindcss -D

- eh uma ferramenta pra deixar o codigo mais bonito
- o pritter ele esta instala

- na raiz do projeto criar uma arquivo para o Prittier
@ prittier.config.js
$
module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
  ]
}

crtl+shift+p > reaload window