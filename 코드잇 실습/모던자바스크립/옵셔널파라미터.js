// function printCatName(user) {
//   console.log(user.cat.name);
// }

// const user1 = {
//   name: 'Captain',
//   cat: {
//     name: 'Crew',
//     breed: 'British Shorthair',
//   },
// };

// printCatName(user1); // Crew

// const user2 = {
//   name: 'Young',
// };

// console.log(user2.cat); // undefined
// printCatName(user2); // TypeError: Cannot read property 'name' of undefined

// function printCatName(user) {
//   console.log(user.cat && user.cat.name);
// }

// function printCatName(user) {
//   console.log(user.cat?.name);
// }

// function printCatName(user) {
//   console.log(
//     user.cat === null || user.cat === undefined ? undefined : user.cat.name
//   );
// }

// function printCatName(user) {
// //TODO:  console.log(user.cat?.name ?? "함께 지내는 고양이가 없습니다.");
// }

// const user2 = {
//   name: "Young",
// };

// printCatName(user2); // 함께 지내는 고양이가 없습니다.

//? user.cat?.name 처럼 쓰면,

//? user.cat 이 없으면(undefined/null) 👉 에러 안 내고 결과를 undefined 로 만듭니다.
//!   ?. 는 “있으면 들어가서 보고, 없으면 그냥 멈춰!”
//!  ??란  => “null(널) 또는 undefined(언디파인드)면 대신 이걸 써라”
