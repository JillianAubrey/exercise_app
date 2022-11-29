import { useState, useEffect } from "react"
import axios from 'axios';

export default function useSearchData(user) {
  const [searchData, setSearchData] = useState();


  const getInitialData = async () => {
    try {
    const response = await axios.get(`/exercises?user=${user}`)
    setSearchData(response.data)
    }
    catch(error) {
      console.log("useSearchData error", error)
    }
  }

  return { getInitialData, searchData }

}

