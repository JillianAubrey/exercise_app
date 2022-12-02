import React, { Fragment, useEffect, useState } from "react";
import MemberListItem from "./MemberListItem";
import searchMembers from "../../helpers/api_requests/searchMembers";
import TextInput from "../form_elements/TextInput";
import useForm from "../../hooks/useForm";
import './styles.scss'

export default function MemberSearch(props) {
  const { workoutId } = props
  const [memberResults, setMemberResults] = useState([])
  const { handleInputChange, handleFormSubmit, data } = useForm({});
  const query = data.search || null

  useEffect(() => {
    searchMembers(workoutId, query, setMemberResults, console.log);
  }, [query]);

  const results = memberResults.map((member) => {
    return (
      <MemberListItem
        key={member.id}
        name={member.name}
      />
    )
  })

  return (
    <Fragment>
      <div className="member__card-divider"></div>
      <div className="member__card-note">
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
          placeholder="Search a username!"
        />
      </form>
        <div className="search__results">{results}</div>
        </div>
    </Fragment>
  );
}