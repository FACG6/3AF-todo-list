var test = require('tape');
var logic = require('./logic');

var todos=[{id:0,description:"fatma",done:false}];
var newtodo=[{id:1,description:"angham",done:false}];
test('Example test', function(t) {
  t.pass();
  t.end();
});
test('Add -todoarray',function (t){

  const actual =logic.addTodo(todos,"Sama");
  const expected= [{id:0,description:"fatma",done:false},{id:1,description:"Sama",done:false}]

  t.deepEqual(actual,expected,'Add new to do ');
  t.end();

});





