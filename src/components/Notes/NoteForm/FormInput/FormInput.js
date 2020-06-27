import React from 'react';

const formInput = (props) => (
  <div className="row">
    <div className="input-field">
      <input
        value={props.value}
        onChange={props.changed}
        onBlur={props.blurChanged}
        name={props.name}
        id={props.name}
        type="text"
        className={props.applyClass}
      />

      <label htmlFor={props.name}>{props.name}</label>
    </div>
  </div>
);

export default formInput;
