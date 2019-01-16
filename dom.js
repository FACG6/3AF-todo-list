
// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  let container = document.getElementById('todo-container');
  let addTodoForm = document.getElementById('add-todo');
  let state = [];
  let createTodoNode = function (todo) {
    let todoNode = document.createElement('li');
    if (todo.description[1] === '0')
      todoNode.classList.add('high');
    if (todo.description[1] === '1')
      todoNode.classList.add('mid');
    if (todo.description[1] === '2')
      todoNode.classList.add('low');
    let todoTask = document.createElement('span');
    todoTask.appendChild(document.createTextNode(todo.description[0]));
    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute('id', 'delete--button');
    let idelete = document.createElement('i');
    idelete.setAttribute('class', 'far fa-trash-alt');
    deleteButtonNode.appendChild(idelete);
    let editButtonNode = document.createElement('button');
    editButtonNode.setAttribute('id', 'mark--button');
    let iedit = document.createElement('i');
    iedit.setAttribute('class', 'fas fa-check');
    editButtonNode.appendChild(iedit);
    deleteButtonNode.addEventListener('click', function (event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(todoTask);
    if (todo.done) {
      todoNode.classList.add('mark');

    }
    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(editButtonNode);
    // add markTodo button
      editButtonNode.addEventListener('click', function (event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(newState);
    });
    return todoNode;
  };
  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      event.preventDefault()
      let inputFromUser = document.querySelector('input[name=description]').value;
      var rate_value;
      if (document.getElementById('high').checked) {
        rate_value = document.getElementById('high').value;
      } else if (document.getElementById('mid').checked) {
        rate_value = document.getElementById('mid').value;
      } else if (document.getElementById('low').checked) {
        rate_value = document.getElementById('low').value;
      }
      let desc = [];
      desc[0] = inputFromUser;
      desc[1] = rate_value;
      console.log('rate', rate_value);
      let newState = todoFunctions.addTodo(state, desc);
      console.log(newState);
      let sortedState = todoFunctions.sortTodos(newState);
      update(sortedState);
    });
  }

  let update = function (newState) {
    state = newState;
    renderState(state);
  };
  // you do not need to change this function
  let renderState = function (state) {
    let todoListNode = document.createElement('ul');
    todoListNode.setAttribute("id", "toDoneLis");
    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };
  if (container) renderState(state);
})();