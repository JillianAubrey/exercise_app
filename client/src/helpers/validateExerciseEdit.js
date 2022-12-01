
export default function validateExerciseEdit(data, errorSetter, timed) {
  const { duration, reps, sets } = data;
  const rest = data.name === 'rest';
  errorSetter(null);

  if (timed) {
    if (!duration) {
      errorSetter("Please specify a duration for a timed activity!");
      return false;
    }
    data.sets = null;
    data.reps = null;
    data.duration = Number(data.duration)
  }
  if (!timed && !rest) {
    if (!sets) {
      errorSetter("Please provide the number of sets for this exercise");
      return false;
    }
    if (!reps) {
      errorSetter("Please provide the number of reps for this exercise");
      return false;
    }
    data.duration = null;
    data.sets = Number(data.sets)
    data.reps = Number(data.sets)
  }

  if (rest && !timed) {
    data.duration = null;
    data.reps = 1;
    data.sets = 1;
  }
  return true;
};
