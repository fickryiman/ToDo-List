"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./modules/crud.js":
/*!*************************!*\
  !*** ./modules/crud.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TodoCRUD = {

  readTodos: () => {
    const tasks = JSON.parse(localStorage.getItem('TODOS')) || [];
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCRUD);

/***/ }),

/***/ "./modules/interface.js":
/*!******************************!*\
  !*** ./modules/interface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ "./modules/crud.js");


const Interface = {
  renderTodos: () => {
    const todoListsContainer = document.querySelector('.container-todo-lists');
    const tasks = _crud_js__WEBPACK_IMPORTED_MODULE_0__["default"].readTodos();
    todoListsContainer.innerHTML = tasks.map((todo, index) => ((todo.completed) ? ` 
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}" checked>
                                <input id="todo-desc-${index + 1}" class="todo-description-false" desc-index="${index + 1}" value="${todo.description}"></input>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          ` : `
                            <div class="wrap-todo-list"">
                              <div class="todo-list"">
                                <input type="checkbox" class="todo-checkbox" id="todo-${index + 1}" name="todo-${index + 1}">
                                <input id="todo-desc-${index + 1}" class="todo-description" desc-index="${index + 1}" value="${todo.description}"></input>
                                <a class="a-todo-options">
                                  <img src="../icons/dots1.png" class="todo-options" data-index="${index}">
                                </a>
                              </div>
                              <hr>
                            </div>
                          `)).join('');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);


/***/ }),

