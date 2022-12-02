import api from "./_api";

export default (
  async function postLogout(onSuccess, onError) { 
  try {
    const response = await api.post('/logout')
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
});
