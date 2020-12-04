
// TODO Завдання 2. Отримати від користувача набір чисел через кому, і відсортувати їх від найбільшого до найменшого.

let num = prompt("Введіть числа через кому?", "")
let arr = num.split(",")
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);


