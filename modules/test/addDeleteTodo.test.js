const { todos, TodoCD } = require('./addDeleteTodo.js');

describe('test add todo list', () => {
  test('createTodo function is exists?', () => {
    expect(TodoCD.createTodo).toBeDefined();
  });
  test('add item to todo list check the description', () => {
    expect(TodoCD.createTodo('finish exercise test part-1')).toEqual(todos.description);
  });
  test('add item to todo list check the index', () => {
    expect(TodoCD.createTodo('finish exercise test part-2')).toEqual(todos.index);
  });
  test('add item to todo list check isCompleted', () => {
    expect(TodoCD.createTodo('finish exercise test part-3')).toEqual(todos.isCompleted);
  });
});

describe('test delete todo list', () => {
  test('delete function is exists?', () => {
    expect(TodoCD.deleteTodo).toBeDefined();
  });

  it('should be delete an item from todo list', () => {
    expect(TodoCD.deleteTodo(0)).toEqual(TodoCD.readTodos());
  });
});
