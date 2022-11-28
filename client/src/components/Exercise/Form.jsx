import React, { Fragment, useState } from "react";
import useForm from "../../useForm"; //will later be "../hooks/useForm"
import CardLeft from "./CardLeft";
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
    reps,
    sets,
    duration,
    note,
    id,
  });

  const [timed, setTimed] = useState(duration ? true : false);
  const [error, setError] = useState(null);

  const validateData = (data) => {
    const { duration, reps, sets } = data;
    setError(null);

    if (timed) {
      if (!duration) {
        setError("Please specify a duration for a timed activity!");
      }
      data.sets = null;
      data.reps = null;
    }
    if (!timed) {
      if (!sets) {
        return setError("Please provide the number of sets for this exercise");
      }
      if (!reps) {
        return setError("Please provide the number of reps for this exercise");
      }
      data.duration = null;
    }
    onConfirm(data);
  };

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--form">
        {category !== "rest" && name !== "rest" && (
          <CardLeft {...cardLeftProps} />
        )}

        <section className="exercise__card-right">
          {category !== "rest" && name !== "rest" && (
            <Fragment>
              <div className="exercise__card-header">
                <h1> {name} </h1>
                <div className="exercise__card-divider"></div>
                <p> {category} </p>
              </div>
              <form
                autoComplete="off"
                className="exercise__card--form-form"
                onSubmit={handleFormSubmit}
              >
                {timed && (
                  <input
                    className="exercise__card--form-duration"
                    name="duration"
                    type="number"
                    min="0"
                    placeholder="Exercise Duration"
                    value={data.duration || ""}
                    onChange={handleInputChange}
                  />
                )}

                {!timed && (
                  <Fragment>
                    <input
                      className="exercise__card--form-sets"
                      name="sets"
                      min="0"
                      type="number"
                      placeholder="Sets"
                      value={data.sets || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="exercise__card--form-reps"
                      name="reps"
                      type="number"
                      min="0"
                      placeholder="Reps"
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
                  </Fragment>
                )}
              </form>
            </Fragment>
          )}
          {/* if the exercise type is 'rest', render a different layout specific to rests */}
          {name === "rest" && (
            <section className="exercise__card-rest">
              <form autoComplete="off" onSubmit={handleFormSubmit}>
                <input
                  className="exercise__card--form-rest"
                  name="duration"
                  type="number"
                  min="0"
                  placeholder="Duration"
                  value={data.duration || ""}
                  onChange={handleInputChange}
                />
              </form>
            </section>
          )}
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
        </section>
      </article>
      <section className="exercise__card-editcancel">
        <SmallButton onClick={() => {validateData(data)}} type="save" />
        <SmallButton onClick={() => onReorder("up", id)} type="moveup" />
        <SmallButton onClick={() => onReorder("down", id)} type="movedown" />
        <SmallButton onClick={onCancel} type="cancel" />
      </section>
    </div>
  );
}
