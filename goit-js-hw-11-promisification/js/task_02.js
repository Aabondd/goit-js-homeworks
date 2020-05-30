'use strict';

/*

Перепиши функцию toggleUserState() так, чтобы она не использовала
callback-функцию callback, а принимала всего два параметра allUsers 
и userName и возвращала промис.

Сейчас работает так:

toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

function toggleUserState(allUsers, userName) {
  return new Promise(resolve => {
    setTimeout(() => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );
      resolve(updatedUsers);
    });
  });
}

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
