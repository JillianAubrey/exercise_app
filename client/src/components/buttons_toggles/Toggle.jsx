import { useState } from "react";
import classNames from "classnames";
import "./ToggleButton";
import ToggleButton from "./ToggleButton";
import './Toggle.scss'

export default function Toggle(props) {
  //receives props with a label for each of two buttons and onClick actions for each
  const { leftLabel, rightLabel, rightClick, leftClick, toggleType } = props;
  const [selected, setSelected] = useState("left");
  const toggleClass = classNames('toggle', {
    [`toggle--${toggleType}`]: toggleType
  })

  const onLeftClick = () => {
    setSelected("left");
    leftClick();
  };

  const onRightClick = () => {
    setSelected("right");
    rightClick();
  };

  return (
    <div className={toggleClass}>
      <ToggleButton onClick={onLeftClick} selected={selected === "left"}>
        {leftLabel}
      </ToggleButton>
      <ToggleButton onClick={onRightClick} selected={selected === "right"}>
        {rightLabel}
      </ToggleButton>
    </div>
  );
}

