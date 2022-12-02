import api from "./_api";

export default (
  async function postLogin(params, onSuccess, onError) { 
  try {
    const response = await api.post('/login', params)
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});
