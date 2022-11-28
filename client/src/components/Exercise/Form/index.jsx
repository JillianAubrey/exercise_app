import React, { useState } from "react";
import validateExerciseEdit from "../../../helpers/validateExerciseEdit";
import useForm from "../../../useForm";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";

export default function Form(props) {
  const {
    id,
    name,
    category,
    duration,
    reps,
    sets,
    gif_url,
    note,
    onConfirm,
    onCancel,
    onReorder,
  } = { ...props };

  const formFunctions = useForm({
    reps,
    sets,
    duration,
    note,
    id,
  });
  const { data } = formFunctions;

  const [timed, setTimed] = useState(duration ? true : false);
  const [error, setError] = useState(null);

  const exerciseProps =
    name === "rest"
      ? null
      : {
          name,
          category,
          gif_url,
          ...formFunctions,
          timed,
        };

  const restProps =
    name !== "rest"
      ? null
      : {
          timed,
          ...formFunctions,
        };

  const handleSubmit = () => {
    validateExerciseEdit(data, setError, onConfirm)
  }

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--form">

        {name !== "rest" && <Exercise {...exerciseProps} />}
        {name === "rest" && <Rest {...restProps} />}

        {error && <p className="exercise__card-error"> {error} </p>}

        <section className="exercise__card-timed?">
          <button
            className="exercise__card-timed"
            onClick={() => setTimed(true)}
          >
            {name === "rest" ? "Timed Rest" : "Timed Exercise"}
          </button>
          <button
            className="exercise__card-untimed"
            onClick={() => setTimed(false)}
          >
            {name === "rest" ? "Untimed Rest" : "Sets Based Exercise"}
          </button>
        </section>
      </article>
      <section className="exercise__card-editcancel">
        <SmallButton onClick={handleSubmit} type="save" />
        <SmallButton onClick={() => onReorder("up", id)} type="moveup" />
        <SmallButton onClick={() => onReorder("down", id)} type="movedown" />
        <SmallButton onClick={onCancel} type="cancel" />
      </section>
    </div>
  );
}
