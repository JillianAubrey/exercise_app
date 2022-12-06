import api from "./_api";

export default async function deleteMember(workoutId, userId, onSuccess, onError) { 
  try {
    const response = await api.delete(`/workouts/${workoutId}/members/${userId}`)
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}