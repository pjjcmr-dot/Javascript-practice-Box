// //* Spread function

// //? Spread 구문은 하나의 값을 각각의 개별값으로 펼치는 방식
// const numbers = [1, 2, 3];
// console.log(numbers);
// console.log(...numbers);
// console.log(...numbers);
// console.log(1, 2, 3);

// //? rest parameter는 여러개의 argument를 하나의 parameter로 묶는 방식
// const sumAll = (...args) => {  //하나의 파라미터
//   let sum = 0;
//   for (arg of args) {
//     sum += arg;
//   }
//   return sum;
// };

// console.log(sumAll(1, 2, 3, 4)); //여러개의 아큐먼트
// // //
// //
// const webPublishing = ["HTML", "CSS"];
// const interactiveWeb = webPublishing;

// interactiveWeb.push("JavaScript");

// console.log(webPublishing);
// console.log(interactiveWeb);
//
//
// const webPublishing = ["HTML", "CSS"];
// const interactiveWeb = webPublishing.slice();

// interactiveWeb.push("JavaScript");

// console.log(webPublishing);
// console.log(interactiveWeb);

//! webPublishing.slice();
//! [...webPublishing];
//todo  => [ 'HTML', 'CSS' ] 으로 출력됨
//! interactiveWeb = webPublishing;
// //todo  => [ 'HTML', 'CSS', 'JavaScript'] 으로 출력됨
// //? 윈도우 전역개체로 인식되어서 동일하게 적용됨 인터렉티브웹과
// const webPublishing = ["HTML", "CSS"];
// const interactiveWeb = [...webPublishing];

// interactiveWeb.push("JavaScript");

// console.log(webPublishing);
// console.log(interactiveWeb);

// // 스프레드 구문 활용
// const webPublishing = ["HTML", "CSS"];
// const interactiveWeb = [...webPublishing, "JavaScript"];

// // interactiveWeb.push("JavaScript"); <= 이부분이 삭제되고 스프레드 구문으로 참조함

// console.log(webPublishing);
// console.log(interactiveWeb);

//Spread구문 합계 계산

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr4 = arr1.concat(arr2);
// console.log(arr4);

// const arr5 = arr1 + arr2;
// console.log(arr5);
// [1] 하나의 값은 오류가 발생한다
// 객체 속성으로 스프레드 구문을 사용하면 객체의 속성으로 표현된다
