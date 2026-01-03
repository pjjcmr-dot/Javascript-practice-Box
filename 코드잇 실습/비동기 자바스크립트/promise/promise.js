async function getUser() {
  const res = await fetch("https://example.com/user"); // fetch 끝날 때까지 기다림
  const data = await res.json(); // json 변환 끝날 때까지 기다림
  return data;
}
