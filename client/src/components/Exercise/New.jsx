import { Fragment, useState } from "react";
import useForm from "../../hooks/useForm";
import TextInput from "../form_elements/TextInput";
import postExercise from "../../helpers/api_requests/postExercise"
import validateNewExercise from "../../helpers/validateNewExercise";
import CardLeft from "./CardLeft";
import SmallButton from "../buttons_toggles/SmallButton";
import errorDisplay from "../../helpers/errorDisplay";

export default function New(props) {
  const { user_id, onCancel, onAdd } = props;
  const { handleFormSubmit, handleInputChange, data } = useForm({ user_id });
  const [errors, setErrors] = useState(null);

  const handleExerciseAdd = (data) => {
    if (validateNewExercise(data, setErrors)) {
      postExercise(data, setErrors).then((responseData) => {
        if (responseData) {
          onAdd(responseData);
        }
      });
    }
  };

  const errorElements = errorDisplay(errors)

  return (
     <div className="custom__container">
      <article className="custom__card">

        <CardLeft gif_url={data.gif_url} category={data.category} name={data.name}/> 

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

      {errorElements && <div> {errorElements} </div>}

      {data.gif_url && (
        <div className="image__preview">
          <p>Image Preview</p>
          <img src={data.gif_url}></img>
        </div>
      )}
      </article>
      <SmallButton onClick={() => handleExerciseAdd(data)} type="save"/>
      <SmallButton onClick={onCancel} type="cancel"/>
    </div>
  );
}
