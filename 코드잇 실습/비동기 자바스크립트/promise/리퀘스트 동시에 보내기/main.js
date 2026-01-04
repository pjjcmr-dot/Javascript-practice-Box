import { getEmployees, getMenus } from './asyncFunctions.js';

const employeesPromise = getEmployees();
const menusPromise = getMenus();

const [employees, menus] = await Promise.all([employeesPromise, menusPromise]);

// 테스트 코드
console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);
