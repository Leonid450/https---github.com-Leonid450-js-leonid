// alert("Hello World");
// console.log();
// let userName = prompt("введите свое имя");
// let huy = alert("Привет," + userName);
// const myFirstFunction = function () {
//   console.log("start function");
// };
// myFirstFunction();
// let number1 = 5;
// let number2 = 10;
// let sumNumber = number1 + number2;
// console.log(sumNumber);
// let number3 = sumNumber - 50;
// console.log(number3);
// number4 = number3 * sumNumber;
// console.log(number4);
// number5 = number4 / 2.687;
// console.log(number5);
// number6 = number5 % 2.687;
// console.log(number6);
// console.log(number6 > number5);

// let num = 5;
// num += 10;
// console.log(num);
// num *= 2;
// console.log(num);
// num -= 4;
// console.log(num);
// num /= 6;
// console.log(num);

// homework conditions if
let num1 = +prompt("Введіть перше число"),
  num2 = +prompt("Введіть другее число");
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
// ЦЕ Ж, ТІЛЬКИ З ПЕРЕВІРКОЮ
const bigNumber = function () {
  let num1 = +prompt("Введіть перше число");
  if (num1 !== num1 || typeof num1 !== "number") {
    return null;
  }
  let num2 = +prompt("Введіть друге число");
  if (num2 !== num2 || typeof num2 !== "number") {
    return null;
  }
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

// Вік;
let userAge = +prompt("Введіть ваш вік");
if (userAge >= 18) {
  console.log(adult);
} else {
  console.log(child);
}

// калькулятор
let num1 = +prompt("Введіть перше число"),
  num2 = +prompt("Введіть другее число"),
  oper = +prompt(
    "Введіть оператор: 1-додавання, 2-віднімання, 3-ділення, 4-множення"
  );

if (oper === 1) {
  alert(num1 + num2);
} else if (oper === 2) {
  alert(num1 - num2);
} else if (oper === 3) {
  alert(num1 / num2);
} else if (oper === 4) {
  alert(num1 * num2);
} else {
  alert("Невірне значення");
}
