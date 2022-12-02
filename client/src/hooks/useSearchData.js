import { useState } from "react"
import getExercises from "../helpers/api_requests/getExercises";

export default function useSearchData(userId) {
  const [searchData, setSearchData] = useState();


  const searchCustomExercises = async (searchString) => {
    getExercises(
      userId, 
      searchString,
      (res) => setSearchData(res.data),
      (err) => console.error("searchUserExercises error", err)
    )
  }

  const searchDatabaseExercises = async (searchString) => {
    getExercises(
      null, 
      searchString,
      (res) => setSearchData(res.data),
      (err) => console.error("searchDatabaseExercises error", err)
    )
  }

  return { searchData, searchCustomExercises, searchDatabaseExercises }

}
