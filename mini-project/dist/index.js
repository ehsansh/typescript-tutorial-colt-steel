"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    newLi.append(newTodoText);
    newLi.append(checkBox);
    list.append(newLi);
    input.value = '';
}
form.addEventListener('submit', handleSubmit);
