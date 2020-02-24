'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const enterPassword = prompt('Please enter your password');

if (ADMIN_PASSWORD === enterPassword) {
  message = 'Добро пожаловать!';
} else if (enterPassword === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD !== enterPassword) {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
