const cutOff = 80;

const passChecker = (score) =>
  score > cutOff ? "합격입니다!" : "불합격입니다!";

console.log(passChecker(75));
