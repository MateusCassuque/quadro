class Servico {
    static countId = 0
    static servicos = []

    constructor(name, preco){
        Servico.countId ++
        this.id = Servico.countId
        
        this.name = name
        this.preco = preco

        Servico.servicos.push(this)
    }
 
    static find(){
        const servicosList = []
        Servico.servicos.forEach( s => {
            const servico = {
                id: s.id,
                name: s.name,
                preco: s.preco
            }

            servicosList.push(servico)
        })
        return servicosList
    }

    static findById(name){
        const servicos = Servico.find()
        var servico = null

        servicos.forEach( s => {
            if(s.name == name){
                servico = s
            }
        })

        return servico
    }

    set setName (name){
        return this.name = name
    }
    set setpreco (preco){
        return this.preco = preco
    }

    get setName (){
        return this.name
    }
    get setpreco (){
        return this.preco
    }
}

module.exports = Servico