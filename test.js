var test = require('tape');
var logic = require('./logic');

var todos=[{id:0,description:"fatma",done:false}];
var newtodo=[{id:1,description:"angham",done:false}];
test('Example test', function(t) {
  t.pass();
  t.end();
});
test('todoarray',function (t){

  const actual =logic.addTodo(todos,newtodo);
  const expected= [{id:0,description:"fatma",done:false},{id:1,description:"angham",done:false}]

  t.deepEqual(actual,expected,'Pass');
  t.end();

});



var nottodos=[{id:0,description:"fatma",done:false}];
var newnottodo=[{id:1,description:"angham",done:false}];
test('another Example test', function(q) {
  q.pass();
  q.end();
});
test('DeleteList',function (q){

  const actual =logic.deleteTodo(nottodos,newnottodo);
  const expected= [{id:1,description:"Anies",done:true,{id:2,description:"Ahmad",done:true}]

  t.deepEqual(actual,expected,'Pass');
  t.end();

});
