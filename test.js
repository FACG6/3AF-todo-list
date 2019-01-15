var test = require('tape');
var logic = require('./logic');

var todos = [{ id: 0, description: ['hgg', 4], done: false }, { id: 1, description: ['fatma', 5], done: false }];
var newtodo = ['ahfgfg', 6];
test('Example test', function (t) {
  t.pass();
  t.end();
});
test('Add -todoarray', function (t) {

  const actual = logic.addTodo(todos, ["angham", 0]);
  const expected = [{ id: 0, description: ['hgg', 4], done: false }, { id: 1, description: ['fatma', 5], done: false }, { id: 1, description: ["angham", 0], done: false }]

  t.deepEqual(actual, expected, 'Add new to do ');
  t.end();

});



test('Sort -todoarray', function (t) {


  const actual = logic.sortTodos(todos);
  const expected = [
    { id: 1, description: ['fatma', 5], done: false },
    { id: 0, description: ['hgg', 4], done: false }
  ];

  t.deepEqual(actual, expected, 'Add new to do ');
  t.end();

});




