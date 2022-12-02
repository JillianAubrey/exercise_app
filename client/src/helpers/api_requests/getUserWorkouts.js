import api from "./_api";

export default (
  async function getUserWorkouts(userId, onSuccess, onError) { 
  try {
    const response = await api.get(`/workouts?user=${userId}`)
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});