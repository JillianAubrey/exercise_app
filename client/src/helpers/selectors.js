


export default function filterWorkoutList(workoutList, userId, byOthers) {
  return workoutList.filter((workout) => {
    if (byOthers) {
      return workout.owner.id !== userId
    }
    return workout.owner.id === userId
  })
}