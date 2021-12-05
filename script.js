var nome = window.prompt("Por favor, digite seu nome.")
window.document.querySelector("header").innerHTML = (`Olá ${nome}, </br> no que podemos ajudar?`)
if(nome == null) {
    window.document.querySelector("header").innerHTML = ("Deixa de ser preguiçoso recarregue a pagina e digite seu nome")
}
var fsint = window.document.getElementsByName("sintoma")
var fmedi = window.document.getElementsByName("medicamento")
function procurar(){
    if (fsint[0].checked){
        window.document.querySelector("#tipodor").style.display = "block"
    } else {
        window.document.querySelector("#tipodor").style.display = "none"
    }
    if (fsint[1].checked){
        window.document.querySelector("#tipofebre").style.display = "block"
    } else {
        window.document.querySelector("#tipofebre").style.display = "none"
    }
    if (fsint[2].checked){
        window.document.querySelector("#tipopressao").style.display = "block"
    } else {
        window.document.querySelector("#tipopressao").style.display = "none"
    }
}
function consultar(){
    if (fmedi[0].checked){
        window.document.querySelector(".dipirona").style.display = "block"
    }else {
        window.document.querySelector(".dipirona").style.display = "none"
    }
    if (fmedi[1].checked){
        window.document.querySelector(".paracetamol").style.display = "block"
    } else {
        window.document.querySelector(".paracetamol").style.display = "none"
    }
    if (fmedi[2].checked){
        window.document.querySelector(".ibuprofeno").style.display = "block"
    } else {
        window.document.querySelector(".ibuprofeno").style.display = "none"
    }
    if (fmedi[3].checked){
        window.document.querySelector(".aspirina").style.display = "block"
    } else{
        window.document.querySelector(".aspirina").style.display = "none"
    }
    if (fmedi[4].checked){
        window.document.querySelector(".rivaroxabana").style.display = "block"
    } else{
        window.document.querySelector(".rivaroxabana").style.display = "none"
    }
    if (fmedi[5].checked){
        window.document.querySelector(".anlodipino").style.display = "block"
    } else{
        window.document.querySelector(".anlodipino").style.display = "none"
    }
    
}
