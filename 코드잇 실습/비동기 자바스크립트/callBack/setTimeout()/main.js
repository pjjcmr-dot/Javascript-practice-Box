function sayHello(name) {
  console.log(`Hello ${name}!`);
}

console.log("시작");

setTimeout(sayHello, 2000, "Codeit");

console.log("끝");
