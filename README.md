# SimpleQueries

### SimpleQueries é um pacote que vai trazer a abstração de algumas queries que são bastante utilizada para manipulação de elementos HTML

---

**Como instalar o SimpleQueries**

```shell
    npm i simplequeries
```

```js
    const { sqClick, sqAddClass, sqRemoveClass, sqContains } = require('simplequeries')
```

- sqClick(id, callback): Esta função irá buscar o elemento html com o ID informado, e irá adicionar um 'addEventListener' já com o event.preventDefault() e executar a função de callback quando o elemento HTML for clicado

- sqAddClass(id, className): Esta função irá **adicionar** uma classe à lista de classes do elemento HTML

- sqRemoveClass(id, className): Esta função irá **remover** uma classe da lista de classes do elemento HTML

- sqContains(id, className, callback): Esta função irá **verificar** se a class está contida dentro da lista de classes do elemento HTML, e se estiver, irá **executar** a função de callback.