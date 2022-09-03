/**
 * Проверка на число
 * @param {number} n любое число или строка
 * @return {boolean} возвращает true если аргумент является числом, в противном случае false
 */
function isNumber(n) {
	return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

/**
 * Случайное число в диапазоне от min до max
 * @param {number} min минимальное число
 * @param {number} max максимальное число
 * @return {number} случайное число в указанном диапазоне
 */
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

// Вычислить факториал числа
function factorial(n) {
  let fact = 1;
  if (n == 0) return fact;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
let a = factorial(0);
console.log(a);
let b = factorial(3);
console.log(b);

// Сумма и произведение цифр числа
function addAndMul(num) {
  num += "";
  let add = 0, mul = 1;
  for (let i = 0; i < num.length; i++) {
    add += +num[i];
    mul *= num[i];
  }
  return {
    "Сумма": add, 
    "Произведение": mul
  }
}
let c = addAndMul(325);
console.log(c);

// Угадай случайное число от 0 до 100
// Число попыток 10
function randomNumber() {
  let number = Math.floor(Math.random()*100);
  for(let count=1; count<=10; count++) {
    let result = +prompt(`Попытка №${count}, Введите число:`);
    if(result == number) {
      return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`);
    } else if(result < number) {
      alert(`Ваше число ${result}, меньше загаданного!`);
    } else if(result > number) {
      alert(`Ваше число ${result}, больше загаданного!`);
    } else {
      return alert(`Вы не угадали число! Число: ${number}`);
    }
  }
}
randomNumber();

// Переворот числа
function reverse(number) {
  number += "";
  let reverseNumber = "";
  for(let i=number.length-1; i>=0; i--) {
    reverseNumber += number[i];
  }
  return +reverseNumber;
}
let d = reverse(3486);
console.log(d)

// Количество четных и нечетных цифр в числе
let number = function (num) {
  num += "";
  let chet = 0, nechet = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) chet++;
    else nechet++;
  }
  return {
    "Четных цифр": chet, 
    "Нечетных цифр": nechet
  }
}
let e = number(56874);
console.log(e);

// Числа Фибоначчи
let fibonachi = function (count) {
  let fib = [];
  for (let i = 0; i < count; i++) {
    if (i == 0) fib[i] = 1;
    else if (i == 1) fib[i] = 2;
    else fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
let f = fibonachi(10);
console.log(f);