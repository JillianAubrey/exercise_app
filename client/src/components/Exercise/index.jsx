import React, { Fragment } from "react";
import "./styles.scss";
import useExerciseMode from "../../hooks/useExerciseMode";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Search from "./Search";
import { useState } from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const FORM = "FORM";
const SEARCH = "SEARCH";
const NEW = "NEW";

export default function Exercise(props) {

  const { empty, edit, onDelete, user_id, setExercise} = {...props}
  const [ editSearch, setEditSearch ] = useState()
  const { back, mode, setMode } = useExerciseMode(empty ? EMPTY : SHOW);

  const onEdit = () => setMode(FORM);

  const handleSearchAdd = (exercise) => {
    console.log(exercise);
    setEditSearch(exercise);
    setTimeout(() => {
      setMode(FORM)
    }, 100)
  }

  const handleSearchMode = () => {
    setTimeout(() => {
      setMode(SEARCH)
    }, 100)
  }

  const formProps = editSearch ? {...editSearch, onCancel : () => back()} : {...props, onCancel : () => back()}
  const showProps = edit ? {...props, onEdit, onDelete } : props;

  return (
    <Fragment>
      {mode === SHOW && !empty && <Show {...showProps} />}
      {mode === FORM && <Form {...formProps} />}
      {mode === EMPTY && empty && <Empty onClick={handleSearchMode}/>}
      {mode === SEARCH && <Search onCancel={back} onAdd={handleSearchAdd} user={user_id}/>}
    </Fragment>
  );
}
