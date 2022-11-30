import React from "react";
import classnames from 'classnames';
import './ToggleButton.scss';


function ToggleButton(props) {
  const { onClick, selected, children } = props;
  const buttonClasses = classnames('toggle__button', {'toggle__button--selected': selected})

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default ToggleButton;
