function ran(min,max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
  }
var amount = +prompt('Введите количество примеров:');
var minInt = +prompt('Введите наименьшее число:');
var maxInt = +prompt('Введите наибольшее число:');
var sign = prompt('Какой пример хотите решить? ("+"; "-"; "*"; "/") ');

for (let i = 0; i < amount; i++) {
  let num1 = ran(minInt, maxInt);
  let num2 = ran(minInt, maxInt)
  if (sign == '+') {
    let exc = +prompt(num1 + '+' + num2 + ' = ');
    let answer = (num1 + num2) == exc ? ' Правильно!' : ' Неправильно!';
    alert(num1 + '+' + num2 + ' = ' + (num1 + num2) + '     Ваш ответ ' + exc + '  ->  ' + answer);
  }
  else if (sign == '-') {
    let exc = +prompt(num1 + '-' + num2 + ' = ');
    let answer = (num1 - num2) == exc ? ' Правильно!' : ' Неправильно!';
    alert(num1 + '-' + num2 + ' = ' + (num1 - num2) + '     Ваш ответ ' + exc + '  ->  ' + answer);
  }
  else if (sign == '*') {
    let exc = +prompt(num1 + '*' + num2 + ' = ');
    let answer = (num1 * num2) == exc ? ' Правильно!' : ' Неправильно!';
    alert(num1 + '*' + num2 + ' = ' + (num1 * num2) + '     Ваш ответ ' + exc + '  ->  ' + answer);
  }
  else if (sign == '/') {
    let exc = +prompt(num1 + '/' + num2 + ' = ');
    let answer = (num1 / num2) == exc ? ' Правильно!' : ' Неправильно!';
    alert(num1 + '/' + num2 + ' = ' + (num1 / num2) + '     Ваш ответ ' + exc + '  ->  ' + answer);
  }
  
}




