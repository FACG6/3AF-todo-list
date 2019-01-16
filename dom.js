
// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  let container = document.getElementById('todo-container');
  let addTodoForm = document.getElementById('add-todo');

  let state = [
    { id: -3, description: 'first todo' ,done:true},
    { id: -2, description: 'second todo',done:false },
    { id: -1, description: 'third todo',done:false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  let createTodoNode = function (todo) {
    
    let todoNode = document.createElement('li');
    // you will need to use addEventListener
    

    
    let todoTask = document.createElement('span');
    todoTask.appendChild(document.createTextNode(todo.description[0]));
    // add span holding description

    // this adds the delete button

    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = 'delete';
    let editButtonNode = document.createElement('button');
    editButtonNode.textContent = 'Mark';
    deleteButtonNode.addEventListener('click', function (event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(todoTask);
    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(editButtonNode);
  

    




    
   

//document.getElementById('results').innerHTML = rate_value;


    // add markTodo button
editButtonNode.addEventListener('click',function(event){
  let newState=todoFunctions.markTodo(state,todo.id);

  todoNode.classList.add("MARK12");
  update(newState);
});
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      event.preventDefault()
      let inputFromUser = document.querySelector('input[name=description]').value;
      var rate_value;
if(document.getElementById('high').checked){
    rate_value = document.getElementById('high').value;
    
}else if(document.getElementById('mid').checked){
    rate_value = document.getElementById('mid').value;

}else if(document.getElementById('low').checked){
    rate_value = document.getElementById('low').value;
}  


      let desc=[];
      desc[0]=inputFromUser;
      desc[1]=rate_value;
      let newState = todoFunctions.addTodo(state, desc);
      update(newState);
    });
  }

  // you should not need to change this function
  let update = function (newState) {
    state = newState;
   
    
    renderState(state);
  };

  // you do not need to change this function
  let renderState = function (state) {
    let todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };



  if (container) renderState(state);
})();