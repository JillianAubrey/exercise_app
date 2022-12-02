import api from "./api";

export default async function searchMembers(workoutId, value, onSuccess, onError) {
  try {
    console.log('getting members...')
    const response = await api.get(`/users?not_in_workout=${workoutId}&q=${value}`)
    console.log('onSuccessing data...')
    console.log(response)
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}