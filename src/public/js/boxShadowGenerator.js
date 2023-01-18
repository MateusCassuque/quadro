class BoxShadowGenerator{
    constructor(
        horizontal,
        horizontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        box,
        rule,
        webkitRule,
        mozRule,
        cor,
        corRef,
        inset, insetRef,
        alpha,
        alphaRef
    ){
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blur = blur
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.box = box
        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
        this.cor = cor
        this.corRef = corRef
        this.inset = inset
        this.insetRef = insetRef,
        this.alpha = alpha,
        this.alphaRef = alphaRef
    }

    inincialize(){
        this.horizontalRef.value = this.horizontal.value
        this.verticalRef.value = this.vertical.value
        this.blurRef.value = this.blur.value
        this.spreadRef.value = this.spread.value
        this.corRef.value = this.cor.value
        this.alphaRef.value = this.alpha.value
    
        this.applyRule()
        this.showRules()
    }

    applyRule(){
        ///////
        // convertendo hexadecimal em rgba
        const hexRegx = '#[a-fA-F0-9]{6}'

        if(this.corRef.value.match(hexRegx)){
            const hexcolor = this.corRef.value.replace('#','')

            const r = parseInt(hexcolor.substring(0,2),16)
            const g = parseInt(hexcolor.substring(2,4),16)
            const b = parseInt(hexcolor.substring(4,6),16)
            
            let a = 0
            
            if(this.alphaRef.value == 10){
                a = 1
            }else{
                a = `0.${this.alphaRef.value}`
            }

            const cor = `rgba(${r},${g},${b},${a})`
            // //////////////////

            // Passando o valor para a propriedade style do box.

            this.box.style.boxShadow = `${this.insetRef} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px ${cor}`;
            
        }

        this.currentRule ='box-shadow: '+ this.box.style.boxShadow;
    }

    showRules(){
        this.rule.innerText = this.currentRule
        this.webkitRule.innerText = this.currentRule
        this.mozRule.innerText = this.currentRule
    }

    updateValue(type, value = ''){
        switch(type){
            case 'horizontal':
                this.horizontalRef.value = value
            break
                
            case 'vertical':
                this.verticalRef.value = value
            break
                
            case 'blur':
                this.blurRef.value = value
            break
                
            case 'spread':
                this.spreadRef.value = value
            break

            case 'cor':
                this.corRef.value = value
            break

            case 'inset':
                if(this.inset.checked){
                    this.insetRef = 'inset'
                }else{
                    this.insetRef = ''
                }
            break

            case 'alpha':
                this.alphaRef.value = value
            break
        }

        this.applyRule()
        this.showRules()
    }
}

// Seleção de elementos
const horizontal = document.querySelector('#horizontal');
const horizontalRef = document.querySelector('#horizontal-value');

const vertical = document.querySelector('#vertical');
const verticalRef = document.querySelector('#vertical-value');

const blur = document.querySelector('#blur');
const blurRef = document.querySelector('#blur-value');

const spread = document.querySelector('#spread');
const spreadRef = document.querySelector('#spread-value');

const box = document.querySelector('#box');

// Select das regras
const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

// Select do input-color & os adicionais
const cor = document.querySelector('#color')
const corRef = document.querySelector('#color-value')

        // Sombra interna
const inset =  document.querySelector('#inset')
const insetRef = ''

        // Opacidade alpha
const alpha = document.querySelector('#alpha')
const alphaRef = document.querySelector('#alpha-value')


// Instanciando a classe
const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    box,
    rule,
    webkitRule,
    mozRule,
    cor,
    corRef,
    inset,
    insetRef,alpha,
    alphaRef
    
)

boxShadow.inincialize()

// Eventos



horizontal.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('horizontal', value)
})


vertical.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('vertical', value)
})

spread.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('spread', value)
})

blur.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('blur', value)
})

cor.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('cor', value)
})

alpha.addEventListener('input', (e) => {
    const value = e.target.value
    
    boxShadow.updateValue('alpha', value)
})


inset.addEventListener('input', e => {
    boxShadow.updateValue('inset')
})