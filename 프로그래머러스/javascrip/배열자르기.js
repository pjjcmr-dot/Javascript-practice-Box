







// num1 ~ num2 => numbers.slice()
// number => number => number

function solution(Numbers, num1, num2) {
  return Numbers.slice(num1, num2 + 1);
}

// parameter => [numbers], num1, num2
console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));
