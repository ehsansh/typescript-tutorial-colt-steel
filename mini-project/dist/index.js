"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
function readTodos() {
    const todosText = localStorage.getItem('todos');
    if (todosText) {
        return JSON.parse(todosText);
    }
    return [];
}
let todos = readTodos();
todos.forEach(createTodo);
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
}
function createTodo(todo) {
    const newLi = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(checkBox);
    list.append(newLi);
}
form.addEventListener('submit', handleSubmit);
