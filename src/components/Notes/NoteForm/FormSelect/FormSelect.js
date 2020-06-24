import React, { Component } from 'react';
import FormOptions from './FormOptions';

class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }
  state = {
    value: this.props.type,
  };
  changeHandler(event) {
    this.setState({ value: event.target.value });
    alert('hey');
  }
  render() {
    const options = [...this.props.options];

    return (
      <div className="input-field browser-default">
        <select
          className="browser-default priorityDrop"
          value={this.props.type}
          defaultValue={this.props.type}
          onChange={this.changeHandler}
        >
          {options.map((option, i) => {
            return <FormOptions key={i} value={option} />;
          })}
        </select>
      </div>
    );
  }
}
// const formSelect = (this.props) => {
//   const options = [...this.props.options];
//   return (
//     <div className="input-field browser-default">
//       <select
//         className="browser-default priorityDrop"
//         defaultValue={this.props.type}
//       >
//         {options.map((option, i) => {
//           return <FormOptions key={i} value={option} />;
//         })}
//       </select>
//     </div>
//   );
// };

export default FormSelect;
