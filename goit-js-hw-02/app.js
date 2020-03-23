'use strict';

//-------------------- 1 --------------------------------

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`'${i + 1} - ${array[i]}'`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//---------------------- 2 ----------------------------

const calculateEngravingPrice = function(message, pricePerWord) {
  // твой код
  let messageArray = message.split(' ');

  const totalPrice = messageArray.length * pricePerWord;

  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);

//--------------------- 3 ---------------------

const findLongestWord = function(string) {
  const stringArray = string.split(' ');
  let longestWord = stringArray[0];

  for (let i = 1; i < stringArray.length; i += 1) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }
  return longestWord;
  console.log(longestWord);
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

//---------------------- 4 ------------------------------

const formatString = function(string) {
  let stringArray = string.split('');
  let editedStringArray;
  let displayedString;

  if (stringArray.length > 40) {
    editedStringArray = stringArray.slice(0, 39);
    editedStringArray.push('...');
    displayedString = editedStringArray.join('');
  } else {
    displayedString = string;
  }
  return console.log(displayedString);
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

//------------------------ 5 --------------------------

const checkForSpam = function(message) {
  const firstSpamWord = 'sale';
  const secondSpamWord = 'spam';
  let onlyLetters = message.replace(/\s+/g, '+');
  onlyLetters = onlyLetters.replace(/[^a-zA-Z0-9+]/g, '');
  // console.log(onlyLetters);

  const comparedMessageArray = onlyLetters.toLowerCase().split('+');

  // console.log(comparedMessageArray);

  if (
    comparedMessageArray.includes(firstSpamWord) ||
    comparedMessageArray.includes(secondSpamWord)
  ) {
    console.log('true');
  } else {
    console.log('false');
  }
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));

//----------------------- 6 -------------------------

let input;
const numbers = [];
let total = 0;
let arrayEntries;

do {
  input = prompt('Введите число');

  arrayEntries = Number(input);

  if (!input) {
    alert('Отменён пользователем');
  } else if (!arrayEntries) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(arrayEntries);
  }
} while (input !== null);

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }

for (let number of numbers) {
  total = number + total;
}

console.log(`Общая сумма чисел равна ${total}`);
