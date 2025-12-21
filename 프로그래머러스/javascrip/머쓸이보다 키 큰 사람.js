//? 친구들이 키가 담긴 정수배열 array
//? 머쓱이의 키 height => parameter
//? 머쓱이보다 키 큰 사람수 return

// //* 근본
// function solution(array, height) {
//   let heightMusg = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > height) {
//       heightMusg++;
//     }
//   }
//   return heightMusg;
// }

// console.log(solution([149, 180, 192, 170], 167));
// console.log(solution([180, 120, 140], 190));
// //
// function solution(array, height) {
//   var answer = 0;
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] > height) {
//           answer++
//       }
//   }
//   return answer;
// }
// //! array[i]  → 비교 대상 (값)
// //! answer    → 결과 저장소 (개수)

// console.log(solution([149, 180, 192, 170],167));

//
// 메서드
// function solution(array, height) {
//     var answer = array.filter(item => item > height);
//     return answer.length;
// }

// console.log(solution([149, 180, 192, 170], 167));
// console.log(solution([180, 120, 140], 190));

// function solution(array, height) {
//     return array.filter((el)=>{return el > height;}).length
// }

// function solution(array, height) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > height) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(solution([149, 180, 192, 170], 167));

// function solution(array, height) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > height) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(solution([149, 180, 192, 170], 167));
