import api from "./_api";

export default async function addMembers(workoutId, userId, onSuccess, onError) { 
  try {
    const response = await api.post(`/workouts/${workoutId}/members`, {user_id: userId} )
<<<<<<< HEAD
    onSuccess && onSuccess(response.data);
=======
    return response.data;
>>>>>>> 9049985b41389a1c1ba3b268bf348b3270a1d245
  } catch (error) {
    onError && onError(error);
  }
}