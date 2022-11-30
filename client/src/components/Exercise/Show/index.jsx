import React, { useState } from "react";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";
import '../styles.scss'
import classNames from "classnames";

export default function Show(props) {
  const {
    name,
    exercise_id,
    workout_exercise_id,
    category,
    duration,
    reps,
    sets,
    gif_url,
    note,
    onEdit,
    onDelete,
    onAdd,
  } = { ...props };

  const cardClasses = classNames('exercise__card', 'exercise__card--show', {'exercise__card--search' : onAdd})

  const exerciseProps =
    exercise_id === 1
      ? null
      : { name, category, duration, reps, sets, gif_url, note, exercise_id };

  return (
    <div className="exercise__container">
      <article className={cardClasses}>
        {exercise_id === 1 && <Rest duration={duration}/>}
        {exercise_id !== 1 && <Exercise {...exerciseProps} />}
      </article>
      {onEdit && onDelete && (
        <section className="exercise__card-editcancel">
          {onEdit && <SmallButton onClick={onEdit} type="edit" />}
          {onDelete && <SmallButton onClick={onDelete} type="delete" />}
        </section>
      )}
      {onAdd && <SmallButton type="add" onClick={() => onAdd(props)}/>}
    </div>
  );
}