/***/ "./modules/todo.js":
/*!*************************!*\
  !*** ./modules/todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (index, description, completed) => ({
  index, description, completed,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/refresh.png */ "./icons/refresh.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/enter.png */ "./icons/enter.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/dots.png */ "./icons/dots.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/trash.png */ "./icons/trash.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  background-color: #f6f6f6;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n.apps-title {\r\n  margin: 20px;\r\n}\r\n\r\n.container {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  width: 40vw;\r\n  margin: 1vw auto;\r\n  background: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0.8vw 1.1vw;\r\n}\r\n\r\n.a-reset-img {\r\n  align-self: center;\r\n  margin: 0.8vw 1vw;\r\n}\r\n\r\n.reset-img {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  align-content: center;\r\n  cursor: pointer;\r\n  width: 20px;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.stats {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.input-form {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#new-todo {\r\n  width: 90%;\r\n  border: none;\r\n  background: none;\r\n  margin: 0.8vw 0 0.8vw 1vw;\r\n  font-style: italic;\r\n}\r\n\r\n#new-todo:focus {\r\n  outline: none;\r\n  font-style: italic;\r\n}\r\n\r\n#submit-new-todo {\r\n  width: 5%;\r\n  height: 5%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  align-content: center;\r\n  margin: 0.2vw 0.5vw 0.2vw 0.3vw;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.container-todo-lists {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n}\r\n\r\n.todo-list-add-delete {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n  background: rgba(236, 220, 203, 0.905);\r\n}\r\n\r\n.todo-checkbox {\r\n  margin: 0.2vw 1vw;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-description {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.todo-description-edit {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: auto;\r\n  background: rgba(236, 220, 203, 0.905);\r\n}\r\n\r\n.todo-description-false {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: none;\r\n  text-decoration: line-through black;\r\n  color: rgb(241, 23, 23);\r\n}\r\n\r\n.a-todo-options {\r\n  width: 5%;\r\n  height: auto;\r\n  margin: 0.2vw 1vw;\r\n}\r\n\r\n.todo-options {\r\n  width: 100%;\r\n  height: auto;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  margin: 0.5vw 0.5vw 0 0.3vw;\r\n  padding: 0.5vw 1vw;\r\n  cursor: move;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.delete-option {\r\n  /* width: 100%; */\r\n  height: 50%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  margin: 1vw 1vw 0 0;\r\n  padding: 0.5vw 1vw 0.5vw 1vw;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-all {\r\n  padding: 1vw;\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.a-clear-all-completed {\r\n  color: rgb(133, 134, 139);\r\n  cursor: pointer;\r\n  padding: 1vw 1vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;CAGC;AACD;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mDAAuC;EACvC,4BAA4B;EAC5B,0BAA0B;EAC1B,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,0FAA0F;AAC5F;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,mDAAqC;EACrC,4BAA4B;EAC5B,0BAA0B;EAC1B,YAAY;EACZ,qBAAqB;EACrB,+BAA+B;EAC/B,aAAa;EACb,eAAe;EACf,0FAA0F;AAC5F;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mDAAoC;EACpC,4BAA4B;EAC5B,0BAA0B;EAC1B,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,0FAA0F;AAC5F;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,mDAAqC;EACrC,4BAA4B;EAC5B,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap');\r\n\r\n/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  background-color: #f6f6f6;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n.apps-title {\r\n  margin: 20px;\r\n}\r\n\r\n.container {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  width: 40vw;\r\n  margin: 1vw auto;\r\n  background: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0.8vw 1.1vw;\r\n}\r\n\r\n.a-reset-img {\r\n  align-self: center;\r\n  margin: 0.8vw 1vw;\r\n}\r\n\r\n.reset-img {\r\n  background: url('../icons/refresh.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  align-content: center;\r\n  cursor: pointer;\r\n  width: 20px;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.stats {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.input-form {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#new-todo {\r\n  width: 90%;\r\n  border: none;\r\n  background: none;\r\n  margin: 0.8vw 0 0.8vw 1vw;\r\n  font-style: italic;\r\n}\r\n\r\n#new-todo:focus {\r\n  outline: none;\r\n  font-style: italic;\r\n}\r\n\r\n#submit-new-todo {\r\n  width: 5%;\r\n  height: 5%;\r\n  background: url('../icons/enter.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  align-content: center;\r\n  margin: 0.2vw 0.5vw 0.2vw 0.3vw;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.container-todo-lists {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n}\r\n\r\n.todo-list-add-delete {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n  background: rgba(236, 220, 203, 0.905);\r\n}\r\n\r\n.todo-checkbox {\r\n  margin: 0.2vw 1vw;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-description {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.todo-description-edit {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: auto;\r\n  background: rgba(236, 220, 203, 0.905);\r\n}\r\n\r\n.todo-description-false {\r\n  width: 100%;\r\n  align-self: center;\r\n  text-align: start;\r\n  margin: 1vw 0;\r\n  outline: none;\r\n  border: none;\r\n  pointer-events: none;\r\n  text-decoration: line-through black;\r\n  color: rgb(241, 23, 23);\r\n}\r\n\r\n.a-todo-options {\r\n  width: 5%;\r\n  height: auto;\r\n  margin: 0.2vw 1vw;\r\n}\r\n\r\n.todo-options {\r\n  width: 100%;\r\n  height: auto;\r\n  background: url('../icons/dots.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  margin: 0.5vw 0.5vw 0 0.3vw;\r\n  padding: 0.5vw 1vw;\r\n  cursor: move;\r\n  filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(94deg) brightness(92%) contrast(85%);\r\n}\r\n\r\n.delete-option {\r\n  /* width: 100%; */\r\n  height: 50%;\r\n  background: url('../icons/trash.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  margin: 1vw 1vw 0 0;\r\n  padding: 0.5vw 1vw 0.5vw 1vw;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-all {\r\n  padding: 1vw;\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.a-clear-all-completed {\r\n  color: rgb(133, 134, 139);\r\n  cursor: pointer;\r\n  padding: 1vw 1vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/crud.js */ "./modules/crud.js");
/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/interface.js */ "./modules/interface.js");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/todo.js */ "./modules/todo.js");





document.addEventListener('DOMContentLoaded', _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos);

const addTodoForm = document.getElementById('form-add-todo');
const newTodo = document.getElementById('new-todo');
const todoListsContainer = document.querySelector('.container-todo-lists');

// create new todo
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = localStorage.getItem('TODOS') === null ? 1 : JSON.parse(localStorage.getItem('TODOS')).length + 1;
  const description = newTodo.value;
  const isCompleted = false;
  const todo = (0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__["default"])(index, description, isCompleted);

  if (description) {
    _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"].createTodo(todo);
    _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos();
    addTodoForm.reset();
  }
});

