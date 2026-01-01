
//* [window]
//*    │
//*    └── [document.XXXXXXXXXX]  ← 페이지 전체 관리자
//*           │
//*           ├── 요소(#title)
//*           └── 요소(.btn)



//TODO: | 요소 1개 찾기 | `document.querySelector("선택자")` |  |
//TODO: | id로 찾기 | `document.getElementById("id")` |  |
//TODO: | 요소 만들기 | `document.createElement("태그이름")` |  |
//TODO: | 화면에 붙이기 | `부모.appendChild(자식)` |  |
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














