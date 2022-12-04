import React, { useEffect, useState } from "react";
import getStatistics from "../../helpers/api_requests/getStatistics";
import formatStatistics from "../../helpers/formatStatistics";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";
import './Statistics.scss'

export default function Statistics(props) {
  const workoutId = props.workoutId;
  const [statistics, setStatistics] = useState(null);
  const [errors, setErrors] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(prev => !prev)
  }

  useEffect(() => {
    getStatistics(workoutId, setErrors).then((response) => {
      if (response) {
        const stats = formatStatistics(response)
        setStatistics(stats);
      }
    });
  }, []);

  return (
    <article className="statistics__card">
      <h2 onClick={handleExpanded} >Statistics</h2>
      {expanded && <Expanded statistics={statistics} onClick={handleExpanded} error={errors}/>}
    </article>)
}
