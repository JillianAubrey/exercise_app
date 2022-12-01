import React from "react";
import './CategoryBar.scss';

export default function CategoryBar(props) {
  const { rest, ...counts} = props
  const totalCount = Object.values(counts).reduce((sum, val) => sum + val, 0)
  let extra = 0;

  const bars = Object.keys(counts).map(key => {
    if (key === "rest") return;

    const count = counts[key]

    if (!count) return;
    if (count < totalCount * 0.1) {
      extra += count
      return
    }

    return (
      <div key={key} className="bar-container" style={{flex: count}}>
        <div className={`bar-label`}>{key}</div>
        <div className={`bar ${key}-bar`} />
      </div>
    )
  });

  if (extra) {
    bars.push(
      <div key="extra" className="bar-container" style={{flex: extra}}>
      <div className={`bar-label`}>+</div>
      <div className={`bar extra-bar`} />
    </div>
    )
  }

  return (
    <div className="category-bar">
      {bars}
    </div>
  )
}