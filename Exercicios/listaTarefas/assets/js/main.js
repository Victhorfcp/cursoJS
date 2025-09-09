const inputTarefa = document.querySelector('.input-tarefa')
const buttonTarefa = document.querySelector('.button-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    buttonApagar(li)
    salvarTarefas()
}

function criaLi(){
    const li = document.createElement('li')
    return li
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function buttonApagar(li){
    li.innerHTML += ' '
    const apagar = document.createElement('button')
    apagar.innerHTML = 'Apagar'
    apagar.setAttribute('class', 'apagar')
    apagar.setAttribute('title', 'Apagar tarefa')
    li.appendChild(apagar)
}

buttonTarefa.addEventListener('click', function(){
    if(!inputTarefa.value){
        return;
    }
    criaTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value){
            return;
        }
    criaTarefa(inputTarefa.value)
    }
})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefaSalva(){
    const tarefaSalva = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefaSalva)

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

addTarefaSalva()