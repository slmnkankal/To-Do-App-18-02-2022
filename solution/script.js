//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);





//functions
function addTodo(event) {
    //to prevent form from submitting
    event.preventDefault();
    //creating div element with class name with todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li element
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; // so i will name tasks with input!
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check button adding
    const completedButton = document.createElement("button");
    //appending i tag with innerHTML not innerText
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    //trash button adding
    const trashButton = document.createElement("button");
    //appending i tag with innerHTML not innerText
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete-button");
    todoDiv.appendChild(trashButton);
    //appending this div which includes li and buttons so we will be able to generates todo items.
    todoList.appendChild(todoDiv);
    //clearing todo input value
    todoInput.value = "";

}


function deleteCheck(e) {
    const item = e.target;
    // deleting todo items
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        //adding animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        //todo.remove();  we commented because items remove instantly without animation.
    }

    // checking todo items
    if (item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    
    }

}
    


