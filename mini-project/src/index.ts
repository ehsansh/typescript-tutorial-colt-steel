const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;

const form = document.querySelector('form')!;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('submited');
}

form.addEventListener('submit', handleSubmit);
