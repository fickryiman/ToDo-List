const TodoCRUD = require('../crud');

// unit test for add function
describe('add new item to todo list', () => {
  const Todos = [
    {"index":1, "description":"setup project with webpack", "completed":false},
    {"index":2, "description":"setup linter and github flow", "completed":false},
    {"index":3, "description":"project 1: list structure", "completed":false},
    {"index":4, "description":"project 2: add and remove items", "completed":false},
    {"index":5, "description":"project 3: interactive list", "completed":false},
    {"index":6, "description":"freelancer projects", "completed":false},
    {"index":7, "description":"finish test part-1", "completed":false}
  ];

  test('check if add Todo function is exists', () => {
    expect(TodoCRUD.createTodo).toBeDefined();
  });

  test('check if storage is the same as the value added', () => {
    expect(TodoCRUD.createTodo('setup project with webpack').toEqual(Todos[6].description));
  });

});