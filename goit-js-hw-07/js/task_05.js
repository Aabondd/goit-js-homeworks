/*

Task - 05

Напиши скрипт который, при наборе текста в инпуте
input#name-input (событие input), подставляет его текущее
значение в span#name-output. Если инпут пустой,
в спане должна отображаться строка 'незнакомец'.

*/

'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  } else output.textContent = event.currentTarget.value;
}
