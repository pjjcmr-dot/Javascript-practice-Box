//* find Method
// const nameInput = document.querySelector("#user-name");
// const phoneInput = document.querySelector("#phone-number");
// const findBtn = document.querySelector("#find");

// const data = [
//   {
//     userName: "막대기",
//     phoneNumber: "01012341111",
//     email: "stick@go_do_it.kr",
//   },
//   { userName: "young", phoneNumber: "01012342222", email: "kang@go_do_it.kr" },
//   {
//     userName: "코린이",
//     phoneNumber: "01012343333",
//     email: "corin2@go_do_it.kr",
//   },
//   {
//     userName: "captain",
//     phoneNumber: "01012344444",
//     email: "crew@go_do_it.kr",
//   },
//   { userName: "YH", phoneNumber: "01012345555", email: "whyH@go_do_it.kr" },
//   {
//     userName: "망고쥬스",
//     phoneNumber: "01012346666",
//     email: "drinkMango@go_do_it.kr",
//   },
//   {
//     userName: "nemoming",
//     phoneNumber: "01012347777",
//     email: "ractAngle@go_do_it.kr",
//   },
//   {
//     userName: "강그루",
//     phoneNumber: "01012348888",
//     email: "riverTree@go_do_it.kr",
//   },
//   {
//     userName: "개룩발룩",
//     phoneNumber: "01012349999",
//     email: "checkShirts@go_do_it.kr",
//   },
//   {
//     userName: "오렌지쥬스",
//     phoneNumber: "01012341010",
//     email: "delmonte@go_do_it.kr",
//   },
// ];

// function findEmail() {
//   const nameValue = nameInput.value;
//   const phoneValue = phoneInput.value;

//   // 여기에 코드를 작성해 주세요.
//   const user = data.find(
//     (el) => nameValue === el.userName && phoneValue === el.phoneNumber
//   );

//   const message = user
//     ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
//     : "이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.";

//   alert(message);
// }

// findBtn.addEventListener("click", findEmail);
//
//
//*filter Method
const seoul = [
  "김영훈",
  "김윤수",
  "김동욱",
  "강대위",
  "김영준",
  "김규식",
  "김태호",
  "김효신",
  "손효준",
  "김현승",
  "김재하",
  "김유나",
  "김재훈",
  "김혜선",
  "김민환",
  "김규리",
  "김소원",
  "김우재",
  "최영준",
  "김태순",
  "김종훈",
  "김성환",
  "김승용",
  "김지혜",
  "이승욱",
  "김도현",
  "김승규",
  "윤하은",
  "김유진",
  "김정민",
  "김혜정",
  "김예진",
  "김여진",
  "김성희",
  "김혜수",
  "김인선",
  "김상필",
  "김혜진",
  "서상원",
  "김상혜",
  "김민기",
  "김그루",
  "김희지",
];

const notKims = seoul.filter((name) => name[0] !== "김");
// 테스트 코드
console.log(notKims);
//
//
