tarefas = document.getElementById('button');
tarefa_adicionada = document.getElementById('to_do');
checkbox = document.getElementById('checkbox');

var inputTarefa = document.getElementById('to_do').value;

tarefas.addEventListener('click', function() {
    document.getElementById('checkbox').innerText = inputTarefa;
});