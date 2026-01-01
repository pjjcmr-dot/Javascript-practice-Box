//* acc 누산기 : reduce => parameter of callBack function
//* el 배열의 요소가 전달되고
//* i 배열의 인덱스가 전달되고
//* arr 배열이 전달된다

//? const number = [1, 2, 3, 4];

//? number.reduce((acc, el, i, arr) => {
//?   return nextAccValue;
//? }, initialAccValue);

//
//
//세계적인 경력의 소유자 연습문제
const data = [
  { company: "Naber", month: 3 },
  { company: "Amajohn", month: 12 },
  { company: "Coogle", month: 10 },
  { company: "Ittel", month: 6 },
  { company: "Sasung", month: 4 },
  { company: "CaCao", month: 3 },
  { company: "Microhard", month: 17 },
];

const totalCareer = data.reduce((acc, el) => acc + el.month, 0);
//? acc = “지금까지 더해진 합계(누적값)”
//? el.month = “이번에 더할 값”
//? 마지막 0 = acc가 처음 시작할 값(초기값)
//! 0은 “처음 합계는 0부터 시작할게요!” 라고 정해주는 것
//! 0에 10월 넣으면 "처음 합계는 10부터 시작할께요" 0의 자리는 처음 더하기 하는 숫자를 말하는것임
//! 예를 들어 10 + el.month = 10 + 55 = 65개월

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);
