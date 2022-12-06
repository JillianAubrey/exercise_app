import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss"



export default function Empty (props) {

  //empty exercise component, renders as a circle with a plus icon, onCLick renders exercise search
  const { onClick } = props;

  const handleClick = function() {
    onClick()
  }


  return(
    <article className="exercise__card exercise__card--empty clickable" onClick={handleClick}>
      
      <FontAwesomeIcon className="icon" icon="circle-plus"/>
    
    </article>
  )

}