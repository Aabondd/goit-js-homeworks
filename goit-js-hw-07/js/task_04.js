/*

Task - 04

Счетчик состоит из спана и кнопок, которые должны увеличивать
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее
значение счетчика.
Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика 
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

*/

'use strict';

let counterValue = 0;

const displayValue = document.querySelector('#value');

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', e => {
    const element = e.currentTarget;

    counterValue += 1;
    displayValue.textContent = counterValue;
  });

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', e => {
    const element = e.currentTarget;

    counterValue -= 1;
    displayValue.textContent = counterValue;
  });
