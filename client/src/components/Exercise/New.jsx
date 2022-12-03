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
  const { handleFormSubmit, handleInputChange, handleCategorySelect, data } = useForm({ user_id });
  const [errors, setErrors] = useState(null);

  const handleSelectClick = (event) => {
    const inputs = Array.from(document.getElementsByClassName("select__input"))
    inputs.forEach((input) => {
      input.classList.remove("select__input-selected")
    })

    event.target.classList.add("select__input-selected")
    
    console.log(event.target.id)
    handleCategorySelect(event.target.id)

  }

  const handleExerciseAdd = (data) => {
    
    if (validateNewExercise(data, setErrors)) {
      postExercise(data, setErrors).then((responseData) => {
        console.log(responseData);
        if (responseData) {
          onAdd(responseData);
        }
      });
    }
  };

  const errorElements = errorDisplay(errors)
  const errorDisplay =
    errors &&
    errors.map((error, index) => {
      return <p className="error custom__error" key={index}> {error} </p>;
    });


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

        <div className="select__inputs">
          <div className="select__input" id="arms" onClick={handleSelectClick}>1</div>
          <div className="select__input" id="back" onClick={handleSelectClick}>2</div>
          <div className="select__input" id="chest" onClick={handleSelectClick}>3</div>
          <div className="select__input" id="core" onClick={handleSelectClick}>4</div>
          <div className="select__input" id="legs" onClick={handleSelectClick}>5</div>
          <div className="select__input" id="shoulders" onClick={handleSelectClick}>6</div>
          <div className="select__input" id="cardio" onClick={handleSelectClick}>7</div>
          <div className="select__input" id="stretch" onClick={handleSelectClick}>8</div>
          <div className="select__input" id="other" onClick={handleSelectClick}>9</div>
        </div>

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
          <img src={data.gif_url} alt="Preview">
        </img>
        </div>
      )}
      </article>
      <SmallButton onClick={() => handleExerciseAdd(data)} type="save"/>
      <SmallButton onClick={onCancel} type="cancel"/>
    </div>
  );
}
