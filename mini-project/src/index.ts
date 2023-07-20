const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;

interface Todo {
    text: string;
    completed: boolean;
}

function readTodos(): Todo[] {
    const todosText = localStorage.getItem('todos');
    if (todosText) {
        return JSON.parse(todosText);
    }
    return [];
}

let todos: Todo[] = readTodos();
todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodo(todo: Todo) {
    const newLi = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.completed;
    checkBox.addEventListener('change', function () {
        todo.completed = checkBox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkBox);
    list.append(newLi);
}

form.addEventListener('submit', handleSubmit);
