// //todo 반복문이 아니라 추가하는것
// function firstWords() {
//   let word = "";
//   for (const arg of arguments) {
//     //? 배열에서 우선순위를 고르는 작업

//     word += arg[0]; //? 추가부분
//   }
//   console.log(word);
// }

// firstWords("나만", "없어", "고양이");
// firstWords("아니", "바나나말고", "라면먹어");
// firstWords("만두", "반으로", "잘라먹네", "부지런하다");
// firstWords("결국", "자바스크립트가", "해피한", "지름길");
// firstWords("빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색");

// function first(a, b) {
//   return a * b;
// }

// console.log(first(3, 4));

// //* rest parameter
// function printAguments(...args) {
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arguments);
// console.log(arguments.length);
// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log(arguments[2]);

//   let word = '';
//   for (const arg of args) {
//     word += arg[0];
//   }
//   console.log(word);
//   console.log('-----------');
// }

// printAguments('uqw', 'afv', 'qwqwqw');
// printAguments('uwww', 'aqqqqq');

// function firstWords() {
//   let word = '';

//   for (const arg of arguments) {
//   word += arg[0]; // 각 단어의 첫 글자를 word에 누적!
// }

//   console.log(word);
// }

// firstWords('나만', '없어', '고양이');
// firstWords('아니', '바나나말고', '라면먹어');
// firstWords('만두', '반으로', '잘라먹네', '부지런하다');
// firstWords('결국', '자바스크립트가', '해피한', '지름길');
// firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');

// let rest = ["치킨", "피자", "햄버거"];

// let firstFood = rest.shift();

// console.log(firstFood);
// console.log(rest);

//* Arrow function
// //?변수에 할당하는 함수 = 함수 표현식
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

// //? Arrow function => 화살표 함수로 변환
//변수에 할당하는 함수
//! const getTwice = (number) => {
//!   return number * 2;
//! };

// console.log(getTwice(5));
// console.log("----------------");

//! const getTwice = (number) => number * 2;

// console.log(getTwice(6));
// console.log("----------------");

// //?argument 로 함수의 속성을 포함, 콜백함수
// const myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", () => {
//   console.log("button is clicked");
// });

// let x1 = 3;

// if (x1 < 5) {
//   console.log('x는 5보다 작다');
// } else {
//   console.log('x는 5와 같거나 크다');
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// //! 조건문과 반복문은 값으로 평가 받지 않고 오로지 문장으로 평가 받는다.
// let x;
// x = 3;

// console.log(if (x < 5) {
//   console.log('x는 5보다 작다');
// } else {
//   console.log('x는 5보다 크다');
// });

// const someloop = for (let i = 0; i < 5; i++) {
//   console.log(i);
// };
//
//


