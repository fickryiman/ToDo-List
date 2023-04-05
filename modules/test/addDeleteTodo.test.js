const { todos, TodoCRUD } = require('./addDeleteTodo.js');

describe('test add todo list', () => {
  test('createTodo function is exists?', () => {
    expect(TodoCRUD.createTodo).toBeDefined();
  });
  test('add item to todo list check the description', () => {
    expect(TodoCRUD.createTodo('finish exercise test part-1')).toEqual(todos.description);
  });
  test('add item to todo list check the index', () => {
    expect(TodoCRUD.createTodo('finish exercise test part-2')).toEqual(todos.index);
  });
  test('add item to todo list check isCompleted', () => {
    expect(TodoCRUD.createTodo('finish exercise test part-3')).toEqual(todos.isCompleted);
  });
});

describe('test delete todo list', () => {
  test('delete function is exists?', () => {
    expect(TodoCRUD.deleteTodo).toBeDefined();
  });

  it('should be delete an item from todo list', () => {
    const existingTodo = TodoCRUD.deleteTodo(1);
    expect(TodoCRUD.deleteTodo(0)).toEqual(TodoCRUD.readTodos());
  });
});
