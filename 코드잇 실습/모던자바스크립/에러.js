//* try catch 문
// try {
//   //? 코드
// } catch (error) {
//   //? 에러가 발생했을 때 동작할 코드
// }

// try {
//   // 실행할 코드
// } catch (err) {
//   // 에러가 발생했을 때 실행할 코드
// } finally {
//   // 항상 실행할 코드
// }

// function printMembers(...members) {
//   for (const member of members) {
//     console.log(member);
//   }
// }

// try {
//   printMembers('영훈', '윤수', '동욱');
// } catch (err) {
//   alert('에러가 발생했습니다!');
//   console.error(err);
// } finally {
//   const end = new Date();
//   const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
//   console.log(msg);
// }

// try {
//   try {
//     // 실행할 코드
//   } catch (err) {
//     // 에러가 발생했을 때 실행할 코드
//   } finally {
//     // 항상 실행할 코드
//   }
// } catch (err) {
//   // finally문에서 에러가 발생했을 때 실행할 코드
// }
//
//
// //
// const quiz1 = {
//   question: "다음 중 스승의 날과 생일이 같은 인물은 누구일까요?",
//   example: ["율곡 이이", "퇴계 이황", "세종대왕", "신사임당"],
//   answer: 3,
//   solution:
//     "훈민정음 창제 등 우리나라 문화와 교육 발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바람으로 세종대왕의 탄생일이 스승의 날로 지정되었습니다.",
// };

// const quiz2 = {
//   question: "다음 중 희노애락에 속하지 않는 것은 무엇일까요?",
//   example: ["사랑", "기쁨", "즐거움"],
//   answer: 1,
//   solution:
//     "희노애락에서의 애를 사랑 애(愛)라고 자칫 오해할 수가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.",
// };

// function printQuiz({ question, example }) {
//   // try {
//   let exMsg = "";

//   for (let i = 0; i < example.length; i++) {
//     exMsg += `${i + 1}. ${example[i]}  `;
//   }

//   console.log(question);
//   console.log(exMsg);
// //   } catch (e) {
// //     console.log(e.name);
// //     console.log(e.name);
// //   }
// // }

// // 테스트 코드
// printQuiz(quiz1);
// printQuiz(1);
// printQuiz("");
// printQuiz({});
// printQuiz(quiz2);

//FIXME:
const quiz1 = {
  question: "다음 중 스승의 날과 생일이 같은 인물은 누구일까요?",
  example: ["율곡 :이이", "퇴계 이황", "세종대왕", "신사임당"],
  answer: 3,
  solution:
    "훈민정음 창제 등 우리나라 문화와 교육발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바램으로 세종대왕의 탄신일이 스승의 날로 지정되었습니다.",
};

const quiz2 = {
  question: "다음 중 희노애락에 속하지 않는 것은 무엇일까요?",
  example: ["사랑", "기쁨", "즐거움"],
  answer: 1,
  solution:
    "희노애락에서의 애를 사랑 애(愛)라고 자칫 오해하는 경우가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.",
};

function printQuiz({ question, example }) {
  try {
    let exMsg = "";

    for (let i = 0; i < example.length; i++) {
      exMsg += `${i + 1}. ${example[i]}  `;
    }

    console.log(question);
    console.log(exMsg);
  } catch (e) {
    console.log(e.name);
    console.log(e.name);
  }
}

// 테스트 코드
printQuiz(quiz1);
printQuiz(1);
printQuiz("");
//TODO 코드에서의 역할: printQuiz 함수에 객체가 아닌 '문자열'을 전달했을 때 함수가 어떻게 반응하는지(에러가 발생하는지) 확인하기 위한 테스트 용도입니다
//
printQuiz({});
//TODO 코드에서의 역할: printQuiz 함수는 매개변수로 { question, example } 형태의 객체를 기대하고 있습니다. 하지만 속성이 하나도 없는 빈 객체를 넣었을 때, 내부에서 question이나 example을 참조하려고 하면 undefined가 나오게 되고, 이로 인해 발생하는 에러를 확인하기 위한 테스트 용도입니다.

//!대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError 입니다.
//TODO new 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있습니다.
throw new TypeError("타입 에러가 발생했습니다.");
