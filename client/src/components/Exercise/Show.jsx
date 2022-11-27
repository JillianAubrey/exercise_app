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
  } = { ...props };
  const [truncated, setTruncated] = useState(true);
  const handleTruncated = () => {
    setTruncated((prev) => !prev);
  };

  return (
    <div className="exercise__container">
      <article className="exercise__card exercise__card--show">
        <section className="exercise__card-left">
          {gif_url ? (
            <img src={gif_url} alt={name} />
          ) : category === "Cardio" ? (
            <FontAwesomeIcon
              className="exercise__card-icon"
              icon="person-running"
            />
          ) : (
            <FontAwesomeIcon className="exercise__card-icon" icon="dumbbell" />
          )}
        </section>
        <section className="exercise__card-right">
          <div className="exercise__card-header">
            <h1>{name}</h1>
            <div className="exercise__card-divider"></div>
            <p> {category} </p>
          </div>
          {duration && (
            <div className="exercise__card-timebased">
              <p className="exercise__card-duration">
                {" "}
                <span>{duration}</span> Seconds (
                <span>{Math.round(duration / 60)}</span> minutes){" "}
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
      </article>
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
