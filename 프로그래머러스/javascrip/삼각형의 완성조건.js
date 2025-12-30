//근본
function solution(sides) {
  // 1. 오름차순 정렬
  sides.sort((a, b) => a - b);

  // 2. 가장 긴 변과 나머지 두 변 비교
  if (sides[2] < sides[0] + sides[1]) {
    return 1;
  } else {
    return 2;
  }
}

// 예시 실행
console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));

//매서드
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
