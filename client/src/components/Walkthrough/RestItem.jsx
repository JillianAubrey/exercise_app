import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";

export default function RestItem(props) {
  const { onNext, exercise } = props
  const { duration, note } = exercise

  return (
    <article className="walkthrough--item walkthrough--rest">
      <FontAwesomeIcon className="icon" icon="faMoon" />
      {duration && <Timer duration={{seconds: duration}} onComplete={onNext}/>}
    </article>
  )
}