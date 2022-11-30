import { useState } from "react"
import axios from 'axios';

export default function useSearchData(user) {
  const [searchData, setSearchData] = useState();


  const searchCustomExercises = async (searchString) => {

    try {
      if (searchString) {
        const response = await axios.get(`/exercises?user=${user}&q=${searchString}`)
        setSearchData(response.data)
      } else {
        const response = await axios.get(`/exercises?user=${user}`)
        setSearchData(response.data)
      }
    }
    catch(error) {
      console.log("searchCustomExercises error", error)
    }
  }

  const searchDatabaseExercises = async (searchString) => {
    try {
      if (searchString) {
        const response = await axios.get(`/exercises?q=${searchString}`)
        setSearchData(response.data)
      } else {
        const response = await axios.get(`/exercises`)
        setSearchData(response.data)
      }
    }
    catch(error) {
      console.log("searchDatabaseExercises error", error)
    }
  }

  return { searchData, searchCustomExercises, searchDatabaseExercises }

}

