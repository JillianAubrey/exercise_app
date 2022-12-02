import api from "./_api";

export default (
  async function postWalkthrough(userId, workoutId, onSuccess, onError) { 
  try {
    const response = await api.post('/walkthroughs', {user_id: userId, workout_id: workoutId})
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error)
  }
});
