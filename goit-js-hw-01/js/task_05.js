'use strict';

const china = 'Китай';
const chinaDelivPrice = 100;

const chile = 'Чили';
const chileDelivPrice = 250;

const australia = 'Австралия';
const australiaDelivPrice = 170;

const india = 'Индия';
const indiaDelivPrice = 80;

const jamaica = 'Ямайка';
const jamaicaDelivPrice = 120;

let message;

let destinationCountry = prompt(
  'Введите имя страны, куда желаете оформить доставку товара',
);

if (destinationCountry === null) {
  console.log('Отменено пользователем');
  debugger;
}

switch (destinationCountry.toLowerCase()) {
  case china.toLowerCase():
    message = `Доставка в ${china} будет стоить ${chinaDelivPrice} кредитов`;
    break;

  case chile.toLowerCase():
    message = `Доставка в ${chile} будет стоить ${chileDelivPrice} кредитов`;
    break;

  case australia.toLowerCase():
    message = `Доставка в ${australia} будет стоить ${australiaDelivPrice} кредитов`;
    break;

  case india.toLowerCase():
    message = `Доставка в ${india} будет стоить ${indiaDelivPrice} кредитов`;
    break;

  case jamaica.toLowerCase():
    message = `Доставка в ${jamaica} будет стоить ${jamaicaDelivPrice} кредитов`;
    break;

  default:
    message = `В вашей стране доставка не доступна`;
}

alert(message);
