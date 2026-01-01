
//* [window]
//*    │
//*    └── [document.XXXXXXXXXX]  ← 페이지 전체 관리자
//*           │
//*           ├── 요소(#title)
//*           └── 요소(.btn)



//TODO: | 요소 1개 찾기 | `document.querySelector("선택자")` |  |
//TODO: | id로 찾기 | `document.getElementById("id")` |  |
//TODO: | 요소 만들기 | `document.createElement("태그이름")` |  |

// 화면에 붙이기: 부모.appendChild(자식)
// 새로운 요소를 만들어 화면에 추가하기
const newElement = document.createElement("div");
newElement.textContent = "새로운 요소입니다!";
newElement.style.padding = "10px";
newElement.style.margin = "5px";
newElement.style.backgroundColor = "#f0f0f0";

// body에 새로운 요소 추가
document.body.appendChild(newElement);

// 여러 개의 요소를 추가하는 예제
const container = document.createElement("div");
container.id = "container";
container.style.border = "1px solid #ccc";
container.style.padding = "20px";
container.style.margin = "10px";

for (let i = 1; i <= 3; i++) {
  const item = document.createElement("p");
  item.textContent = `아이템 ${i}`;
  item.style.color = "#333";
  container.appendChild(item); // 컨테이너에 각 아이템 추가
}

document.body.appendChild(container); // body에 컨테이너 추가

//TODO: | 클릭 감지 | `addEventListener("click", ...)` |  |














