import { isWebUri } from "valid-url";

export default function validateNewExercise(exerciseData, handleError) {
  handleError(null);
  console.log(exerciseData)
  const { gif_url, name, category } = { ...exerciseData };
  if (gif_url && !isWebUri(gif_url)) {
    return handleError(["Please specify a valid url for your image"]);
  }
  if (!name || !category) {
    return handleError([
      "Please specify a title and category for your custom exercise",
    ]);
  }
  return true;
}
