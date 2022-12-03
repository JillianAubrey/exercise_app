import api from "./_api"

export default (
  async function putWorkout(workout, onSuccess, onError) {
  try {
    const response = await api.post(`/workouts`, workout)
    onSuccess && onSuccess(response)
  } catch(error) {
    onError && onError(error)
  }
});