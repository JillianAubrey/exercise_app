import React, { Fragment, useState } from "react";
import "./styles.scss";
import SmallButton from "../buttons_toggles/SmallButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show(props) {
  const {
    name,
    category,
    duration,
    reps,
    sets,
    gif_url,
    note,
    onEdit,
    onDelete,
    onReorder,
  } = { ...props };
  const [truncated, setTruncated] = useState(true);
  const handleTruncated = () => {
    setTruncated((prev) => !prev);
  };

  return (
    // exercise container renders the exercise card and optionally the edit and delete buttons
    <div className="exercise__container">
      <article className="exercise__card exercise__card--show">
        {/* if the exercise category and name is not 'rest', render the regular exercise show elements */}
        {category !== "rest" && name !== "rest" && (
          <Fragment>
            <section className="exercise__card-left">
              {/* in the left section of the card, render the gif. if there is no gif, render an icon. which icon depends on whether it is cardio based */}
              {gif_url ? (
                <img src={gif_url} alt={name} />
              ) : category === "Cardio" || category === "cardio" ? (
                <FontAwesomeIcon
                  className="exercise__card-icon"
                  icon="person-running"
                />
              ) : (
                <FontAwesomeIcon
                  className="exercise__card-icon"
                  icon="dumbbell"
                />
              )}
            </section>
            <section className="exercise__card-right">
              <div className="exercise__card-header">
                <h1> {name} </h1>
                <div className="exercise__card-divider"></div>
                <p> {category} </p>
              </div>
              {duration && (
                <div className="exercise__card-timebased">
                  <p className="exercise__card-duration">
                    <span>{duration}</span> Seconds (
                    <span>{Math.round(duration / 60)}</span> minutes)
                  </p>
                </div>
              )}
              {sets && reps && (
                <div className="exercise__card-setbased">
                  <p className="exercise__card-sets">
                    <span>{sets}</span> Sets
                  </p>
                  <p className="exercise__card-reps">
                    <span>{reps}</span> Repetitions
                  </p>
                </div>
              )}
              {/* if there is a note attached to the exercise, render a dropdown to view the note contents */}
              {note && (
                <div className="exercise__card-note">
                  <button
                    type="button"
                    className="exercise__card-btn"
                    onClick={handleTruncated}
                  >
                    Note&nbsp;
                    {truncated ? (
                      <FontAwesomeIcon icon="chevron-down" />
                    ) : (
                      <FontAwesomeIcon icon="chevron-up" />
                    )}
                  </button>
                  {!truncated && (
                    <div className="exercise__card-notetext">{note}</div>
                  )}
                </div>
              )}
            </section>
          </Fragment>
        )}
        {/* if the exercise type is 'rest', render a different layout specific to rests */}
        {name === "rest" && (
          <section className="exercise__card-rest">
            <h1>Rest</h1>
            <FontAwesomeIcon icon="moon" className="icon"></FontAwesomeIcon>
            {duration && <p>{duration} Seconds</p>}
            {!duration && <p>Untimed Rest</p>}
          </section>)}
      </article>
      {/* if the component is passed on edit and on delete actions, consider the element to be editable and add the appropriate buttons */}
      {onEdit && onDelete && (
        <section className="exercise__card-editcancel">
          <SmallButton onClick={onEdit} type="edit">
            <FontAwesomeIcon icon="file-pen" />
          </SmallButton>
          <SmallButton onClick={onDelete} type="delete">
            <FontAwesomeIcon icon="trash" />
          </SmallButton>
        </section>
      )}
    </div>
  );
}
