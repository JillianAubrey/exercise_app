import React, { Fragment } from "react";
import CardLeft from "./Exercise/CardLeft";
import SmallButton from "./buttons_toggles/SmallButton";
import CategoryBar from "./CategoryBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import './WorkoutItem.scss'

export default function WorkoutItem(props) {
  const { name, gif_url, onEdit, ownWorkout, onClick, onPlay, onRemove, categoryCounts, clickable } = {...props}

  console.log(ownWorkout)

  const editable = onEdit && ownWorkout;

  const workoutItemClass = classNames('workout__card', 'workout__card--show', {
    'no-hover': !clickable
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
                console.log("clicked play!")
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
                console.log("clicked remove!")
                event.preventDefault();
                event.stopPropagation();
                onRemove();
              }}></SmallButton>}
        </section>
       
      </article>
      {editable && <article className="edit__button" onClick={onEdit}> <h2>Edit Workout <FontAwesomeIcon icon="file-pen" className="icon"/></h2></article>}
    </Fragment>
  );
}