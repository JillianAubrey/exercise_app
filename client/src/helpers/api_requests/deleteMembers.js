import api from "./_api";

export default async function deleteMember(workoutId, userId, onSuccess, onError) { 
  try {
    console.log('getting members...')
    const response = await api.delete(`/workouts/${workoutId}/members/${userId}`)
    console.log('onSuccessing data...')
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}