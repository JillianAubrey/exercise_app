import React, { useEffect, useState } from "react";
import getStatistics from "../../helpers/api_requests/getStatistics";
import formatStatistics from "../../helpers/formatStatistics";

export default function Statistics(props) {
  const workoutId = props.workoutId;
  const [statistics, setStatistics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStatistics(workoutId, setError).then((response) => {
      if (response) {
        const stats = formatStatistics(response)
        setStatistics(response);
      }
    });
  }, []);

  return <h1>hello</h1>;
}
