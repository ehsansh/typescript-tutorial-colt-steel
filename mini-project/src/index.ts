const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;

interface Todo {
    text: string;
    completed: boolean;
}

let todos: Todo[] = [];

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
}

function createTodo(todo: Todo) {
    const newLi = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(checkBox);
    list.append(newLi);
}

form.addEventListener('submit', handleSubmit);
