import api from "./api";

export default async function getWorkout(workoutId, onSuccess, onError) { 
  try {
    const response = await api.get(`/workouts/${workoutId}`)
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
}