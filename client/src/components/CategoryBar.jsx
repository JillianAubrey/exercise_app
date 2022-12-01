import React from "react";
import './CategoryBar.scss';

export default function CategoryBar(props) {
  const bars = Object.keys(props).map(key => {
    if (key === "rest") return;
    if (!props[key]) return;
    return (
      <div key={key} className="bar-container" style={{flex: props[key]}}>
        <div className={`bar-label`}>{key}</div>
        <div className={`bar ${key}-bar`} />
      </div>
    )
  });

  return (
    <div className="category-bar">
      {bars}
    </div>
  )
}