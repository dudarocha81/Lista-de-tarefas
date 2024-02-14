const button = document.querySelector(".task_button");

function addNewTask() {
  let list = document.getElementById("list");
  let text = document.getElementById("new_task").value;

  if (text.length == 0) {
    alert('Não foi adicionada nenhuma tarefa.');
  }

  let listIten = document.createElement("li");
  listIten.className = "list-iten";

  let textElement = document.createTextNode(text);
  listIten.appendChild(textElement);
  list.appendChild(listIten);
}

function deleteTask(){
    
}
button.addEventListener('click', addNewTask);
