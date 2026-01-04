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
