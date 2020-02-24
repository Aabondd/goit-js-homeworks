'use strict';

let input;

let total = 0;

do {
  input = prompt('Введите любое число');

  total += Number(input);
} while (input !== null);

console.log(total);
