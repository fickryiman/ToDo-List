// const TODOS = [{"index": 1, "description": "setup project with webpack", "completed": false}, {"index": 2, "description": "setup linter and github flow", "completed": false}, {"index": 3, "description": "finishing project 1: List structure", "completed": false}];
// [{"index":1,"description":"setup project with webpack","completed":false},{"index":2,"description":"setup linter and github flow","completed":false},{"index":3,"description":"finishing project 1: List structure","completed":false}]

const Todo = (index, description, completed) => ({
  index, description, completed,
});

const TodoCRUD = {
  readTodos: () => {
    const tasks = localStorage.getItem('TODOS') === null ? [] : JSON.parse(localStorage.getItem('TODOS'));
    return tasks;
  },
  createTodo: (todo) => {
    const tasks = TodoCRUD.readTodos();
    tasks.push(todo);
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  updateTodo: (index) => {
    const tasks = TodoCRUD.readTodos();
    // next what?
  },
  deleteTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo, ref) => ref !== +index);
    const indexing = tasks.map((todo) => {
      const temporaryStorage = {};
      temporaryStorage.index = todo.index > index ? todo.index - 1 : todo.index;
      temporaryStorage.description = todo.description;
      temporaryStorage.completed = todo.completed;
      return temporaryStorage;
    });

    localStorage.setItem('TODOS', JSON.stringify(indexing));
  },
};

export { Todo, TodoCRUD };
