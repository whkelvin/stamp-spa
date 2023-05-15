export function generateCoolName(): string {
  const coolNames = [
    "Elite Programmer",
    "Bug Hunter",
    "Blazingly Fast Dev",
    "Luke SleepCoder",
    "Prod Breaker",
    "Sudoer",
    "Steve Codewell",
    "Friday Deployer",
  ];

  const i = 0 + Math.random() * (coolNames.length - 1);
  const randomIndex = Math.round(i);
  return coolNames[randomIndex];
}
