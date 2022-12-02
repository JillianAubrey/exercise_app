import api from "./_api";

export default (
  async function getDetailedWorkout(workoutId, onSuccess, onError) { 
  try {
    const response = await api.get(`/workouts/${workoutId}`)
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});
