import React, { useState } from "react";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";
import '../styles.scss'
import classNames from "classnames";

export default function Show(props) {
  const {
    index,
    name,
    exercise_id,
    onDelete,
    category,
    duration,
    reps,
    sets,
    gif_url,
    note,
    onEdit,
    onAdd,
    mode,
    editMode,
    handleReorder
  } = { ...props };


  const cardClasses = classNames('exercise__card', 'exercise__card--show', {'exercise__card--search': mode === 'SEARCH'})

  const exerciseProps = { name, category, duration, reps, sets, gif_url, note, exercise_id };

  return (
    <div className="exercise__container">
      <article className={cardClasses}>
        {exercise_id === 1 && <Rest duration={duration}/>}
        {exercise_id !== 1 && <Exercise {...exerciseProps} />}
      </article>
      {editMode && (
        <section className="exercise__card-editcancel">
           <SmallButton onClick={() => handleReorder(true, index)} type="moveup" />
           <SmallButton onClick={onEdit} type="edit" />
           <SmallButton onClick={onDelete} type="delete" />
           <SmallButton onClick={() => handleReorder(false, index)} type="movedown" />
        </section>
      )}
      {onAdd && <SmallButton type="add" onClick={() => onAdd({...props})}/>}
    </div>
  );
}
