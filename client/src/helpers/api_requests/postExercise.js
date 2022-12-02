import axios from "axios";

export default (
  async function postExercise(data, handleError) {
    try {
      const response = await axios.post("/exercises", data);
      const exercise_id = response.data.id;
      return {...response.data, exercise_id}
    } catch (badReq) {
      const errorMessages = badReq.response.data;
      const errorsArray =
        errorMessages &&
        Object.keys(errorMessages).map((key) => {
          return `${key} ${errorMessages[key]}`;
        });
      handleError(errorsArray);
      return false;
    }
});