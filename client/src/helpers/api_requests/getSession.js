import api from "./_api";

export default (
  async function getSession(onSuccess, onError) { 
  try {
    const response = await api.get('/logged_in')
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});
