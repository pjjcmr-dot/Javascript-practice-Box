// console.log("1");

// setTimeout(() => console.log("2"), 0);

// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

// //
// //
// //

// console.log("1");

// setTimeout(() => console.log("2"), 1000);

// // 1초 이상 걸리는 작업들

// console.log("1");

// setTimeout(() => console.log("2"), 1001);

// setTimeout(() => console.log("3"), 1000);

// console.log("4");

// ...

// setTimeout(callback, delay);

// // ...

// // ...

// asyncFunction(callback, ...);

// // ...

// console.log("Start");

// // setInterval(callback, interval): interval 단위는 밀리초입니다.
// setInterval(() => console.log("2초가 지났습니다"), 2000);

// console.log("End");
// console.log("Start");

// const intervalID = setInterval(() => console.log("2초가 지났습니다"), 2000);

// // 7초 후에 setInterval() 해제
// setTimeout(() => clearInterval(intervalID), 7000);

// console.log("End");

// const btn = document.querySelector('.my-btn');

// btn.addEventListener('click', () => console.log('button clicked!'));

// // ...

// function PostList() {
//   // ...

//   useEffect(() => console.log("render finished!"), []);

//   return (
//     <div className="post-list">
//       <div className="post-item">...</div>
//       <div className="post-item">...</div>
//       <div className="post-item">...</div>
//       ...
//     </div>
//   );
// }

// app.get("/hello", (req, res) => {
//   res.send("Success!");
// });

// // // ...

// //function 키워드로 선언한 함수를 콜백으로 사용(콜백 파라미터 없음)
// function printMessage(func) {
//   console.log("Printing message...");
//   func();
// }

// function sayHello() {
//   console.log("Hello World!");
// }

// printMessage(sayHello);

// //Arrow Function을 콜백으로 사용(콜백 파라미터 없음)
// function printMessage(func) {
//   console.log("Printing message...");
//   func();
// }

// printMessage(() => console.log("Hello World!"));

//function 키워드로 선언한 함수를 콜백으로 사용(콜백 파라미터 있음)
// function printMessageWithParams(func, name) {
//   console.log("Printing message...");
//   func(name);
// }

// function sayHello(name) {
//   console.log(`Hello ${name}!`);
// }

// printMessageWithParams(sayHello, "Bob");

//Arrow Function을 콜백으로 사용(콜백 파라미터 있음)
// function printMessageWithParams(func, name) {
//   console.log("Printing message...");
//   func(name);
// }

// printMessageWithParams((name) => console.log(`Hello ${name}!`), "Bob");
// //콜백과 비동기 함수
// console.log("1");

// setTimeout(() => console.log("2"), 3000);

// console.log("3");

// 직원 데이터를 가져온 후 리스폰스를 파싱하고 데이터를 프로세싱 하는 예시
getEmployees((response) => {
  json(response, (data) => {
    groupEmployees(data, (result) => {
      console.log(result);
    });
  });
});
