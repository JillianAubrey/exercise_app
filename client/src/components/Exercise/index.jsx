import React, { Fragment } from "react";
import "./styles.scss";
import useExerciseMode from "../../hooks/useExerciseMode";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Search from "./Search";
import New from "./New";
import { useState, useEffect } from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const FORM = "FORM";
const SEARCH = "SEARCH";
const NEW = "NEW";

export default function Exercise(props) {
  const {
    id, index, empty, editMode, user_id, handleWorkoutEdit
  } = props;

  const [addNewProps, setAddNewProps] = useState();
  const { back, mode, setMode } = useExerciseMode(empty ? EMPTY : SHOW);

  const onEdit = () => setMode(FORM);

  useEffect(() => {
    if (editMode === false) {
      setMode(SHOW)
    }
  }, [editMode])

  const handleSearchAdd = (exercise) => {
    setAddNewProps(exercise);
    setTimeout(() => {
      setMode(FORM);
    }, 100);
  };

  const handleCustomAdd = (exercise) => {
    setAddNewProps(exercise);
    setTimeout(() => {
      setMode(FORM);
    }, 100);
  };
  const handleCustomMode = () => {
      setMode(NEW);
  };

  const handleSearchMode = () => {
    setTimeout(() => {
      setMode(SEARCH);
    }, 100);
  };


  const handleFormSave = (data) => {
    const { name, gif_url, category, ...workout_exercise } = data;
    workout_exercise.exercise = { id: workout_exercise.exercise_id, name, gif_url, category };
   
    workout_exercise.id = id || Math.random();

    handleWorkoutEdit(workout_exercise, index);
    setMode(SHOW);
  };

  const formProps = addNewProps
    ? { ...addNewProps, onCancel: () => back(), handleFormSave }
    : { ...props, onCancel: () => back(), handleFormSave };

  const showProps = editMode ? {...props, onEdit, mode, editMode} : {...props, mode }

  return (
    <Fragment>
      {mode === SHOW  && !(empty && !addNewProps) && <Show {...showProps} />}
      {mode === FORM && <Form {...formProps} />}
      {mode === EMPTY && empty && <Empty onClick={handleSearchMode}/>}
      {mode === SEARCH && (
        <Search
          onCancel={back}
          onAdd={handleSearchAdd}
          user_id={user_id}
          onCustom={handleCustomMode}
        />
      )}
      {mode === NEW && (
        <New user_id={user_id} onCancel={back} onAdd={handleCustomAdd} />
      )}
    </Fragment>
  );
}
