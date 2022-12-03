import api from "./_api"

export default (
  async function postWorkout(workout, workout_id, onSuccess, onError) {
  try {
    const response = await api.put(`/workouts/${workout_id}`, workout)
    onSuccess && onSuccess(response)
  } catch(error) {
    onError && onError(error)
  }
});
