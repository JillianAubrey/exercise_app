export default function formatStatistics(statistics) {

  const activeUsers = statistics.users.filter((user) => {
    return Object.keys(statistics.all_walkthroughs).includes(user.id.toString());
  });

  const formatted = activeUsers.map((user) => {
    return {name: user.name, all_walkthroughs: statistics.all_walkthroughs[user.id], last_week_walkthroughs: statistics.last_week_walkthroughs[user.id]}
  })

  formatted.sort((a, b) => b.last_week_walkthroughs - a.last_week_walkthroughs)

  return formatted;
}
