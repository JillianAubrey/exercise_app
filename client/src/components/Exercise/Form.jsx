import React from "react";
import useForm from "../../useForm"; //will later be "../hooks/useForm"
import CardLeft from "./CardLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallButton from "../buttons_toggles/SmallButton";

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
  const cardLeftProps = { gif_url, name, category };

  const { data, handleInputChange, handleFormSubmit } = useForm({
    gif_url,
    reps,
    sets,
    duration,
    note,
    category,
    name,
    id,
  });

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--form">
        <CardLeft {...cardLeftProps} />
        <section className="exercise__card-right">
          <div className="exercise__card-header">
            <h1> {name} </h1>
            <div className="exercise__card-divider"></div>
            <p> {category} </p>
          </div>
          <form autoComplete="off" className="exercise__card--form-form" onSubmit={handleFormSubmit}>
            <input
              className="exercise__card--form-duration"
              name="duration"
              type="number"
              placeholder="Exercise Duration"
              required
              value={data.duration || ""}
              onChange={handleInputChange}
            />
            <input
              className="exercise__card--form-sets"
              name="sets"
              type="number"
              placeholder="Sets"
              required
              value={data.sets || ""}
              onChange={handleInputChange}
            />
            <input
              className="exercise__card--form-reps"
              name="reps"
              type="number"
              placeholder="Reps"
              required
              value={data.reps || ""}
              onChange={handleInputChange}
            />
            <input
              className="exercise__card--form-note"
              name="note"
              type="text"
              placeholder="Note (optional)"
              value={data.note || ""}
              onChange={handleInputChange}
            />
          </form>
          {/* if the exercise type is 'rest', render a different layout specific to rests */}
          {name === "rest" && (
            <section className="exercise__card-rest">
              <form
                autoComplete="off"
                onSubmit={(event) => event.preventDefault()}
              >
                <input></input>
              </form>
            </section>
          )}
        </section>
      </article>
      <section className="exercise__card-editcancel">
        <SmallButton onClick={onConfirm} type="save">
          <FontAwesomeIcon icon="floppy-disk" />
        </SmallButton>
        <SmallButton onClick={() => onReorder("up", id)} type="reorder">
          <FontAwesomeIcon icon="chevron-up" />
        </SmallButton>
        <SmallButton onClick={() => onReorder("down", id)} type="reorder">
          <FontAwesomeIcon icon="chevron-down" />
        </SmallButton>
        <SmallButton onClick={onCancel} type="cancel">
          <FontAwesomeIcon icon="xmark" />
        </SmallButton>
      </section>
    </div>
  );
}
