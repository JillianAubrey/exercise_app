import React, { useState, useEffect } from "react";

import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";

export default function ExerciseShow(props) {
  const { onNext, exercise } = props
  const { reps, sets, duration, note, exercise:{ name, category, gif_url }} = exercise

  return (
    <main className="walkthrough">
      <CardLeft name={name} category={category} gif_url={gif_url}/>
      {duration && <Timer duration={{seconds: duration}} onComplete={onNext}/>}
    </main>
  )
}