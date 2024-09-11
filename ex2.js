function mostraTele() {
    let elemento = document.querySelector('.texto')
    elemento.innerHTML = "40028922"
    elemento.style.color = ""
    elemento.style.backgroundColor = ""
    document.querySelector('p').innerHTML
    //Aqui ficaria assim: document.querySelector('.texto').innerHTML = "numero/telefone"   
}
function apagaTele() {
    let elemento = document.querySelector('.texto')
        elemento.innerHTML = ""
        elemento.style.color = ""
        elemento.style.backgroundColor = "transparent"

        //Daria pra fazer assim também: document.querySelector('.texto').innerHTML = ""
}