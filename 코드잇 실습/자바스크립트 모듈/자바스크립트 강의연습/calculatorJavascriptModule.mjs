// //* 이름 바꾸기
// export const PI = 3.14;

// export function add(a, b) {
//   return a + b;
// //*named export 한꺼번에 하기

// const PI = 3.14;

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// // export { PI, add, subtract, multiply, divide }; // 객체로 묶어서 export 한번에 진행

// //...
// export { PI, add as addNumbers, subtract, multiply, divide };

// const calculator = { PI, add, subtract, multiply, divide };

// export default calculator;

//* named import 한꺼번에 하기

const PI = 3.14;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export { PI, add, subtract, multiply, divide };
