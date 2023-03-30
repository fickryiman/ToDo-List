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
  updateTodoCompletion: (index) => {
    let tasks = TodoCRUD.readTodos();

    tasks = tasks.map((task, i) => {
      const temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = task.description;
      temporaryStorage.completed = (i === index - 1) ? !task.completed : task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  updateTodoDescription: (index, event) => {
    let tasks = TodoCRUD.readTodos();

    tasks = tasks.map((task, i) => {
      const temporaryStorage = {};
      temporaryStorage.index = task.index;
      temporaryStorage.description = (i === index - 1) ? event.target.value : task.description;
      temporaryStorage.completed = task.completed;
      return temporaryStorage;
    });
    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  deleteTodo: (index) => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo, ref) => ref !== +index);
    tasks = tasks.map((task, index) => ({ ...task, index: index + 1 }));

    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
  deleteCompletedTodo: () => {
    let tasks = TodoCRUD.readTodos();
    tasks = tasks.filter((todo) => !todo.completed);

    localStorage.setItem('TODOS', JSON.stringify(tasks));
  },
};

export default TodoCRUD;