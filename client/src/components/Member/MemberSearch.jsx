import React, { Fragment, useEffect, useState } from "react";
import MemberListItem from "./MemberListItem";
import searchMembers from "../../helpers/api_requests/searchMembers";
import TextInput from "../form_elements/TextInput";
import useForm from "../../hooks/useForm";
import addMember from '../../helpers/addMember'
import './styles.scss'

export default function MemberSearch(props) {
  const { workoutId } = props
  const [memberResults, setMemberResults] = useState([])
  const { handleInputChange, handleFormSubmit, data } = useForm({});
  const query = data.search || null

  useEffect(() => {
    searchMembers(workoutId, query, setMemberResults, console.log);
  }, [query]);

  const selectMember = function(workoutId, userId) {
    addMember(workoutId, userId, searchMembers(workoutId, query, setMemberResults, console.log), console.log);
  }

  const results = memberResults.map((member) => {
    console.log("member.id: ", member.id)
    return (
      <MemberListItem
        key={member.id}
        name={member.name}
        onClick={() => selectMember(workoutId, member.id)}
      />
    )
  })

  return (
    <Fragment>
      <div className="member__card-divider"></div>
      <div className="member__card-note">
        <TextInput
          className="search__input"
          name="search"
          value={data?.search || ""}
          onChange={handleInputChange}
          label="Search"
          placeholder="Search a username!"
        />
        <div className="search__results">
          {results}
        </div>
        </div>
    </Fragment>
  );
}