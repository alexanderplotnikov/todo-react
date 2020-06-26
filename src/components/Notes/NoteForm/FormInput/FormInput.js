import React from 'react';

const formInput = (props) => (
  <div className="row">
    <div className="input-field">
      <input
        name={props.name}
        className={props.applyClass}
        id={props.inputFor}
        value={props.value}
        type="text"
        onChange={props.changed}
      />

      <label htmlFor={props.inputFor}>{props.inputFor}</label>
    </div>
  </div>
);

export default formInput;
