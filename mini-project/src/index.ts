const btn = document.getElementById('btn')!;
const input = document.getElementById('todoinput')! as HTMLInputElement;

btn.addEventListener('click', function () {
    console.log(input.value);
});
