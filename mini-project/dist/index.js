"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
btn.addEventListener('click', function () {
    console.log(input.value);
});
