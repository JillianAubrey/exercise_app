import React, { useEffect, useMemo, useRef, useState } from "react";
import getStatistics from "../../helpers/api_requests/getStatistics";
import formatStatistics from "../../helpers/formatStatistics";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";
import './Statistics.scss'
import { useSpring, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'



export default function Statistics(props) {
  const workoutId = props.workoutId;
  const [statistics, setStatistics] = useState(null);
  const [errors, setErrors] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [ref, bounds] = useMeasure({ debounce: 0 })

  const [style, animate] = useSpring(({ height: "0px"}), [])
   
  useEffect(() => {
    animate({
      height: (expanded ? bounds.height : 0) + "px"
    });
  }, [ animated, expanded, bounds.height])

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
    <article className="statistics__card" >
      <h2 onClick={handleExpanded} >Statistics</h2>
      <animated.div className="animediv" style={style}>
      {expanded ? <Expanded statistics={statistics} onClick={handleExpanded} error={errors} ref={ref}/> : null}
      </animated.div>
    </article>)
}
