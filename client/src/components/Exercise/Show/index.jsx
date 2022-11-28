import React, { useState } from "react";
import SmallButton from "../../buttons_toggles/SmallButton";
import Exercise from "./Exercise";
import Rest from "./Rest";

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
      {onEdit && onDelete && (
        <section className="exercise__card-editcancel">
          <SmallButton onClick={onEdit} type="edit" />
          <SmallButton onClick={onDelete} type="delete" />
        </section>
      )}
    </div>
  );
}
