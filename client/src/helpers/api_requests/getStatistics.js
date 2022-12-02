import api from "./_api";

export default (async function getStatistics(workoutId, onError) {
  try {
    const response = await api.get(`/workouts/${workoutId}/statistics`);
    return response.data;
  } catch (error) {
    const errorMessages = error.response.data;
    const errorsArray =
      errorMessages &&
      Object.keys(errorMessages).map((key) => {
        return `${key} ${errorMessages[key]}`;
      });
    onError(errorsArray);
    return false;
  }
});