// update or remove todo
todoListsContainer.addEventListener('click', (event) => {
  // update completion status by clicking the checkbox
  if (event.target.matches('.todo-checkbox')) {
    if (event.target.checked) {
      event.target.nextElementSibling.classList = 'todo-description-false';
    } else {
      event.target.nextElementSibling.classList = 'todo-description';
    }
    _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodoCompletion(event.target.id.slice(-1));
    _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos();
  }

  // remove or update by clicking three dots first
  if (event.target.matches('.todo-options')) {
    event.target.classList = 'delete-option';
    event.target.parentElement.parentElement.classList = 'todo-list-add-delete';
    event.target.parentElement.previousElementSibling.classList = 'todo-description-edit';

    todoListsContainer.addEventListener('click', (event2) => {
      // update todo description
      if (event2.target.matches('.todo-description-edit')) {
        const index = event2.target.id.slice(-1);

        document.getElementById(`todo-desc-${index}`).addEventListener('change', () => {
          _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodoDescription(index, event2);
          _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos();
        });
      }

      // remove todo
      if (event2.target.matches('.delete-option')) {
        const index2 = event2.target.dataset.index;

        if (event.target.dataset.index !== event2.target.dataset.index) {
          event.target.classList = 'todo-options';
          event.target.parentElement.parentElement.classList = 'todo-list';
          event.target.parentElement.previousElementSibling.classList = 'todo-description';
        } else {
          _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(index2);
          window.location.reload();
          _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos();
        }
      }
    });
  }
});

// clear all completed (true) todo
document.querySelector('.a-clear-all-completed').addEventListener('click', () => {
  _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCompletedTodo();
  _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTodos();
});


/***/ }),

/***/ "./icons/dots.png":
/*!************************!*\
  !*** ./icons/dots.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "967d3d5894fc5013cc1c.png";

/***/ }),

/***/ "./icons/enter.png":
/*!*************************!*\
  !*** ./icons/enter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "123202e133abbcdbcafa.png";

/***/ }),

/***/ "./icons/refresh.png":
/*!***************************!*\
  !*** ./icons/refresh.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca9a0f426fb7df5ca9c6.png";

/***/ }),

