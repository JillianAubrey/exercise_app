import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss"



export default function Empty (props) {

  const { onClick } = props;


  return(
    <article className="exercise__card exercise__card--empty" onClick={onClick}>
      
      <FontAwesomeIcon className="icon" icon="circle-plus"/>
    
    </article>
  )

}