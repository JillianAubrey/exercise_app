import api from "./_api"

export default (
  async function postWorkout(workout, workout_id) {
  try {
    const response = await api.put(`/workouts/${workout_id}`, workout)
    console.log(response)
  } catch(error) {
    console.log(error)
  }
});
