function troca(){
        let elemento = document.querySelector('select').value
    if(elemento == 'Desabilitado'){
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = "Desabilitado"
        elemento.style.color = "white"
        elemento.style.backgroundColor = "red"
        document.querySelector('input').disabled = true
    }else {
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = ""
        elemento.style.color = ""
        elemento.style.backgroundColor = ""
        
      
    }
}

