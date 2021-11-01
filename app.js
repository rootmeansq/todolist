// selectors
const todoInput = document.getElementById("userInput");
const todoButton = document.getElementById("add");
const todolist = document.querySelector(".todo-list");
const filterSelection = document.querySelector(".todo-filter")

// event 
todoButton.addEventListener('click', addtodo);
todolist.addEventListener('click', removetodo);
filterSelection.addEventListener('change', filter);


//function
function addtodo(add) {

    add.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerHTML= '<i class="fas fa-check"></i>';
    completeButton.classList.add("done-button");
    todoDiv.appendChild(completeButton);


    const deleteButton = document.createElement("button");
    deleteButton.innerHTML= '<i class="fas fa-trash" id="delete-icon"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton );

    todolist.appendChild(todoDiv)

    todoInput.value="";

}

function removetodo(event){
    const item= event.target;
//    console.log(item.classList[0])

    if(item.classList[0]==="delete-button"){
        const todo = item.parentElement;
        todo.remove();
    }
    
    if(item.classList[0]==="done-button") {
        //console.log("done");
        co  nst todo = item.parentElement;
        todo.classList.toggle("complete")  
    }
    }

function filter(event){
    const todos = [...todolist.children];
    console.log(todos);
    todos.forEach(function(todo){
        switch (event.target.value) {
            case "all":
                //console.log("all");
                todo.style.display = "flex";
                break;
            case "complete":
                //console.log("Complete");
                if (todo.classList.contains("complete")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":                
                if (!todo.classList.contains("complete")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    
    }
    ) 
}
    
    
    
