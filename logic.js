// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function () {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function (todos) {
    return todos.map(function (todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function (todos, newTodo) {
    if (typeof newTodo !== 'object') return `${typeof newTodo} is not allowed`;
    if(typeof newTodo[1] ==='string') return 'Enter Number' ;
    const newTodoArray = todos.map(todo => ({ ...todo }));
    newTodoArray.push({ id: todoFunctions.generateId(), description: newTodo, done: false });
    return newTodoArray;
  },
  

 
  deleteTodo: (todos, idToDelete) => todos.filter(todo => todo.id !== idToDelete),

  markTodo: (todos, idToMark) => todos.map(element => {
    const newElement = { ...element };
    if (newElement.id === idToMark)
      newElement.done = !newElement.done;
    return newElement;
  })
  ,
  sortTodos: function (todos, sortFunction) {
    
    
    const newArray = todos.map(todo => ({ ...todo }));

    return newArray.sort((prev,next)=> next.description[1] - prev.description[1]);



  },

  
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}