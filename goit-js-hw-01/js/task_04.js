'use strict';

let credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let purchasedDroidOrder = prompt('Какое количество дроидов Вы хотите купить?');

totalPrice = purchasedDroidOrder * pricePerDroid;

let currentCredits = credits - totalPrice;

if (purchasedDroidOrder === null) {
  console.log('Отменено пользователем');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${purchasedDroidOrder} дроидов, на счету осталось ${currentCredits} кредитов.`,
  );
}
