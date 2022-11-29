import React, { useState, useEffect, Fragment } from "react";
import useSearchData from "../../hooks/useSearchData";
import useForm from "../../hooks/useForm";
import TextInput from "../form_elements/TextInput";
import Toggle from "../buttons_toggles/Toggle";
import Show from "./Show";

export default function Search(props) {
  const { user } = props;
  const {
    searchData,
    searchCustomExercises,
    searchDatabaseExercises,
  } = useSearchData(user);
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
        name !== "rest" && <Show
          key={id}
          id={id}
          name={name}
          category={category}
          gif_url={gif_url}
          onAdd="true"
        />
      );
    });

  return (
    <article className="search__container">
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
      <div className="search__results">{resultsList}</div>
    </article>
  );
}