const { todos, TodoCD } = require('./addDeleteTodo.js');
const TodoRU = require('./editUpdateClearTodo.js');

describe('test update todo list description by index number', () => {
  TodoCD.createTodo('task-1');
  test('todo description as the index number in param should be updated', () => {
    expect(TodoRU.updateTodoDescription(0, 'edited')).toEqual(todos.description);
  });
});

describe('test update todo isCompleted by index number', () => {
  test('todo isCompleted as the index number in param should be changes', () => {
    expect(TodoRU.updateTodoCompletion(0)).toEqual(todos.isCompleted);
  });
});

describe('delete todo list were isCompleted status is true', () => {
  test('todo list should only shown todo list with isCompleted status is false', () => {
    expect(TodoRU.deleteCompletedTodo()).toEqual(todos.length);
  });
});
