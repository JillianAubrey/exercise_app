import React, { Fragment } from "react";
import "./styles.scss";
import useExerciseMode from "../../hooks/useExerciseMode";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Search from "./Search";
import New from "./New";
import { useState } from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const FORM = "FORM";
const SEARCH = "SEARCH";
const NEW = "NEW";

export default function Exercise(props) {
  const { empty, editMode, onDelete, user_id, handleWorkoutEdit } = {
    ...props,
  };
  const [addNewProps, setAddNewProps] = useState();
  const { back, mode, setMode } = useExerciseMode(empty ? EMPTY : SHOW);
  const [ visible, setVisible ] = useState(true)

  const onEdit = () => setMode(FORM);

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
    setAddNewProps(workout_exercise)
    handleWorkoutEdit(workout_exercise)
    setMode(SHOW)
  }

  const formProps = addNewProps
    ? { ...addNewProps, onCancel: () => back(), handleFormSave }
    : { ...props, onCancel: () => back(), handleFormSave };

  const showProps = editMode && addNewProps ? { ...addNewProps, onEdit, mode } : editMode ? {...props, onEdit, mode} : {...props, mode}

  return (
    <Fragment>
      {mode === SHOW && visible && !empty && <Show {...showProps} />}
      {mode === FORM && <Form {...formProps} />}
      {mode === EMPTY && empty && <Empty onClick={handleSearchMode} />}
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
