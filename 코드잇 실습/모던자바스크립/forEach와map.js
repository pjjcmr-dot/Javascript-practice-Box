//* forEach문
//? 할일 정리 실습
// function createTodo(value, order) {
//   const list = document.querySelector(".list"); // 구현되지 않음
//   const node = document.createElement("li");
//   if (value.isClear) {
//     node.classList.add("item", "done");
//   } else {
//     node.classList.add("item");
//   }
//   node.textContent = `${order}. ${value.title}`;
//   list.appendChild(node);
// }

// const data = [
//   {
//     title: "자바스크립트 공부하기",
//     isClear: true,
//   },
//   {
//     title: "쓰레기 분리수거",
//     isClear: false,
//   },
//   {
//     title: "고양이 밥주기",
//     isClear: true,
//   },
//   {
//     title: "독서하기",
//     isClear: false,
//   },
//   {
//     title: "영어 공부하기",
//     isClear: false,
//   },
// ];

// data.forEach((value, i) => {
//   createTodo(value, i + 1);
// });

//? 셜록 훈즈 실습
const quiz = ["YUMMY", "COUNT", "ABUSE", "SOUND", "SWING"];

// const answer = quiz.map((word, index) => {
//   // 각 단어에서 index 번째 글자를 추출해서 반환
// });

const answer = quiz.map((word, index) => word[index]); //word[index]가 첫머리 따기
console.log(answer);
