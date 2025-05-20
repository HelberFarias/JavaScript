const tarefas = ["Acordar", "Escovar os dentes", "Fazer o café"]
function gerenciadorDeTarefas(tarefas, acao, tarefa) {
    
    switch (acao) {
        case "adicionarInicio":
            tarefas.push(tarefa)
        case "removerFim":
            tarefas.pop (tarefa)
        case "removerInicio":
            tarefas.unshift(tarefa)
    }
}

gerenciadorDeTarefas(tarefas,"adicionarInicio", "Arrumar a Cama");

console.log(tarefas);