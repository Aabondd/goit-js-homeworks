'use strict';

/*
task-02

Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств.

*/

const countProps = function(obj) {
  const properties = Object.keys(obj);
  const propertiesCount = properties.length;

  return console.log(`Количество свойств - ${propertiesCount}`);
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
