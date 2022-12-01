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

  const formProps = addNewProps
    ? { ...addNewProps, onCancel: () => back(), handleWorkoutEdit }
    : { ...props, onCancel: () => back(), handleWorkoutEdit };

  const showProps = editMode ? { ...props, onEdit, onDelete } : props;

  return (
    <Fragment>
      {mode === SHOW && !empty && <Show {...showProps} />}
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
