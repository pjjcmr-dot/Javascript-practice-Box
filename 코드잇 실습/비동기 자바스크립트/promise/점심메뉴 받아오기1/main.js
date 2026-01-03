// 여기에 코드를 작성하세요.
function fetchFood() {
  return fetch("https://learn.codeit.kr/api/menus")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

fetchFood();
