import React, { Fragment, useEffect, useState } from "react";
import MemberListItem from "./MemberListItem";
import searchMembers from "../../helpers/api_requests/searchMembers";
import TextInput from "../form_elements/TextInput";
import useForm from "../../hooks/useForm";
import addMember from '../../helpers/api_requests/addMember'
import './styles.scss'

export default function MemberSearch(props) {
  const { workoutId, setMemberSearch, toggleSearch } = props
  const [memberResults, setMemberResults] = useState([])
  const { handleInputChange, data } = useForm({});
  const query = data.search || null

  useEffect(() => {
    searchMembers(workoutId, query, setMemberResults, console.log);
  }, [query]);

  const selectMember = async function(workoutId, userId) {
    await addMember(workoutId, userId)
    toggleSearch();
  }

  const results = memberResults.map((member) => {
    console.log("member.id: ", member.id)
    return (
      <MemberListItem
        key={member.id}
        name={member.name}
        onClick={() => selectMember(workoutId, member.id)}
        icon="add"
      />
    )
  })

  return (
    <Fragment>
      <div className="member_item-divider"></div>
      <div className="member__card-search">
        <TextInput
          className="search__input"
          name="search"
          value={data?.search || ""}
          onChange={handleInputChange}
          label="Search"
          placeholder="Search a username!"
        />
        <div className="search__results">
          <ul>
            {results}
            {memberResults.length < 1 && <h2> . . . </h2>}
          </ul>
        </div>
        </div>
    </Fragment>
  );
}