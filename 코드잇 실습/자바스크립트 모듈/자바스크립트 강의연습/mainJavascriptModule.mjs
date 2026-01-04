//* 이름 바꾸기
// import { PI, add as addNumbers } from "./calculatorJavascriptModule.mjs";

// console.log(addNumbers(1, 2));

// //*named export 한꺼번에 하기

// import {
//   PI,
//   add,
//   subtract,
//   multiply,
//   divide,
// } from "./calculatorJavascriptModule.mjs";

// import {
//   PI,
//   addNumbers,
//   subtract,
//   multiply,
//   divide,
// } from "./calculatorJavascriptModule.mjs";

// console.log(addNumbers(1, 2));

import * as calculator from "./calculatorJavascriptModule.mjs";

console.log(calculator.PI);
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));
