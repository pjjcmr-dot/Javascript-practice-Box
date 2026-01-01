



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

const myTag = document.querySelector("#myNumber");
console.log(myTag);

const myTag2 = document.getElementById("myNumber");
console.log(myTag2);

const myTag3 = document.querySelector(".color-btn");
console.log(myTag3);

const myTags1 = document.querySelectorAll(".color-btn");
console.log(myTags1);

const myTags2 = document.getElementsByClassName("color-btn");
console.log(myTags2);