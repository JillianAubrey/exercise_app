import React, { useState } from "react";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";
import '../styles.scss'

export default function Show(props) {
  const {
    name,
    id,
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

  const exerciseProps =
    name === "rest"
      ? null
      : { name, category, duration, reps, sets, gif_url, note, id };

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--show">
        {name === "rest" && <Rest duration={duration}/>}
        {name !== "rest" && <Exercise {...exerciseProps} />}
      </article>
      {(onEdit && onDelete) || onAdd && (
        <section className="exercise__card-editcanceladd">
          {onEdit && <SmallButton onClick={onEdit} type="edit" />}
          {onDelete && <SmallButton onClick={onDelete} type="delete" />}
          {onAdd && <SmallButton type="add"/>}
        </section>
      )}
    </div>
  );
}
