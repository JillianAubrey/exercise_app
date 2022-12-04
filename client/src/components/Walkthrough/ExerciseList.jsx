import React, { useState, useEffect, Fragment } from "react";
import ExerciseListItem from "./ExerciseListItem";
import SmallButton from "../buttons_toggles/SmallButton";
import useList from "../../hooks/useList";

export default function ExerciseList(props) {
  const { exerciseList, onComplete, onFinish } = props;

  const [
    exercise,
    previousExercise,
    nextExercise,
    isFirstExercise,
    isLastExercise,
  ] = useList(exerciseList, 0);

  const onNext = isLastExercise() ? onComplete : nextExercise;

  return (
    <Fragment>
      <div className="walkthrough">
        <SmallButton
          type="previous"
          onClick={previousExercise}
          disabled={isFirstExercise()}
        />
        <ExerciseListItem exercise={exercise} onNext={onNext} />

        <SmallButton
          type="next"
          onClick={nextExercise}
          disabled={isLastExercise()}
        />
      </div>
      {!isLastExercise() ? (
        <button type="button" className="bottom bottom-cancel" onClick={onFinish}>
          Cancel
        </button>
      ) : (
        <button type="button" className="bottom bottom-save" onClick={onComplete}>
          Finish Workout
        </button>
      )}
    </Fragment>
  );
}
