import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      <i className="material-icons">{props.btnType}</i>
      <p>{props.children}</p>
    </button>
  );
};

export default button;
