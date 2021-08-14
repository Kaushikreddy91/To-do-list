//Selectors

const todoinput= document.querySelector('.todo-input');
const todobutton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

//Event Listeners

todobutton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterTodo);


//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
   
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo-item');
    tododiv.appendChild(newTodo);
    
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    tododiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(tododiv);

    //clear todoinput value
    todoinput.value="";
}

function deletecheck(e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    //Check mark
    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            
        }
    });

}