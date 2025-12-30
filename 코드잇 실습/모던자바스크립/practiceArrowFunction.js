//TODO: Arrow function

// //? 함수 표현식
//! const getTwice = function (number) {
//!   return number * 2;
//! };

// console.log(getTwice(5));
// console.log("----------------");

// //? 함수 선언식
//! function getTwice(number) {
//!   return number * 2;
//! };

//argument 로 함수의 속성을 포함
// const myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", function () {
//   console.log("button is clicked");
// });

// //? Arrow function
//변수에 할당하는 함수
//! const getTwice = (number) => {
//!   return number * 2;
//! };

// console.log(getTwice(5));
// console.log("----------------");

// const getTwice = number => {
//   return number * 2;
// };

// console.log(getTwice(3));
// console.log("----------------");

// const getTwice1 = number => number * 2;

// console.log(getTwice1(6));
// console.log("----------------");

//?argument 로 함수의 속성을 포함
// const myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", () => {
//   console.log("button is clicked");
// });

//? 총 정리

const getTwice = (number) => number * 2; // parameter가 1개 일때는 ()는 생략 가능하다
// return문 하나만 있고 다른 내용이 없을때는 return문은 생략 가능하다
console.log(getTwice(3));
//
//
//
const sum = (a, b) => {
  const result = a + b; // return외 다른 값이 함수 범위에 있을때는 return 값을  생략하지 않는다.
  return result;
};

console.log(sum(10, 5));

//
//
//
const getCodeit = () => ({ name: 'Codeit' });

console.log(getCodeit());
