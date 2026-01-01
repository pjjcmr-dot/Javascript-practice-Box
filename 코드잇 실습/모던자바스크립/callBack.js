//? find
// const device = ["마우스", "키보드", "모니터"];

// const result = device.find(function (item) {
//   return item === "키보드";
// });

// console.log(result);
// // 출력 결과: 키보드

// //todo callBack =>
// function (item) {
//   return item === "키보드";
// }

// //* device.find(   검사함수(콜백)   )

//! 큰 함수(예: map, find, setTimeout)
//!    └─ (여기에) 콜백함수(=>)를 넣어둠
//!           └─ 큰 함수가 필요할 때 실행함

// const numbers = [1, 2, 3];

// const doubled = numbers.map((n) => n * 2);

// console.log(doubled);
// 출력 결과: [2, 4, 6]
//
//
// const device = ["마우스", "키보드", "모니터"];

// const found = device.find((item) => item === "키보드");

// console.log(found);
// // 출력 결과: 키보드
//
//
//
console.log("시작!");

setTimeout(() => console.log("0.5초 뒤 실행!"), 500);

console.log("끝!");
/*
출력 결과:
시작!
끝!
(0.5초 후)
0.5초 뒤 실행!
*/

// const nums = [1, 2, 3];

// const result = nums.find((n) => {
//   n === 2; // return이 없어서 항상 undefined 취급
// });

// console.log(result);
// // 출력 결과: undefined

// const result2 = nums.find((n) => {
//   return n === 2;
// });

// console.log(result2);
// 출력 결과: 2
