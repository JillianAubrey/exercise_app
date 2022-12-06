import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss"



export default function Empty (props) {

  const { onClick, pageAddClicked } = props;

  const handleClick = function() {
    onClick()
  }


  return(
    <article className="exercise__card exercise__card--empty clickable" onClick={handleClick}>
      
      <FontAwesomeIcon className="icon" icon="circle-plus"/>
    
    </article>
  )

}