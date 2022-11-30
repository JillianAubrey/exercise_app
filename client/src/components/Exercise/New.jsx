import { Fragment, useState } from "react";
import useForm from "../../hooks/useForm";
import TextInput from "../form_elements/TextInput";
import useApplicationData from "../../hooks/useApplicationData";
import validateNewExercise from "../../helpers/validateNewExercise";
import CardLeft from "./CardLeft";

export default function New(props) {
  const { user_id, back, onAdd } = props;
  const { handleFormSubmit, handleInputChange, data } = useForm({ user_id });
  const [errors, setErrors] = useState(null);

  const { saveExercise } = useApplicationData();

  const handleExerciseAdd = (data) => {
    if (validateNewExercise(data, setErrors)) {
      saveExercise(data, setErrors).then((responseData) => {
        if (responseData) {
          onAdd(responseData);
        }
      });
    }
  };

  let key = 0;
  const errorDisplay =
    errors &&
    errors.map((error) => {
      key++
      return <p className="error custom__error" key={key}> {error} </p>;
    });


    // <div className="exercise__container">
    //   <article className={cardClasses}>
    //     {exercise_id === 1 && <Rest duration={duration}/>}
    //     {exercise_id !== 1 && <Exercise {...exerciseProps} />}
    //   </article>
    //   {onEdit && onDelete && (
    //     <section className="exercise__card-editcancel">
    //       {onEdit && <SmallButton onClick={onEdit} type="edit" />}
    //       {onDelete && <SmallButton onClick={onDelete} type="delete" />}
    //     </section>
    //   )}
    //   {onAdd && <SmallButton type="add" onClick={() => onAdd(props)}/>}
    // </div>

  return (
     <div className="custom__container">
      <article className="custom__card">

        <CardLeft /> 

      <form
        autoComplete="off"
        className="custom__form"
        onSubmit={handleFormSubmit}
      >
        <TextInput
          className="custom__name"
          name="name"
          value={data.name || ""}
          onChange={handleInputChange}
          label="Exercise Name: "
        />

        <TextInput
          className="custom__category"
          name="category"
          value={data.category || ""}
          onChange={handleInputChange}
          label="Category: "
        />

        <TextInput
          className="custom__url"
          name="gif_url"
          value={data.gif_url || ""}
          onChange={handleInputChange}
          placeHolder="(optional)"
          label="Photo/GIF URL: "
        />
      </form>

      {errors && <div> {errorDisplay} </div>}

      {data.gif_url && (
        <div className="image__preview">
          <p>Image Preview</p>
          <img src={data.gif_url}></img>
        </div>
      )}
      </article>
      <button onClick={() => handleExerciseAdd(data)}>
          Save Custom Exercise
        </button>
    </div>
  );
}
