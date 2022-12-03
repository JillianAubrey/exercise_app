import React from "react";
import Exercise from "./Exercise";
import './ExerciseList.scss';

export default function ExerciseListEdit(props) {
  const { 
    exerciseList, 
    handleWorkoutEdit, 
    handleReorder, 
    handleExerciseDelete,
    userId
  } = props;

  console.log( "user id in exerciselist edit", userId
  )

  const exercises = exerciseList.map((item, index) => {
    if (!item) {
      return (<Exercise
        key={index + "new"}
        index={index}
        empty={true}
        handleWorkoutEdit={handleWorkoutEdit}
        user_id={userId}
        editMode={true}
        handleExerciseDelete={handleExerciseDelete}
      />)
    }
    
    const {
      id, duration, reps, sets, note,
      exercise: {id: exercise_id, name, category, gif_url}
    } = item;

    return (<Exercise
      key={id}
      id={id}
      index={index}
      name={name}
      exercise_id={exercise_id}
      category={category}
      duration={duration}
      reps={reps}
      sets={sets}
      gif_url={gif_url}
      note={note}
      editMode={true}
      handleWorkoutEdit={handleWorkoutEdit}
      handleReorder={handleReorder}
      onDelete={() => handleExerciseDelete(index)}
    />);
  });

  return (
    <section className="exercise_list" >
      {exercises}
    </section>
  )
}