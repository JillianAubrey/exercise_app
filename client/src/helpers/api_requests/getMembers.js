import api from "./_api";

export default async function getMembers(workoutId, onSuccess, onError) { 
  try {
    const response = await api.get(`/workouts/${workoutId}/members`)
    return response.data;
  } catch (error) {
    onError && onError(error);
  }
}