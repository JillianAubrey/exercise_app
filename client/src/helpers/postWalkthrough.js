import api from "./api";

export default async function postWalkthrough(userId, workoutId, onSuccess, onError) { 
  try {
    const response = await api.post('/walkthroughs', {data: {userId, workoutId}})
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error)
  }
}