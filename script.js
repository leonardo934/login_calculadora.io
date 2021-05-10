let novousuario = ""
let novoemail = ""
let novasenha = ""


























const secadastrar = document.getElementById("se_cadastrar")

secadastrar.addEventListener("click", function () {

    const paginacadastro = document.getElementById("pagina_cadastro")
    paginacadastro.style.display = "block"


    const paginalogin = document.getElementById("pagina_login")
    paginalogin.style.display = "none"


})
const btLogin = document.getElementById("btLogin")

btLogin.addEventListener("click", function () {

    const paginalogin = document.getElementById("pagina_login")
    paginalogin.style.display = "flex"


    const paginacadastro = document.getElementById("pagina_cadastro")

    paginacadastro.style.display = "none"

})


const Cadastro = document.getElementById("Cadastro")

Cadastro.addEventListener("click", function () {

    const email = document.getElementById("email_cad").value

    const usuario = document.getElementById("usr_cad").value

    const senha = document.getElementById("pwd_cad").value


    if (email === "") {
        return alert("VOCÊ PRESISA DIGITAR UM E-MAIL")
    } else if (usuario === "") {
        return alert("VOCÊ PRESISA DIGITAR UM USUARIO ")
    } else if (senha === "") {
        return alert("VOCÊ PRESISA DIGITAR UMA SENHA ")
    } else {
        novoemail = email
        novousuario = usuario
        novasenha = senha
        alert(novousuario + " você acabou de se cadastrar")
    }


})

const logar = document.getElementById("logar")

logar.addEventListener("click", function () {


    const emaillog = document.getElementById("email_log").value
    const senhalog = document.getElementById("pwd_log").value

    if (emaillog === novoemail && senhalog === novasenha) {
         alert(novousuario + " você esta logado")


        const calculadora = document.getElementById("pagina_calculadora")
        calculadora .style.display = "flex"
    
    
        const paginalogin = document.getElementById("pagina_login")
    
        paginalogin.style.display = "none"

        
        const paginacadastro = document.getElementById("pagina_cadastro")
        paginacadastro.style.display = "none"
    









    } else { 
return alert("E-mail ou Senha incorreta")
    }
  
})


//----------------------------------------------------------------------















const btsomar = document.getElementById("btsomar")


btsomar.addEventListener("click", function () {

    const valor1Soma = document.getElementById("valor1Soma")
    valor1Soma = valor1Soma.value

    const valor2Soma = document.getElementById("valor2Soma")
    valor2Soma = valor2Soma.value

    if (valor1Soma < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Soma < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Soma == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Soma == 0) {
        return alert("Não pode ser 0")
    } else {
        const soma = Number(valor1Soma) + Number(valor2Soma)
        resultadoSoma = document.getElementById("resultadoSoma")
        resultadoSoma.innerHTML = soma
    }



})

const btSub = document.getElementById("btSub")

btSub.addEventListener("click", function () {
    const valor1Sub = document.getElementById("valor1Sub")
    valor1Sub = valor1Sub.value

    const valor2Sub = document.getElementById("valor2Sub")
    valor2Sub = valor2Sub.value


    if (valor1Sub < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Sub < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Sub == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Sub == 0) {
        return alert("Não pode ser 0")
    } else {

        const Sub = Number(valor1Sub) - Number(valor2Sub)
        const resultadoSub = document.getElementById("resultadoSub")
        resultadoSub.innerHTML = Sub
    }


})

const btMul = document.getElementById("btMul")

btMul.addEventListener("click", function () {

    const valor1Mul = document.getElementById("valor1Mul")
    valor1Mul = valor1Mul.value

    const valor2Mul = document.getElementById("valor2Mul")
    valor2Mul = valor2Mul.value

    if (valor1Mul < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Mul < 0) {
        return alert("Não pode colocar Número negativo")
    } else {
        const Mul = Number(valor1Mul) * Number(valor2Mul)

        const resultadoMul = document.getElementById("resultadoMul")
        resultadoMul.innerHTML = Mul
    }
})
const btDiv = document.getElementById("btDiv")

btDiv.addEventListener("click", function () {
    const valor1Div = document.getElementById("valor1Div")
    valor1Div = valor1Div.value

    const valor2Div = document.getElementById("valor2Div")
    valor2Div = valor2Div.value


    if (valor1Div < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Div < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Div == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Div == 0) {
        return alert("Não pode ser 0")
    } else {
        const Div = Number(valor1Div) - Number(valor2Div)

        const resultadoDiv = document.getElementById("resultadoDiv")
        resultadoDiv.innerHTML = Div
    }



})



const limpar = document.getElementById("limpar")

limpar.addEventListener("click", function () {
document.getElementById("valor1Soma").value =""
document.getElementById("valor2Soma").value =""
document.getElementById("resultadoSoma").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Sub").value =""
document.getElementById("valor2Sub").value =""
document.getElementById("resultadoSub").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Mul").value =""
document.getElementById("valor2Mul").value =""
document.getElementById("resultadoMul").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Div").value =""
document.getElementById("valor2Div").value =""
document.getElementById("resultadoDiv").innerHTML =""


})