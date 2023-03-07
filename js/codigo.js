function iniciarJg() {
    let botonMJ = document.getElementById('boton-mascotas')
    botonMJ.addEventListener('click', seleccionarMJ)
}

function seleccionarMJ() {
    let inputpato = document.getElementById('pato')
    let inputrata = document.getElementById('rata')
    let inputmono = document.getElementById('mono')
    let spanMJ = document.getElementById('mascota-jugador')

    if (inputpato.checked) {
        spanMJ.innerHTML = 'pato'
    } else if (inputrata.checked) {
        spanMJ.innerHTML = 'rata'
    } else if (inputmono.checked) {
        spanMJ.innerHTML = 'mono'
    } else {
        alert ('No has seleccionado ninguna mascota')
    }

    seleccionarME()
}

function seleccionarME() {  
    let ataqueAleatorio = aleatorio(1,3)
    let spanME = document.getElementById('mascota-enemiga')

    if (ataqueAleatorio == 1) {
        spanME.innerHTML = 'pato'
    } else if (ataqueAleatorio == 2) {
        spanME.innerHTML = 'rata'
    } else {
        spanME.innerHTML = 'mono'
    }
}
    
function aleatorio (min , max) {
    return Math.floor(Math.random () * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJg)
