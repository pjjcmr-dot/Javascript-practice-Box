//? some 조건을 만족하는 첫번째 요소를 찾는 순간 종료
//조건을 만족하는 요소가 1개 이상 있는지
//? every 모든 요소가 조건을 만족하는지
//조건을 만족하지 않는 요소가 1개 이상 있는지를 확인

const spait = [
  {
    codeName: "ApplePie",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "BigBoss",
    members: ["스파이", "스파이", "스과이", "스파이", "스파이"],
  },
  {
    codeName: "CEO",
    members: ["스파이", "스파이", "스파이", "습하이", "스파이"],
  },
  {
    codeName: "DeathNote",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "EarlyBird",
    members: ["스파이", "스마이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "Faker",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
];
//? 구조 분해 할당(const { codeName, members } = team;)
function checkSpy(team) {
  //팀에서 모든 맴버가 '스파이' 인지 확인
  const result = team.members.every((member) => member === "스파이");
  const message = result
    ? `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`
    : `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다.`;

  console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));
