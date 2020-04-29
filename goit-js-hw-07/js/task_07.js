/*

Task - 07


Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.
*/

'use strict';

const rangeControl = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

const handleTextChange = event => {
  output.style.fontSize = `${event.currentTarget.value}px`;
};

rangeControl.addEventListener('input', handleTextChange);
