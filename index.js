// simpleQueries

const sq = {
    click: (id, callback) => {

        // Função vai pegar o elemento HTML pela ID e vai adidionar um EventListener
        // Já vai incluir o preventDefault
        // E executar a função de callback recebida
    
        return document.getElementById(id).addEventListener('click', (event) => {
            event.preventDefault()
            callback()
        })
    },



    addClass: (id, className) => {

        // Função vai pegar o elemento HTML e adicionar uma classe na lista de classes
    
        return document.getElementById(id).classList.add(className)
    },



    RemoveClass: (id, className) => {

        // Função vai pegar o elemento HTL e remover uma classe da lista de classes
    
        return document.getElementById(id).classList.remove(className)
    },



    contains: (id, className, callback) => {

        // Função vai verificar se o elemento HTML tem determinada classe (parametro)
        // na lista de classes, se tiver vai executar a função de callback
    
        if (document.getElementById(id).classList.contains(className)) {
          callback()
        }
    }
}

module.exports = sq