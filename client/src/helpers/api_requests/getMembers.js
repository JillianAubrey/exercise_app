import api from "./_api";

export default async function getMembers(workoutId, onSuccess, onError) { 
  try {
    console.log('getting members...')
    const response = await api.get(`/workouts/${workoutId}/members`)
    console.log('onSuccessing data...')
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}