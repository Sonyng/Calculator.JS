var body = document.querySelector("body")
var div = document.createElement("div")
div.classList = "Div-Calculadora"
body.appendChild(div)



//divs
var divTitulo = document.createElement("div")
var divInput = document.createElement("div")
var divButton = document.createElement("div")
var divResultado = document.createElement("div")
div.appendChild(divTitulo)
div.appendChild(divResultado)
div.appendChild(divInput)
div.appendChild(divButton)

//title
var title = document.createElement("h1")
var conteudoTitle = document.createTextNode("Calculadora")
title.appendChild(conteudoTitle)
divTitulo.appendChild(title)
title.classList = "Title"

//Resultado

var Resultado = document.createElement("a")
divResultado.appendChild(Resultado)

//Texto do 1 input
var PrimeiroElemento = document.createElement("p")
var ConteudoPrimeiroElemento = document.createTextNode("Primeiro elemento:")
PrimeiroElemento.appendChild(ConteudoPrimeiroElemento)
divInput.appendChild(PrimeiroElemento)

//1 Input 
var n1 = document.createElement("input")
n1.classList = "N1"
n1.setAttribute("type","number")
divInput.appendChild(n1)


//Texto do 2 input
var SegundoElemento = document.createElement("p")
var ConteudoSegundoElemento = document.createTextNode("Segundo elemento:")
SegundoElemento.appendChild(ConteudoSegundoElemento)
divInput.appendChild(SegundoElemento)



//2 input 
var n2 = document.createElement("input")
n2.classList = "N2"
n2.setAttribute("type","number")
divInput.appendChild(n2)

//Br para espacamento
var separar = document.createElement("br")
divButton.appendChild(separar)

//button soma
var Soma = document.createElement("button")
var ConteudoSoma = document.createTextNode("Somar")
Soma.appendChild(ConteudoSoma)
Soma.classList = "Button-Soma"
Soma.setAttribute("Onclick","Somar()")
divButton.appendChild(Soma)

//button Subtração
var Subtracao = document.createElement("button")
var ConteudoSubtracao = document.createTextNode("Subtrair")
Subtracao.appendChild(ConteudoSubtracao)
Subtracao.classList = "Button-Subtracao"
Subtracao.setAttribute("Onclick","Subtrair()")
divButton.appendChild(Subtracao)

//button divisao
var Divisao = document.createElement("button")
var ConteudoDivisao = document.createTextNode("Dividir")
Divisao.appendChild(ConteudoDivisao)
Divisao.classList = "Button-Divisao"
Divisao.setAttribute("Onclick","Dividir()")
divButton.appendChild(Divisao)

//button multiplicacao
var Multiplicacao = document.createElement("button")
var ConteudoMultiplicacao = document.createTextNode("Multiplicar")
Multiplicacao.appendChild(ConteudoMultiplicacao)
Multiplicacao.classList = "Button-Multiplicacao"
Multiplicacao.setAttribute("Onclick","Multiplicacar()")
divButton.appendChild(Multiplicacao)





//CSS
{
body.style.background = "Aquamarine"
body.style.position = "absolute"
body.style.top = "40%"
body.style.left = "50%"
body.style.transform = "translate(-50%,-50%)"
}

{
title.style.marginTop = "-40px"    
title.style.color = "blue"
}  

{ 
div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.flexDirection = "column"
div.style.backgroundColor = "green"
div.style.width = "390px"
div.style.height = "410px"
div.style.fontFamily = "Arial"
div.style.borderRadius = "20px"
}

{
n1.style.borderRadius = "10px"    
n2.style.borderRadius = "10px"   
divInput.style.padding = "10px"
}
divButton.style.top = "10px"






//FUNCTION SOMAR
function Somar(){

    Resultado.innerHTML = (parseInt(n1.value) + parseInt(n2.value))

}  
//FUNCTION SUBTRAIR
function Subtrair(){

    Resultado.innerHTML = (parseInt(n1.value) - parseInt(n2.value))

}

//FUNCTION DIVIDIR
function Dividir(){

    Resultado.innerHTML = (parseInt(n1.value)/parseInt(n2.value))
}

//FUNCTION MULTIPLICAR
function Multiplicacar(){
    Resultado.innerHTML = (parseInt(n1.value) * parseInt(n2.value))
}
