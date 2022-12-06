import api from "./_api";

export default async function addMembers(workoutId, userId, onSuccess, onError) { 
  try {
    const response = await api.post(`/workouts/${workoutId}/members`, {user_id: userId} )
    return response.data;
  } catch (error) {
    onError && onError(error);
  }
}