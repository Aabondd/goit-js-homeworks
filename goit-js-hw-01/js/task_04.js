'use strict';

let credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let purchasedDroidOrder = prompt('Какое количество дроидов Вы хотите купить?');

if (purchasedDroidOrder === null) {
  console.log('Отменено пользователем');
  debugger;
} else {
  totalPrice = purchasedDroidOrder * pricePerDroid;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${purchasedDroidOrder} дроидов, на счету осталось ${credits} кредитов.`,
  );
}
