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
  const { empty, editMode, user_id, handleWorkoutEdit, handleExerciseDelete } = {
    ...props,
  };
  const [addNewProps, setAddNewProps] = useState();
  const { back, mode, setMode } = useExerciseMode(empty ? EMPTY : SHOW);
  const [ visible, setVisible ] = useState(true)

  const onEdit = () => setMode(FORM);

  useEffect(() => {

    if (editMode === false) {
      setMode(SHOW)
    }

  },[editMode])

  const onDelete = () => {
    handleExerciseDelete()
    setVisible(false)
  }

  const handleSearchAdd = (exercise) => {
    setAddNewProps(exercise);
    setTimeout(() => {
      setMode(FORM);
    }, 100);
  };

  const handleCustomAdd = (exercise) => {
    console.log(exercise)
    setAddNewProps(exercise);
    setTimeout(() => {
      setMode(FORM);
    }, 100);
  };
  const handleCustomMode = () => {
    setTimeout(() => {
      setMode(NEW);
    }, 100);
  };

  const handleSearchMode = () => {
    setTimeout(() => {
      setMode(SEARCH);
    }, 100);
  };


  const handleFormSave = (workout_exercise) => {
    setAddNewProps({...workout_exercise})
    console.log("hello from handle form save", workout_exercise)
   
    handleWorkoutEdit(workout_exercise)
    setMode(SHOW)
  }

  const formProps = addNewProps
    ? { ...addNewProps, onCancel: () => back(), handleFormSave, workout_exercise_id : Math.random() }
    : { ...props, onCancel: () => back(), handleFormSave };

  const showProps = addNewProps ? { ...addNewProps, onEdit, mode, onDelete, editMode } : editMode ? {...props, onEdit, onDelete, mode, editMode} : {...props, mode }

  return (
    <Fragment>
      {mode === SHOW && visible && !(empty && !addNewProps) && <Show {...showProps} />}
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
