/*

Task - 06

Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

'use strict';

const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputValidation);

const dataLength = Number(input.getAttribute('data-length'));

function handleInputValidation(event) {
  const inputValue = event.currentTarget.value;

  if (dataLength === inputValue.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
