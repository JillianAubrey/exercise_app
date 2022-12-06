import { isWebUri } from "valid-url";

export default function validateNewExercise(exerciseData, handleError) {
  handleError(null);
  const { gif_url, name, category } = { ...exerciseData };

  //validates that the URL provided is a valid web URL
  if (gif_url && !isWebUri(gif_url)) {
    return handleError(["Please specify a valid url for your image"]);
  }

  //require a name and category for a custom exercise
  if (!name || !category) {
    return handleError([
      "Please specify a title and category for your custom exercise",
    ]);
  }
  return true;
}
