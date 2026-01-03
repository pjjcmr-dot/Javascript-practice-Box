//* [window]
//*    │
//*    └── [document.XXXXXXXXXX]  ← 페이지 전체 관리자
//*           │
//*           ├── 요소(#title)
//*           └── 요소(.btn)

//TODO: | 요소 1개 찾기 | `document.querySelector("선택자")` |  |
//TODO: | id로 찾기 | `document.getElementById("id")` |  |
//TODO: | 요소 만들기 | `document.createElement("태그이름")` |  |
//TODO: | 클릭 감지 | `addEventListener("click", ...)` |  |

//* document.getElementById("id");
//* document.getElementsByClassName("member");
//* document.querySelector("#myNumber");

// const myTag = document.querySelector("#myNumber");
// console.log(myTag);

// const myTag2 = document.getElementById("myNumber");
// console.log(myTag2);

// const myTag3 = document.querySelector(".color-btn");
// console.log(myTag3);

// const myTags1 = document.querySelectorAll(".color-btn");
// console.log(myTags1);

// const myTags2 = document.getElementsByClassName("color-btn");
// console.log(myTags2);

//TODO: DOM 요소 선택하기

//* id로 찾기 | document.getElementById("id")
//? getElementById()는 HTML 문서에서 특정 id를 가진 요소를 찾아서 반환합니다.
//? id는 문서 내에서 고유해야 하므로, 이 메서드는 항상 하나의 요소만 반환합니다.

// 예제 1: id로 요소 선택하기
// const title = document.getElementById("title");
// console.log(title);

// 예제 2: 선택한 요소의 내용 변경하기
// const title = document.getElementById("title");
// title.textContent = "새로운 제목";

// 예제 3: 선택한 요소의 스타일 변경하기
// const title = document.getElementById("title");
// title.style.color = "blue";
// title.style.fontSize = "24px";

// 예제 4: 선택한 요소에 클래스 추가하기
// const title = document.getElementById("title");
// title.classList.add("highlight");

// 예제 5: 여러 요소를 id로 선택하여 조작하기
// const header = document.getElementById("header");
// const content = document.getElementById("content");
// const footer = document.getElementById("footer");
//
// header.style.backgroundColor = "#333";
// content.textContent = "메인 콘텐츠 영역";
// footer.style.textAlign = "center";

//* 기타 DOM 선택 메서드
//? getElementsByClassName("className") - 클래스 이름으로 요소들 찾기 (HTMLCollection 반환)
//? getElementsByTagName("tagName") - 태그 이름으로 요소들 찾기 (HTMLCollection 반환)
//? querySelector("selector") - CSS 선택자로 첫 번째 요소 찾기
//? querySelectorAll("selector") - CSS 선택자로 모든 요소 찾기 (NodeList 반환)

// 비교 예제: querySelector vs getElementById
// const element1 = document.getElementById("myElement");
// const element2 = document.querySelector("#myElement");
// // 두 방법 모두 같은 요소를 선택하지만, getElementById가 더 빠릅니다.

//TODO: | 화면에 붙이기 | `부모.appendChild(자식)` |  |
// 화면에 붙이기: 부모.appendChild(자식)
// 새로운 요소를 만들어 화면에 추가하기
// const newElement = document.createElement("div");
// newElement.textContent = "새로운 요소입니다!";
// newElement.style.padding = "10px";
// newElement.style.margin = "5px";
// newElement.style.backgroundColor = "#f0f0f0";

// // body에 새로운 요소 추가
// document.body.appendChild(newElement);

// // 여러 개의 요소를 추가하는 예제
// const container = document.createElement("div");
// container.id = "container";
// container.style.border = "1px solid #ccc";
// container.style.padding = "20px";
// container.style.margin = "10px";

// for (let i = 1; i <= 3; i++) {
//   const item = document.createElement("p");
//   item.textContent = `아이템 ${i}`;
//   item.style.color = "#333";
//   container.appendChild(item); // 컨테이너에 각 아이템 추가
// }

// document.body.appendChild(container); // body에 컨테이너 추가

//TODO: | 클릭 감지 | `addEventListener("click", ...)` |  |

//? ============================================
//? 클릭 감지 (Click Detection)
//? ============================================

//! 기본 클릭 이벤트 리스너
// const button = document.querySelector('.btn');
//
// button.addEventListener('click', function() {
//   console.log('버튼이 클릭되었습니다!');
// });

//! 이벤트 객체 사용하기
// const button = document.querySelector('.btn');
//
// button.addEventListener('click', function(event) {
//   console.log('클릭된 요소:', event.target);
//   console.log('클릭 위치 X:', event.clientX);
//   console.log('클릭 위치 Y:', event.clientY);
// });

//! 화살표 함수로 간단하게 작성
// const button = document.querySelector('.btn');
//
// button.addEventListener('click', () => {
//   console.log('버튼 클릭!');
// });

//! 실전 예제: 클릭할 때 텍스트 변경
// const button = document.querySelector('.btn');
// const title = document.querySelector('#title');
//
// button.addEventListener('click', () => {
//   title.textContent = '클릭되었습니다!';
// });

//! 실전 예제: 클릭 카운터
// const button = document.querySelector('.btn');
// let count = 0;
//
// button.addEventListener('click', () => {
//   count++;
//   button.textContent = `클릭 횟수: ${count}`;
// });

//! 여러 요소에 클릭 이벤트 추가하기
// const buttons = document.querySelectorAll('.btn');
//
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     console.log('클릭된 버튼:', event.target);
//   });
// });

//* ============================================
//* 핵심 정리:
//* 1. addEventListener('click', 함수) - 클릭 이벤트 감지
//* 2. event 객체를 통해 이벤트 정보 접근 가능
//* 3. 화살표 함수 또는 일반 함수 사용 가능
//* 4. 여러 요소에 반복문으로 이벤트 추가 가능
//* ============================================
