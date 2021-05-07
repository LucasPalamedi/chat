Bem vindo ao meu projeto de chat.

## Scripts Válidos

No projeto você pode >>> 
### `npm run dev` 

Abra ele no modo desenvolvedor!<br>
Abre [http://localhost:3000](http://localhost:3000) para visualizar no navegador!

Lembrando que se houver alterações, a página fará um "reload".<br>

### `npm run build`

### `npm run start`

A aplicação deve ser compilada com \`next build\` primeiro.


### `npm run export`

Export application to static html files, ready for production.

## Usando CSS

```jsx
export default () => (
  <div>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: gray;
      }
      div {
        background: white;
      }
      @media (max-width: 600px) {
        div {
          background: black;
        }
      }
    `}</style>
  </div>
)
```

## Adicionado Componetes

Prefiro deixar os documentos React em `./components` e devem aparecer assim

### `./components/Simple.js`

```jsx
const Simple = () => (
  <div>Simple Component</div>
)

export default Simple // don't forget to export default!
```

### `./components/Complex.js`

```jsx
import { Component } from 'react'

class Complex extends Component {
  state = {
    text: 'World'
  }

  render () {
    const { text } = this.state
    return <div>Hello {text}</div>
  }
}

export default Complex // não esqueca de exportar "default"!
```

## Fetching Data

Você pode buscar `pages` componentes usando `getInitialProps` assim:

### `./pages/stars.js`

```jsx
const Page = (props) => <div>Next stars: {props.stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('')
  const json = await res.json()
  const stars = json.stargazers_count
  return { stars }
}

export default Page
```
Para o carregamento da página inicial, `getInitialProps` será executado apenas no servidor. `getInitialProps` só será executado no cliente ao navegar para uma rota diferente através do componente `Link` ou usando as APIs.

_Note: `getInitialProps` **NAO** pode ser usado em components "children". Apenas em `pages`._

## Testando

Create a file named like `ComponentName.test.js`, and run `npm run test`, snapshoting tests are also included.
