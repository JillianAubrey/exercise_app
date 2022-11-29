import React, {useState, Fragment} from "react";
import CardLeft from "../CardLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles.scss'

export default function Exercise(props) {
  const { name, category, duration, reps, sets, gif_url, note, id } = props;
  const cardLeftProps = { gif_url, name, category };

  const [truncated, setTruncated] = useState(true);
  const handleTruncated = () => {
    setTruncated((prev) => !prev);
  };

  return (
    <Fragment>
      <CardLeft {...cardLeftProps} />
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
            {!truncated && <p className="exercise__card-notetext">{note}</p>}
          </div>
        )}
      </section>
    </Fragment>
  );
}
