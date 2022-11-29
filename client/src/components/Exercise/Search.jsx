import React, {useState, useEffect, Fragment} from 'react';
import useSearchData from "../../hooks/useSearchData";
import Show from "./Show"

export default function Search(props) {

  useEffect(() => {
    getInitialData()
  }, [])

  const { user } = props;
  const { searchData, getInitialData } = useSearchData(user);

    const resultsList = searchData && searchData.map((exercise) => {
    const {id, name, category, gif_url} = {... exercise };
  
    return (
      <Show 
      key={id}
      id={id}
      name={name}
      category={category}
      gif_url={gif_url}
      onAdd="true"
      />
    )}) 

  return (
    <Fragment>
    { resultsList }
    </Fragment>
    
  )
}

 // const searchData = [
  //       {
  //           "id": 17,
  //           "user_id": 1,
  //           "name": "bent over twist",
  //           "category": "stretch",
  //           "gif_url": "https://www.spotebi.com/wp-content/uploads/2015/02/bent-over-twist-exercise-illustration.gif",
  //           "created_at": "2022-11-29T03:13:42.893Z",
  //           "updated_at": "2022-11-29T03:13:42.893Z"
  //       },
  //       {
  //           "id": 18,
  //           "user_id": 1,
  //           "name": "forward fold",
  //           "category": "stretch",
  //           "gif_url": null,
  //           "created_at": "2022-11-29T03:13:42.895Z",
  //           "updated_at": "2022-11-29T03:13:42.895Z"
  //       }
  //   ]

