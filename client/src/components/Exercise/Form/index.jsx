import React, { useState } from "react";
import validateExerciseEdit from "../../../helpers/validateExerciseEdit";
import useForm from "../../../hooks/useForm";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";

export default function Form(props) {
  const {
    exercise_id,
    workout_exercise_id,
    name,
    category,
    duration,
    reps,
    sets,
    gif_url,
    note,
    onCancel,
    handleFormSave,
  } = { ...props };
  //initialize form with the original values so they can be edited

  const formFunctions = useForm({
    reps,
    sets,
    duration,
    note,
    workout_exercise_id,
    exercise_id,
    name,
    gif_url,
    category,
  });
  const { data } = formFunctions;

  const [timed, setTimed] = useState(duration ? true : false);
  const [error, setError] = useState(null);

  const handleTimed = () => {
    setError(null);
    setTimed((prev) => !prev);
  };

  //if normal exercise, render with these props
  const exerciseProps =
    exercise_id === 1
      ? null
      : {
          name,
          category,
          gif_url,
          ...formFunctions,
          timed,
          handleTimed,
          error,
        };

  //if rest exercise, use different props
  const restProps =
    exercise_id !== 1
      ? null
      : {
          timed,
          ...formFunctions,
          handleTimed,
          error,
        };

  const handleSubmit = () => {
    validateExerciseEdit(data, setError, timed) && handleFormSave(data);
  };

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--form">
        {exercise_id !== 1 && <Exercise {...exerciseProps} />}
        {exercise_id === 1 && <Rest {...restProps} />}
      </article>
      <section className="exercise__card-editcancel">
        <SmallButton onClick={handleSubmit} type="save" />
        <SmallButton onClick={onCancel} type="cancel" />
      </section>
    </div>
  );
}
