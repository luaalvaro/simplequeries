# SimpleQueries

### SimpleQueries é um pacote que vai trazer a abstração de algumas queries que são bastante utilizada para manipulação de elementos HTML

---

**Como utilizar o SimpleQueries**

Para utilizar o simplequeries é bastante simples, já que estamos falando de uma biblioteca javascript. Basta linkar o arquivo min ao seu projeto e tudo estará funcionando perfeitamente

```html

```

- sq.click(id, callback): Esta função irá buscar o elemento html com o ID informado, e irá adicionar um 'addEventListener' já com o event.preventDefault() e executar a função de callback quando o elemento HTML for clicado

- sq.addClass(id, className): Esta função irá **adicionar** uma classe à lista de classes do elemento HTML

- sq.removeClass(id, className): Esta função irá **remover** uma classe da lista de classes do elemento HTML

- sq.contains(id, className, callback): Esta função irá **verificar** se a class está contida dentro da lista de classes do elemento HTML, e se estiver, irá **executar** a função de callback.

- sq.value(id, newValue): Esta função irá pegar o value de um elemento html, e caso seja passado o parâmetro **newValue** a função irá alterar o value do elemento HTML.