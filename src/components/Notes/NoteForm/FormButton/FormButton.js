import React from 'react';

const formButton = (props) => {
  return (
    <button className="waves-effect waves-light btn" onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default formButton;
