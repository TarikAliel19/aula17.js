function minhaFuncao(){
    document.querySelector('.minhaDiv').classList.add("classe1","classe2","classe3")
}
function apagarCoisa(){
    document.querySelector('.minhaDiv').classList.remove("classe1","classe2","classe3")
}
function fundoAzul(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = "blue"

}function fundoTransp(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = "transparent"
}
function fonteVer(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = "green"

}
function fonteNormal(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = ""
}