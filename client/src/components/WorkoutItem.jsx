import React, { Fragment } from "react";
import CardLeft from "./Exercise/CardLeft";
import CategoryBar from "./CategoryBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './WorkoutItem.scss'

export default function WorkoutItem(props) {
  const { exerciseList, name, gif_url, categoryCounts } = props
  return (
    <Fragment>
      <article className="workout__card workout__card--show" onClick={props.onClick}>
        <CardLeft gif_url={gif_url} category={""} name={name} />
        <section className="workout__card-right">
          <div className="workout__card-header">
            <h1> {name} </h1>
            <div className="workout__card-divider"></div>
          </div>
          <div className="workout__card-note">
            <button
              type="button"
              className="workout__card-btn"
              onClick={console.log("click")}
            >
              <FontAwesomeIcon icon="fa-solid fa-play" />
            </button>
          </div>
          <CategoryBar {...categoryCounts} />
        </section>
      </article>
    </Fragment>
  );
}