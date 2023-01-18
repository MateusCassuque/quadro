class BorderGenerator{
    constructor(
        tamanho,
        tamanhoRef,
        tipo,
                      
        box,
        rule,
        webkitRule,
        mozRule,

        borderCor,
        borderCorRef,
    ){
        this.tamanho = tamanho
        this.tamanhoRef = tamanhoRef
        this.tipo = tipo
       
        this.box = box
        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
        this.borderCor = borderCor
        this.borderCorRef = borderCorRef
    }

    inincialize(){
        this.tamanhoRef.value = this.tamanho.value
        this.borderCorRef.value = this.borderCor.value
    
        this.applyRule()
        this.showRules()
    }

    applyRule(){
        this.box.style.border = `${this.tamanhoRef.value}px ${this.tipo.value} ${this.borderCorRef.value}`;

        this.currentRule ='border: ' + this.box.style.border;
    }

    showRules(){
        this.rule.innerText = this.currentRule
        this.webkitRule.innerText = this.currentRule
        this.mozRule.innerText = this.currentRule
    }

    updateValue(type, value = ''){
        switch(type){
            case 'tamanho':
                this.tamanhoRef.value = value
            break
                
            case 'tipo':
                this.tipo.value = value
            break
                
            case 'borderCor':
                this.borderCorRef.value = value
            break
        }

        this.applyRule()
        this.showRules()
    }
}

// Seleção de elementos
const tamanho = document.querySelector('#tamanho');
const tamanhoRef = document.querySelector('#tamanho-value');

const tipo = document.querySelector('#tipo');
const tipoRef = document.querySelector('#tipo-value');

// Select do input-cborderClor & os adicionais
const borderCor = document.querySelector('#cborderClor')
const borderCorRef = document.querySelector('#cborderClor-value')


// Instanciando a classe
const border = new BorderGenerator(
    tamanho,
    tamanhoRef,
    tipo,
        
    box,
    rule,
    webkitRule,
    mozRule,
    borderCor,
    borderCorRef,
    
)

border.inincialize()

// Eventos

tamanho.addEventListener('input', (e) => {
    const value = e.target.value
    
    border.updateValue('tamanho', value)
})


tipo.addEventListener('input', (e) => {
    const value = e.target.value
    
    border.updateValue('tipo', value)
})

borderCor.addEventListener('input', (e) => {
    const value = e.target.value
    
    border.updateValue('borderCor', value)
})
