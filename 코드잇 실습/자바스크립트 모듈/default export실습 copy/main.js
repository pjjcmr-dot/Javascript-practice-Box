import { circle, square } from "./lib/area.mjs";

console.log(circle(1));
console.log(square(2));

// 여기서 circleArea는

// // ./lib/area.mjs 안에서 export default로 내보낸 함수 자체를 의미해요.
//! import circleArea ...에서 이름은 자유롭게 지을 수 있어요.
//! 예를 들어 import abcd, ...로 해도, default export된 함수를 abcd로 부르게 된답니다.
//! 함수 body 전체 : export default function circle(radius) {}
