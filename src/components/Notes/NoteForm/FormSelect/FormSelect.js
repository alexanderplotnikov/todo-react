import React from 'react';
import FormOptions from './FormOptions';

const formSelect = (props) => {
  const options = [...props.options];
  return (
    <div className="input-field browser-default">
      <select
        className="browser-default priorityDrop"
        onChange={props.changed}
        value={props.value}
        name={props.id}
        id={props.id}
      >
        {options.map((option, i) => {
          return <FormOptions key={i} value={option} />;
        })}
      </select>
    </div>
  );
};

export default formSelect;
