import './style.css';

const tasks = [
  {
    index: 1,
    description: 'setup project with webpack',
    completed: false,
  },
  {
    index: 2,
    description: 'setup linter and github flow',
    completed: false,
  },
  {
    index: 3,
    description: 'finishing project 1: List structure',
    completed: false,
  },
];

function createToDoComponent(i) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrap-todo-list');
  // wrapper.setAttribute('data-index', `${i+1}`);
  const todoList = document.createElement('div');
  todoList.classList.add('todo-list');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('todo-checkbox');
  checkbox.setAttribute('id', `todo-${i + 1}`);
  checkbox.setAttribute('name', `todo-${i + 1}`);
  const desc = document.createElement('label');
  desc.setAttribute('for', `todo-${i + 1}`);
  desc.classList.add('todo-description');
  desc.setAttribute('data-index', `${i + 1}`);
  const aTodoOptions = document.createElement('a');
  aTodoOptions.classList.add('a-todo-options');
  const imgDots = document.createElement('img');
  imgDots.setAttribute('src', '../icons/dots1.png');
  imgDots.classList.add('todo-options');
  const todoHr = document.createElement('hr');

  aTodoOptions.appendChild(imgDots);

  todoList.appendChild(checkbox);
  todoList.appendChild(desc);
  todoList.appendChild(aTodoOptions);

  wrapper.appendChild(todoList);
  wrapper.appendChild(todoHr);

  document.querySelector('.container-todo-lists').appendChild(wrapper);
}

const iterateTasks = (arr) => {
  arr.forEach((object, index) => {
    createToDoComponent(index);

    Object.keys(object).forEach((key) => {
      if (key === 'description') {
        document.querySelector(`[data-index="${index + 1}"]`).textContent = `${object[key]}`;
      }
    });
  });
};

iterateTasks(tasks);
