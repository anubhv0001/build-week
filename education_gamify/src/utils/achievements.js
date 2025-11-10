
export function evaluateBadges(userStats) {
  const badges = [];
  const { totalScore = 0, quizzesCompleted = 0, streak = 0 } = userStats;

  if (totalScore >= 100) badges.push("Bronze Scorer");
  if (totalScore >= 250) badges.push("Silver Scorer");
  if (totalScore >= 500) badges.push("Gold Scorer");

  if (quizzesCompleted >= 5) badges.push("Quiz Novice");
  if (quizzesCompleted >= 10) badges.push("Quiz Enthusiast");

  if (streak >= 3) badges.push("3-Day Streak");
  if (streak >= 7) badges.push("Week Streak");

  return badges;
}
