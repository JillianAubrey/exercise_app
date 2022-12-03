import React, { Fragment } from "react";
import useForm from "../hooks/useForm";
import TextInput from "./form_elements/TextInput";
import WorkoutEdit from "./WorkoutEdit";
import SmallButton from "./buttons_toggles/SmallButton";
import './WorkoutAdd.scss';

export default function WorkoutAdd(props) {
  const { workout, setName, onCancel, onSave } = props
  const { handleInputChange, data} = useForm({name: ''})

  return (
    <Fragment >
      {!workout.name && 
        <form onSubmit={() => setName(data.name)}>
          <h1>Name your workout</h1>
          <TextInput
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <SmallButton type="save" onClick={()=>{}}>
            Submit
          </SmallButton>
          <SmallButton type="cancel" onClick={onCancel}>
            Cancel
          </SmallButton>
        </form>
      }
      {workout.name &&
        <WorkoutEdit
          user_id={workout.owner}
          workout={workout}
          onCancel={onCancel}
          onSave={onSave}
        />
      }
    </Fragment>
  )
}