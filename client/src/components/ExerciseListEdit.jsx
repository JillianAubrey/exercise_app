import React from "react";
import Exercise from "./Exercise";
import './ExerciseList.scss';

export default function ExerciseListEdit(props) {
  const { exerciseList } = props;

  const exercises = exerciseList.map((item, index) => {
    const {
      duration, reps, sets, note,
      exercise: {name, category, gif_url}
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
      />
    );
  });

  return (
    <section className="exercise_list" >
      {exercises}
    </section>
  )
}