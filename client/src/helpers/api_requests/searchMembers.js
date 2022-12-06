import api from "./_api";

export default async function searchMembers(workoutId, value, onSuccess, onError) {
  try {
    const response = await api.get(`/users?not_in_workout=${workoutId}&q=${value}`);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
}