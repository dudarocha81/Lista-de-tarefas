function addNewTask(){
    var list = document.getElementById("list"); 
    var text = document.getElementById("task_name").value;

if(text.length == 0){
    alert('Não foi adicionada nenhuma tarefa.');
}

    var listIten = document.createElement("li");
    listIten.className = "list-iten";
    
    const textElement = document.createTextNode(text);
    listIten.appendChild(textElement);
    list.appendChild(listIten);
    }
