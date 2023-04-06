const { todos, TodoCD } = require('./addDeleteTodo');
const TodoRU = require('./editUpdateClearTodo');

describe('test update todo list description by index number', () => {
  TodoCD.createTodo('task-1');
  test('todo description as the index number in param should be updated', () => {
    expect(TodoRU.updateTodoDescription(0, 'edited')).toEqual(todos.description);
  });
});


