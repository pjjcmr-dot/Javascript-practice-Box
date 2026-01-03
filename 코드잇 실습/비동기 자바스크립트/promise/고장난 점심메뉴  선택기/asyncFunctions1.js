export async function getMenus() {
  const response = await fetch("https://learnnnnn.codeit.kr/api/menus");
  const menus = await response.json();
  return menus;
}
