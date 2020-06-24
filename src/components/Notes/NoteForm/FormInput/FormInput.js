import React from 'react';

const formInput = (props) => (
  <div className="row">
    <div className="input-field">
      <input
        className={props.applyClass}
        id={props.inputFor}
        defaultValue={props.type}
        type="text"
      />

      <label htmlFor={props.inputFor}>{props.inputFor}</label>
    </div>
  </div>
);

export default formInput;
