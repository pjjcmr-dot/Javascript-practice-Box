// 여기에 코드를 작성하세요.
export async function printMenus() {
  const response = await fetch('https://learn.codeit.kr/api/menus');
  const menus = await response.json();
  console.log(menus);
}
