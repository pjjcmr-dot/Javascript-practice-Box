//todo 모던한 프로퍼티 표기법

//* const user = {
//*   title = 'codeit';
//*   brith = 2017;
//*   job = '프로그래밍 강사';
//* }

//* const title = "codeit";
//* const brith = 2017;
//* onst job = "프로그래밍 강사";

//! title: title; => title,
//! getFullName: getFullName,  => getFullName,
//! getFullName: function () => getFullName()

// console.log(user1);

// const user = {
//   [표현식]: 값,
// };

// const user = {
//   ['code' + 'it']: 'value',
// };

// console.log(user);

// const propertyName = 'birth';
// const getJob = () => 'job';

// const codeit = {
//   ["토픽" + "이름"]: "모던 자바스크립트",
//   [propertyName]: 2017,
//   [getJob()]: '프로그래밍 강사'
// };

// console.log(codeit);

//? 축약사용
// function sayHi() {
//   console.log('Hi!');
// }

// const title = 'codeit';
// const birth = 2017;
// const job = '프로그래밍 강사';

// const user = {
//   title,
//   birth,
//   job,
//   sayHi,
// };

// console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}
//? function key word 생략
// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName()); // Tess Jang

//? 대괄호 표기법
// const propertyName = "birth";
// const getJob = () => "job";

// const codeit = {
//   ["topic" + "name"]: "Modern JavaScript",
//   [propertyName]: 2017,
//   [getJob()]: "프로그래밍 강사",
// };

// console.log(codeit);
