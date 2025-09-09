function getTimeFromSec(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let seconds = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
        seconds++
        relogio.innerHTML = getTimeFromSec(seconds)
    }, 1000)
}

document.addEventListener('click', function(el){
    const element = el.target

    if(element.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(element.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(element.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        seconds = 0
    }
})

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })
// pausar.addEventListener('click', function(event){
//     relogio.classList.add('pausado')
//     clearInterval(timer)
// })
// zerar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     relogio.innerHTML = '00:00:00'
//     seconds = 0
// })
