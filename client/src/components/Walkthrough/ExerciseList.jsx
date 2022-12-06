import React, { useMemo, useEffect, Fragment, useState } from "react";
import { useSpring, animated} from "@react-spring/web"
import ExerciseListItem from "./ExerciseListItem";
import SmallButton from "../buttons_toggles/SmallButton";
import useList from "../../hooks/useList";
import { useRef } from "react";

export default function ExerciseList(props) {
  const { exerciseList, onComplete, onCancel } = props;

  const [
    exercise,
    previousExercise,
    nextExercise,
    isFirstExercise,
    isLastExercise,
  ] = useList(exerciseList, 0);

  const onNext = isLastExercise() ? onComplete : nextExercise;

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [exercise])

  return (
    <Fragment>
      <div className="walkthrough">
        <SmallButton
          type="previous"
          onClick={previousExercise}
          disabled={isFirstExercise()}
        />
        
       <ExerciseListItem exercise={exercise} onNext={onNext}/>

        <SmallButton
          type="next"
          onClick={nextExercise}
          disabled={isLastExercise()}
        />
      </div>
      {!isLastExercise() ? (
        <button type="button" className="bottom bottom-cancel" onClick={onCancel}>
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
