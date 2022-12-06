import React from "react";
import Exercise from "./Exercise";
import './ExerciseList.scss';

export default function ExerciseListShow(props) {
  const { exerciseList } = props;

  const exercises = exerciseList.map((item, index) => {
    if (!item) return null;

    const {
      duration, reps, sets, note,
      exercise: {id, name, category, gif_url}
    } = item;

    return (
      <Exercise
        key={index}
        name={name}
        category={category}
        duration={duration}
        reps={reps}
        sets={sets}
        gif_url={gif_url}
        note={note}
        editMode={false}
        exercise_id={id}
      />
    );
  });

  return (
    <section className="exercise_list" >
      {exercises}
    </section>
  );
};