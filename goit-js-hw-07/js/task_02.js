/*

Task - 02

Напиши скрипт, который для каждого элемента массива ingredients
создаст отдельный li, после чего вставит все li за одну операцию
в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().
*/

'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const arrIngredientsItems = [];
const ingredientsPushToArr = ingredients.forEach(el => {
  const item = document.createElement('li');
  item.textContent = el;
  arrIngredientsItems.push(item);
});

ingredientsList.append(...arrIngredientsItems);
