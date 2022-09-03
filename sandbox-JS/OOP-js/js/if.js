// let age = prompt("Введите ваш возраст?")
// if(age != null) {
//   alert("Мой возраст " + age)
// } else {
//   alert("Вы нажали отмена")
// }

// if(confirm("Удалить ваш аккаунт?")) {
//   alert("Удалено")
// } else {
//   alert("Отменено")
// }

// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : alert("Отменено")

let age = prompt("Введите ваш возраст?")
// if(age < 18) {
//   alert("Мой возраст меньше 18")
// } else if(age > 18) {
//   alert("Мне больше 18 лет")
// } else {
//   alert("Мне 18 лет")
// }

switch(true) {
  case age > 18:
    alert("Мне больше 18 лет")
    break;
  case age < 18 && age > 0:
    alert("Мне меньше 18 лет")
    break;
  case age == 18:
    alert("Мне 18 лет")
    break;
  default:
    alert("Не правильный возраст")
}