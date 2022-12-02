import api from "./_api";

export default (
  async function postUser(params, onSuccess, onError) { 
  try {
    const response = await api.post('/users', params)
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});
