function addItem() {
    let text = document.getElementById("myInput").value;
    if(text.length === 0){
        alert("Please Enter a Task")
        return
    }
  
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = text
    li.id = Math.random().toString()
    let deleteButton=document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = deleteItem
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    
    document.getElementById("myInput").value = "";
  
}
 
function deleteItem(id){
    let li = document.getElementById("myInput");
    li.remove();
}