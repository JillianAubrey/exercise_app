import { useState } from "react";
import useForm from "../../hooks/useForm";
import TextInput from "../form_elements/TextInput";
import postExercise from "../../helpers/api_requests/postExercise"
import validateNewExercise from "../../helpers/validateNewExercise";
import CardLeft from "./CardLeft";
import SmallButton from "../buttons_toggles/SmallButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function New(props) {

  const { user_id, onCancel, onAdd } = {...props};

  const { handleFormSubmit, handleInputChange, handleCategorySelect, data } = useForm({ user_id });
  const [errors, setErrors] = useState(null);

  const handleSelectClick = (event) => {
    console.log("hello")
    const inputs = Array.from(document.getElementsByClassName("select__input"))
    inputs.forEach((input) => {
      input.classList.remove("select__input-selected");
    })

    event.target.parentElement.classList.add("select__input-selected")
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
  // const displayErrors =
  //   errors &&
  //   errors.map((error, index) => {
  //     return <p className="error custom__error" key={index}> {error} </p>;
  //   });

  


  return (
     <div className="exercise__container">
      <article className="custom__card">

        <CardLeft gif_url={data.gif_url} category={data.category} name={data.name}/> 


      <div className="custom__card-right">
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
          <div className="select__input"><span>Arms &nbsp;</span> <img id="arms" src="/images/muscle.png" onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Back&nbsp;</span><img id="back" src="/images/back.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Chest&nbsp;</span><img id="chest" src="/images/chest.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Core&nbsp;</span><img id="core" src="/images/abs.png" onClick={handleSelectClick} alt="" /></div>
          <div className="select__input"><span>Legs&nbsp;</span><img id="legs" src="/images/leg.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Shoulders&nbsp;</span><img id="shoulders" src="/images/shoulder.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Cardio&nbsp;</span><img id="cardio" src="/images/running.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Stretch&nbsp;</span><img id="stretch" src="/images/triangle-position.png"  onClick={handleSelectClick} alt=""/></div>
          <div className="select__input"><span>Other&nbsp;</span><img id="other" src="/images/more-information.png" onClick={handleSelectClick} alt="" /></div>
        </div>

        <TextInput
          className="custom__url"
          name="gif_url"
          value={data.gif_url || ""}
          onChange={handleInputChange}
          placeHolder="(optional)"
          label="Photo URL: "
        />
      </form>

      {errorElements && <div> {errorElements} </div>}

      </div>
      </article>
      <div className="exercise__card-editcancel">
      <SmallButton onClick={() => handleExerciseAdd(data)} type="save"/>
      <SmallButton onClick={onCancel} type="cancel"/>
      </div>
    </div>
  );
}
