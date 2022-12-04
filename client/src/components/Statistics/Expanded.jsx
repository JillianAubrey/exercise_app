import React, {useState} from "react";
import { animated, useSprings, useTransition } from '@react-spring/web'
import { useEffect } from "react";
import { ListItemSecondaryAction } from "@mui/material";
import { config } from "@fortawesome/fontawesome-svg-core";



const Expanded = React.forwardRef((props, ref) =>  {
  const { statistics, onClick, errors } = { ...props };

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % statistics.length)
    }, 100)

    return () => clearInterval(interval)
  }, [])


  const [springs] =  useSprings(
    statistics.length,

    (i) => ({
      opacity: '1',
      transform: "translateX(0em)",
      from: {opacity: '0', transform: "translateX(4em)"},
      config: config.molasses,
      delay: 100 + (i * 200)
    }),


    [index]
  )

  const errorElements =
    errors &&
    errors.map((error, index) => {
      return (
          <p className="error" key={index}> {error} </p>
      );
    });

  const statList =
    statistics.length 
    ? statistics.map((userstat) => {
        const { name, all_walkthroughs, last_week_walkthroughs } = userstat;

        return (
          <div className="stat_item">
            <h3 className="stat_item-header">{name}</h3>
            <p className="stat_item-info">
              Past Week: <span>{last_week_walkthroughs}</span>{" "}
              {last_week_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
            </p>
            <p className="stat_item-info">
              {" "}
              All time: <span>{all_walkthroughs}</span>{" "}
              {all_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
            </p>
            </div>
        );
      })
    : <p className="stat_item-empty">No walkthroughs yet</p>
    
  return (
    <section className="stat_item--container" onClick={onClick} ref={ref}>
      <div class="stat_item-divider" />
    { springs.map(({opacity, transform}, i) => (
      <animated.li
      key={i}
      style={{opacity, transform, listStyleType: "none"}}
      >
      {statList[i]}
      </animated.li>
    ))
      }

      {errors && errorElements}
      
    </section>
  );
})

export default Expanded;
