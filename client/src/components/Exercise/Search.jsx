import React, { useState, useEffect, Fragment } from "react";
import useSearchData from "../../hooks/useSearchData";
import useForm from "../../hooks/useForm";
import TextInput from "../form_elements/TextInput";
import SmallButton from "../buttons_toggles/SmallButton";
import Toggle from "../buttons_toggles/Toggle";
import Show from "./Show";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
  const { user_id, onAdd, onCancel, onCustom} = props;
  const { searchData, searchCustomExercises, searchDatabaseExercises } =
    useSearchData(user_id);
  const { handleInputChange, handleFormSubmit, data } = useForm({});
  const [custom, setCustom] = useState(true);
  const query = data.search || null;

  useEffect(() => {
    searchCustomExercises();
  }, []);

  useEffect(() => {
    if (custom) {
      query && searchCustomExercises(query);
      !query && searchCustomExercises();
    }
    if (!custom) {
      query && searchDatabaseExercises(query);
      !query && searchDatabaseExercises();
    }
  }, [query, custom]);

  const resultsList =
    searchData &&
    searchData.map((exercise) => {
      const { id, name, category, gif_url } = { ...exercise };

      return (
        name !== "Rest" && id !== 1 && (
          <Show
            key={id}
            exercise_id={id}
            name={name}
            category={category}
            gif_url={gif_url}
            onAdd={onAdd}
          />
        )
      );
    });

  return (
    <div className="search__container">
        <FontAwesomeIcon className="search__cancel clickable" onClick={onCancel} icon="circle-plus" />
      <article className="search__card">
        <Toggle
          leftLabel="Custom Exercises"
          rightLabel="Exercise Database"
          leftClick={() => setCustom(true)}
          rightClick={() => setCustom(false)}
        />
        <form
          autoComplete="off"
          className="search__form"
          onSubmit={handleFormSubmit}
        >
          <TextInput
            className="search__input"
            name="search"
            value={data?.search || ""}
            onChange={handleInputChange}
            label="Search"
          />
        </form>
        <div className="search__buttons">
          <SmallButton type="rest" onClick={() => onAdd({exercise_id: 1, name: 'rest', category: 'rest'})}>Add Rest</SmallButton>&nbsp;&nbsp;
          <SmallButton type="edit" onClick={onCustom}>Create Exercise</SmallButton>
        </div>
        <div className="search__results">{resultsList}</div>
      </article>
    </div>
  );
}
