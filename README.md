# SimpleQueries

### SimpleQueries é um pacote que vai trazer a abstração de algumas queries que são bastante utilizada para manipulação de elementos HTML

---

**Como utilizar o SimpleQueries**

 **Via npm**

```shell
npm install simplequeries
```

Para fazer a chamada no seu projeto basta fazer o import
```js
import sq from 'simplequeries'

sq.click('btnLogin', () => {
    // Esta função de callback será executada quando o botão com id
    // btnLogin for clicado

    alert('Você clicou no botão')
})

sq.addClass('btnRegister', ['mt-2', 'bg-red-500', 'font-bold'])

sq.contains('btnLogin', 'h-2') //Irá verificar se o btn login tem a class h-2 e retornará true or false

sq.contains('btnLogin', 'h-2', () => {
    //Passando um callback, caso a validação for verdadeira
    //O callback é executado

    alert('class h-2 está contida em btnLogin')
}) 
```

- sq.click(id, callback): Esta função irá buscar o elemento html com o ID informado, e irá adicionar um 'addEventListener' já com o event.preventDefault() e executar a função de callback quando o elemento HTML for clicado

- sq.addClass(id, className): Esta função irá **adicionar** uma classe à lista de classes do elemento HTML

- sq.removeClass(id, className): Esta função irá **remover** uma classe da lista de classes do elemento HTML

- sq.contains(id, className, callback): Esta função irá **verificar** se a class está contida dentro da lista de classes do elemento HTML, e se estiver, irá **executar** a função de callback.

- sq.value(id, newValue): Esta função irá pegar o value de um elemento html, e caso seja passado o parâmetro **newValue** a função irá alterar o value do elemento HTML.