var tarefas = document.querySelector("#button");
var tarefaAdicionada = document.querySelector("#toDo");
var checkbox = document.querySelector("#checkbox");

function toDoButton() {
    var tarefaAdd = "<div>" + tarefaAdicionada.value + "<br>" + "</div>"
    checkbox.innerHTML = tarefaAdd
};