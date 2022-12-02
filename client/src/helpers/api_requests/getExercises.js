import api from "./_api";

export default (
  async function getExercises(userId, query, onSuccess, onError) { 

    const requestUrl = (
      "/exercises?"
      + (userId && `user=${userId}&`)
      + (query && `q=${query}`)
    )

    try {
      const response = await api.get(requestUrl)
      onSuccess && onSuccess(response);
    } catch (error) {
      onError && onError(error);
    }
});