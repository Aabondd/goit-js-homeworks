'use strict';

/*
Напиши класс StringBuilder. На вход он получает один параметр - строку,
которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

*/

class StringBuilder {
  constructor(string = String) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  set value(newString) {
    this._value = newString;
  }
  append(str) {
    let appendString = this._value + str;
    return (this._value = appendString);
  }
  prepend(str) {
    let prependString = str + this.value;
    return (this.value = prependString);
  }

  pad(str) {
    let padString = str + this._value + str;
    return (this._value = padString);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
