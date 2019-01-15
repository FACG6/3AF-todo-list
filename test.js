
var todos1 = [{ id: 0, description: ['hgg', 4], done: false }, { id: 1, description: ['fatma', 5], done: false }];
var newtodo = ['ahfgfg', 6];
test('Example test', function (t) {
  t.pass();
  t.end();
});
test('Add -todoarray', function (t) {

  const actual = logic.addTodo(todos1, ["angham", 0]);
  const expected = [{ id: 0, description: ['hgg', 4], done: false }, { id: 1, description: ['fatma', 5], done: false }, { id: 1, description: ["angham", 0], done: false }]

  t.deepEqual(actual, expected, 'Add new to do ');
  t.end();

});



test('Sort -todoarray', function (t) {


  const actual = logic.sortTodos(todos1);
  const expected = [
    { id: 1, description: ['fatma', 5], done: false },
    { id: 0, description: ['hgg', 4], done: false }
  ];

  t.deepEqual(actual, expected, 'Add new to do ');
  t.end();

});





var todos = [
  {priority:1, id: 0, description: "fatma", done: false },
  {priority:3, id: 2, description: "Anies", done: false },
  {priority:2, id: 1, description: "Ahmed", done: false }
];

// test('testing deleteTodo function',function (t){
//   const actual =logic.deleteTodo(todos,0);
//   const expected= [{id:1,description:"Ahmed",done:false},{id:2,description:"Anies",done:false}]
// t.deepEqual(actual,expected,'the actual should be equal expected');
// t.deepEqual(actual.length,2,'the actual lenght should be equal 2 ');
// t.end();

// });


// test('testing markTodo function',function (t){
//   const actual =logic.markTodo(todos,0);
//   const expected=  [
//     { id: 0, description: "fatma", done: true },
//     { id: 1, description: "Ahmed", done: false },
//     { id: 2, description: "Anies", done: false }
//   ]
// t.deepEqual(actual,expected,'the actual should be equal expected');
// t.end();

// });
