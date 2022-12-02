import api from "./api";

export default async function addMembers(workoutId, userId, onSuccess, onError) { 
  console.log(typeof userId)
  try {
    console.log('getting members...')
    const response = await api.post(`/workouts/${workoutId}/members`, {user_id: userId} )
    console.log('onSuccessing data...')
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}