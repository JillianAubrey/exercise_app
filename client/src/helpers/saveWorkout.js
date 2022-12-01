import axios from "axios";

const saveWorkout = async (workout, workout_id, handleError) => {
  console.log("workout data in save workout", workout)
  try {
    const response = await axios.put(`/workouts/${workout_id}`, workout);
    console.log(response)
    handleError(["i am an error mwahaha"])
    return true;
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
};

export default saveWorkout;