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
        try{
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
        }catch(error){
            return {message: 'Error on Find Services!'}
        }
    }

    static findById(id){
        try {
            const servicos = Servico.find()
            var servico = null

            servicos.forEach( s => {
                if(s.id == id){
                    servico = s
                }
            })

            return servico
        } catch (error) {
            return {message: 'Error on Find Service by Id.!'}
        }
    }

    
    static findByIdAndUpdate(id, service){
        try {
            const processos = Processo.find()

            processos.forEach( s => {
                if(s.id == id){
                    
                    s.setName = service.name
                    s.setpreco = service.preco

                    return s
                }
            })
        } catch (error) {
            return {message: 'Error on update Processo!'}
        }
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