/***/ "./icons/trash.png":
/*!*************************!*\
  !*** ./icons/trash.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe7d772afb3de82c1c9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVSxtRUFBbUI7QUFDN0I7QUFDQSxVQUFVLHlFQUFxQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEVBQTRCO0FBQzlCLEVBQUUseUVBQXFCO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2RvQ1JVRCA9IHtcclxuXHJcbiAgcmVhZFRvZG9zOiAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RPRE9TJykpIHx8IFtdO1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH0sXHJcbiAgY3JlYXRlVG9kbzogKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHRhc2tzID0gVG9kb0NSVUQucmVhZFRvZG9zKCk7XHJcbiAgICB0YXNrcy5wdXNoKHRvZG8pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RPRE9TJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9LFxyXG4gIHVwZGF0ZVRvZG9Db21wbGV0aW9uOiAoaW5kZXgpID0+IHtcclxuICAgIGxldCB0YXNrcyA9IFRvZG9DUlVELnJlYWRUb2RvcygpO1xyXG5cclxuICAgIHRhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBvcmFyeVN0b3JhZ2UgPSB7fTtcclxuICAgICAgdGVtcG9yYXJ5U3RvcmFnZS5pbmRleCA9IHRhc2suaW5kZXg7XHJcbiAgICAgIHRlbXBvcmFyeVN0b3JhZ2UuZGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICB0ZW1wb3JhcnlTdG9yYWdlLmNvbXBsZXRlZCA9IChpID09PSBpbmRleCAtIDEpID8gIXRhc2suY29tcGxldGVkIDogdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgIHJldHVybiB0ZW1wb3JhcnlTdG9yYWdlO1xyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVE9ET1MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlVG9kb0Rlc2NyaXB0aW9uOiAoaW5kZXgsIGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSBUb2RvQ1JVRC5yZWFkVG9kb3MoKTtcclxuXHJcbiAgICB0YXNrcyA9IHRhc2tzLm1hcCgodGFzaywgaSkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wb3JhcnlTdG9yYWdlID0ge307XHJcbiAgICAgIHRlbXBvcmFyeVN0b3JhZ2UuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgICB0ZW1wb3JhcnlTdG9yYWdlLmRlc2NyaXB0aW9uID0gKGkgPT09IGluZGV4IC0gMSkgPyBldmVudC50YXJnZXQudmFsdWUgOiB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICB0ZW1wb3JhcnlTdG9yYWdlLmNvbXBsZXRlZCA9IHRhc2suY29tcGxldGVkO1xyXG4gICAgICByZXR1cm4gdGVtcG9yYXJ5U3RvcmFnZTtcclxuICAgIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RPRE9TJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9LFxyXG4gIGRlbGV0ZVRvZG86IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gVG9kb0NSVUQucmVhZFRvZG9zKCk7XHJcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodG9kbywgcmVmKSA9PiByZWYgIT09ICtpbmRleCk7XHJcbiAgICB0YXNrcyA9IHRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IC4uLnRhc2ssIGluZGV4OiBpbmRleCArIDEgfSkpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUT0RPUycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgfSxcclxuICBkZWxldGVDb21wbGV0ZWRUb2RvOiAoKSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSBUb2RvQ1JVRC5yZWFkVG9kb3MoKTtcclxuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZWQpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUT0RPUycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9DUlVEOyIsImltcG9ydCBUb2RvQ1JVRCBmcm9tICcuL2NydWQuanMnO1xyXG5cclxuY29uc3QgSW50ZXJmYWNlID0ge1xyXG4gIHJlbmRlclRvZG9zOiAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvTGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRvZG8tbGlzdHMnKTtcclxuICAgIGNvbnN0IHRhc2tzID0gVG9kb0NSVUQucmVhZFRvZG9zKCk7XHJcbiAgICB0b2RvTGlzdHNDb250YWluZXIuaW5uZXJIVE1MID0gdGFza3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKCh0b2RvLmNvbXBsZXRlZCkgPyBgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXAtdG9kby1saXN0XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbGlzdFwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9kby1jaGVja2JveFwiIGlkPVwidG9kby0ke2luZGV4ICsgMX1cIiBuYW1lPVwidG9kby0ke2luZGV4ICsgMX1cIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZGVzYy0ke2luZGV4ICsgMX1cIiBjbGFzcz1cInRvZG8tZGVzY3JpcHRpb24tZmFsc2VcIiBkZXNjLWluZGV4PVwiJHtpbmRleCArIDF9XCIgdmFsdWU9XCIke3RvZG8uZGVzY3JpcHRpb259XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImEtdG9kby1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ljb25zL2RvdHMxLnBuZ1wiIGNsYXNzPVwidG9kby1vcHRpb25zXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwLXRvZG8tbGlzdFwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWxpc3RcIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tY2hlY2tib3hcIiBpZD1cInRvZG8tJHtpbmRleCArIDF9XCIgbmFtZT1cInRvZG8tJHtpbmRleCArIDF9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby1kZXNjLSR7aW5kZXggKyAxfVwiIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiIGRlc2MtaW5kZXg9XCIke2luZGV4ICsgMX1cIiB2YWx1ZT1cIiR7dG9kby5kZXNjcmlwdGlvbn1cIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYS10b2RvLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaWNvbnMvZG90czEucG5nXCIgY2xhc3M9XCJ0b2RvLW9wdGlvbnNcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgKSkuam9pbignJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZTtcclxuIiwiY29uc3QgVG9kbyA9IChpbmRleCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCkgPT4gKHtcclxuICBpbmRleCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pY29ucy9yZWZyZXNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ljb25zL2VudGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ljb25zL2RvdHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaWNvbnMvdHJhc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2FuczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcclxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHBzLXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgbWFyZ2luOiAxdncgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDAuOHZ3IDEuMXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uYS1yZXNldC1pbWcge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwLjh2dyAxdnc7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1pbWcge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRvZG8ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBtYXJnaW46IDAuOHZ3IDAgMC44dncgMXZ3O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRvZG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctdG9kbyB7XFxyXFxuICB3aWR0aDogNSU7XFxyXFxuICBoZWlnaHQ6IDUlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC4ydncgMC41dncgMC4ydncgMC4zdnc7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXRvZG8tbGlzdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdC1hZGQtZGVsZXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjIwLCAyMDMsIDAuOTA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2hlY2tib3gge1xcclxcbiAgbWFyZ2luOiAwLjJ2dyAxdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBtYXJnaW46IDF2dyAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbi1lZGl0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBtYXJnaW46IDF2dyAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDIyMCwgMjAzLCAwLjkwNSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uLWZhbHNlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBtYXJnaW46IDF2dyAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2s7XFxyXFxuICBjb2xvcjogcmdiKDI0MSwgMjMsIDIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmEtdG9kby1vcHRpb25zIHtcXHJcXG4gIHdpZHRoOiA1JTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMC4ydncgMXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1vcHRpb25zIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMC41dncgMC41dncgMCAwLjN2dztcXHJcXG4gIHBhZGRpbmc6IDAuNXZ3IDF2dztcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1vcHRpb24ge1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IDF2dyAxdncgMCAwO1xcclxcbiAgcGFkZGluZzogMC41dncgMXZ3IDAuNXZ3IDF2dztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWFsbCB7XFxyXFxuICBwYWRkaW5nOiAxdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbn1cXHJcXG5cXHJcXG4uYS1jbGVhci1hbGwtY29tcGxldGVkIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTMzLCAxMzQsIDEzOSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxdncgMXZ3O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Q0FHQztBQUNEOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbURBQXVDO0VBQ3ZDLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLDBGQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixtREFBcUM7RUFDckMsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDBGQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1EQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwRkFBMEY7QUFDNUY7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1EQUFxQztFQUNyQyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qXFxyXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcclxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHBzLXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgbWFyZ2luOiAxdncgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDAuOHZ3IDEuMXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uYS1yZXNldC1pbWcge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwLjh2dyAxdnc7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1pbWcge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pY29ucy9yZWZyZXNoLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIG1hcmdpbjogMC44dncgMCAwLjh2dyAxdnc7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbzpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy10b2RvIHtcXHJcXG4gIHdpZHRoOiA1JTtcXHJcXG4gIGhlaWdodDogNSU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ljb25zL2VudGVyLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwLjJ2dyAwLjV2dyAwLjJ2dyAwLjN2dztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItdG9kby1saXN0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0LWFkZC1kZWxldGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMjAsIDIwMywgMC45MDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveCB7XFxyXFxuICBtYXJnaW46IDAuMnZ3IDF2dztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIG1hcmdpbjogMXZ3IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uLWVkaXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIG1hcmdpbjogMXZ3IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjIwLCAyMDMsIDAuOTA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24tZmFsc2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIG1hcmdpbjogMXZ3IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjaztcXHJcXG4gIGNvbG9yOiByZ2IoMjQxLCAyMywgMjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYS10b2RvLW9wdGlvbnMge1xcclxcbiAgd2lkdGg6IDUlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwLjJ2dyAxdnc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW9wdGlvbnMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ljb25zL2RvdHMucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IDAuNXZ3IDAuNXZ3IDAgMC4zdnc7XFxyXFxuICBwYWRkaW5nOiAwLjV2dyAxdnc7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtb3B0aW9uIHtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ljb25zL3RyYXNoLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiAxdncgMXZ3IDAgMDtcXHJcXG4gIHBhZGRpbmc6IDAuNXZ3IDF2dyAwLjV2dyAxdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1hbGwge1xcclxcbiAgcGFkZGluZzogMXZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuXFxyXFxuLmEtY2xlYXItYWxsLWNvbXBsZXRlZCB7XFxyXFxuICBjb2xvcjogcmdiKDEzMywgMTM0LCAxMzkpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMXZ3IDF2dztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRvZG9DUlVEIGZyb20gJy4uL21vZHVsZXMvY3J1ZC5qcyc7XHJcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi4vbW9kdWxlcy9pbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi9tb2R1bGVzL3RvZG8uanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEludGVyZmFjZS5yZW5kZXJUb2Rvcyk7XHJcblxyXG5jb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFkZC10b2RvJyk7XHJcbmNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8nKTtcclxuY29uc3QgdG9kb0xpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci10b2RvLWxpc3RzJyk7XHJcblxyXG4vLyBjcmVhdGUgbmV3IHRvZG9cclxuYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVE9ET1MnKSA9PT0gbnVsbCA/IDEgOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUT0RPUycpKS5sZW5ndGggKyAxO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3VG9kby52YWx1ZTtcclxuICBjb25zdCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IHRvZG8gPSBUb2RvKGluZGV4LCBkZXNjcmlwdGlvbiwgaXNDb21wbGV0ZWQpO1xyXG5cclxuICBpZiAoZGVzY3JpcHRpb24pIHtcclxuICAgIFRvZG9DUlVELmNyZWF0ZVRvZG8odG9kbyk7XHJcbiAgICBJbnRlcmZhY2UucmVuZGVyVG9kb3MoKTtcclxuICAgIGFkZFRvZG9Gb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHVwZGF0ZSBvciByZW1vdmUgdG9kb1xyXG50b2RvTGlzdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAvLyB1cGRhdGUgY29tcGxldGlvbiBzdGF0dXMgYnkgY2xpY2tpbmcgdGhlIGNoZWNrYm94XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kby1jaGVja2JveCcpKSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QgPSAndG9kby1kZXNjcmlwdGlvbi1mYWxzZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdCA9ICd0b2RvLWRlc2NyaXB0aW9uJztcclxuICAgIH1cclxuICAgIFRvZG9DUlVELnVwZGF0ZVRvZG9Db21wbGV0aW9uKGV2ZW50LnRhcmdldC5pZC5zbGljZSgtMSkpO1xyXG4gICAgSW50ZXJmYWNlLnJlbmRlclRvZG9zKCk7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgb3IgdXBkYXRlIGJ5IGNsaWNraW5nIHRocmVlIGRvdHMgZmlyc3RcclxuICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2RvLW9wdGlvbnMnKSkge1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCA9ICdkZWxldGUtb3B0aW9uJztcclxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0ID0gJ3RvZG8tbGlzdC1hZGQtZGVsZXRlJztcclxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0ID0gJ3RvZG8tZGVzY3JpcHRpb24tZWRpdCc7XHJcblxyXG4gICAgdG9kb0xpc3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50MikgPT4ge1xyXG4gICAgICAvLyB1cGRhdGUgdG9kbyBkZXNjcmlwdGlvblxyXG4gICAgICBpZiAoZXZlbnQyLnRhcmdldC5tYXRjaGVzKCcudG9kby1kZXNjcmlwdGlvbi1lZGl0JykpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50Mi50YXJnZXQuaWQuc2xpY2UoLTEpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby1kZXNjLSR7aW5kZXh9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgVG9kb0NSVUQudXBkYXRlVG9kb0Rlc2NyaXB0aW9uKGluZGV4LCBldmVudDIpO1xyXG4gICAgICAgICAgSW50ZXJmYWNlLnJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlbW92ZSB0b2RvXHJcbiAgICAgIGlmIChldmVudDIudGFyZ2V0Lm1hdGNoZXMoJy5kZWxldGUtb3B0aW9uJykpIHtcclxuICAgICAgICBjb25zdCBpbmRleDIgPSBldmVudDIudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCAhPT0gZXZlbnQyLnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0ID0gJ3RvZG8tb3B0aW9ucyc7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdCA9ICd0b2RvLWxpc3QnO1xyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QgPSAndG9kby1kZXNjcmlwdGlvbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRvZG9DUlVELmRlbGV0ZVRvZG8oaW5kZXgyKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIEludGVyZmFjZS5yZW5kZXJUb2RvcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGNsZWFyIGFsbCBjb21wbGV0ZWQgKHRydWUpIHRvZG9cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtY2xlYXItYWxsLWNvbXBsZXRlZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIFRvZG9DUlVELmRlbGV0ZUNvbXBsZXRlZFRvZG8oKTtcclxuICBJbnRlcmZhY2UucmVuZGVyVG9kb3MoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==