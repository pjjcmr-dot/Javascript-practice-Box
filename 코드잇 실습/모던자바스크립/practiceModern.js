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

// //* rest parameter2
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

// //* rest parameter3
// let rest = ['치킨', '피자', '햄버거'];

// let firstFood = rest.shift();

// console.log(firstFood);
// console.log(rest);

//* rest parameter4, TODO: rest.shift() 앞부분에 변수를 정해주지 않았을 경우
function ignoreFirst(...rest) {
  rest.shift();

  for (const el of rest) {
    console.log(el);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
