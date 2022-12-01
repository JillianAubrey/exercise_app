import axios from "axios";


const saveWorkout = async (workout, workout_id) => {

  try {
    const response = await axios.put(`/workouts/${workout_id}`, workout)
    console.log(response)
  } catch(error) {
    console.log(error)
  }

}

export default saveWorkout;