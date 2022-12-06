import api from "./_api";

export default async function getMembers(workoutId, onSuccess, onError) { 
  try {
    const response = await api.get(`/workouts/${workoutId}/members`)
<<<<<<< HEAD
    onSuccess && onSuccess(response.data);
=======
    return response.data;
>>>>>>> 9049985b41389a1c1ba3b268bf348b3270a1d245
  } catch (error) {
    onError && onError(error);
  }
}