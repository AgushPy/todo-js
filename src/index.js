import './styles.css';

import { Todo, TodoList} from './class';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(todo  => crearTodoHtml(todo) );

// const newTodo = new Todo('Aprender Javascript');

// todoList.nuevoTodo( newTodo  );

// console.log( 'todos', todoList.todos );