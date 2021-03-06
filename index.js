// simpleQueries v1.0

module.exports = sq = {
    click: (id, callback) => {

        // Função vai pegar o elemento HTML pela ID e vai adidionar um EventListener
        // Já vai incluir o preventDefault
        // E executar a função de callback recebida
    
        return document.getElementById(id).addEventListener('click', (event) => {
            event.preventDefault()
            callback()
        })
    },
    addClass: (id, classesNameArray) => {

        // Função vai pegar o elemento HTML e adicionar uma ou mais de uma classe na lista de classes
    
        function exec() {
            for(count = 0; count < classesNameArray.length; count++){
                document.getElementById(id).classList.add(classesNameArray[count])
            }
        }

        return exec()
    },
    removeClass: (id, classesNameArray) => {

        // Função vai pegar o elemento HTL e remover uma classe da lista de classes
    
        function exec() {
            for(count = 0; count < classesNameArray.length; count++){
                document.getElementById(id).classList.remove(classesNameArray[count])
            }
        }

        return exec()
    },
    contains: (id, className, callback) => {

        // Função vai verificar se o elemento HTML tem determinada classe (parametro)
        // na lista de classes, se tiver vai executar a função de callback
        
        if (callback == undefined) {
            return document.getElementById(id).classList.contains(className)
        }

        if (document.getElementById(id).classList.contains(className)) {
          callback()
        }
    },
    value: (id, newValue) => {

        // Função vai retornar o valor de um elemento html
        // E caso o newValue seja utilizado, o elemento html vai receber o novo valor

        if (newValue != null){
            return document.getElementById(id).value = newValue
        }

        return document.getElementById(id).value
    }
}