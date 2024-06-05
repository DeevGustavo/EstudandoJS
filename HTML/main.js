function addNewTack() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if(text.legth === 0){
        alert("Tarefa precisa de ter mais de 1 caracter")
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-Item"

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement)
    list.appendChild(list-Item)
}