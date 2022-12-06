import React, { Fragment } from "react";
import CardLeft from "./Exercise/CardLeft";
import SmallButton from "./buttons_toggles/SmallButton";
import CategoryBar from "./CategoryBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import './WorkoutItem.scss'

export default function WorkoutItem(props) {
  const { name, gif_url, onEdit, ownWorkout, onClick, onPlay, onRemove, categoryCounts, clickable } = {...props}

  const editable = onEdit && ownWorkout;

  const workoutItemClass = classNames('workout__card', 'workout__card--show', {
    'no-hover': !clickable,
    clickable: clickable
  })

  return (
    <Fragment>
      <article className={workoutItemClass} onClick={onClick}>
        {onClick && <CardLeft gif_url={gif_url} category={""} name={name} />}
        <section className="workout__card-right">
          <div className="workout__card-header">
            <h1> {name} </h1>
            <div className="workout__card-divider"></div>
          </div>
          <div className="workout__card-note">
          {onPlay && <button
              type="button"
              className="workout__card-btn"
              onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                onPlay();
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-play" />
            </button>}
        
          </div>
          <CategoryBar {...categoryCounts} />
          {onRemove && <SmallButton type="delete" classes="workout__card-delete" id="workout_delete" onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                onRemove();
              }}></SmallButton>}
        </section>
       
      </article>
      {editable && <article className="edit__button clickable" onClick={onEdit}> <h2>Edit Workout <FontAwesomeIcon icon="file-pen" className="icon"/></h2></article>}
    </Fragment>
  );
}