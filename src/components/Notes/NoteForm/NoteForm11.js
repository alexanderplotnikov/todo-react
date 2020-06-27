import React, { Component } from 'react';
import classes from './NoteForm.module.css';
import FormButton from './FormButton/FormButton';
import FormSelect from './FormSelect/FormSelect';
import FormInput from './FormInput/FormInput';

class Form extends Component {
  constructor(props) {
    super(props);
    this.newObj = {};
    this.transformed = (() => {
      Object.keys(this.props.prefill).map((name) => {
        return (this.newObj[name] = { value: this.props.prefill[name] });
      });
    })();
  }

  state = {
    prefill: {
      title: '',
      description: '',
      dueDate: '',
      complete: false,
      priority: 'high',
      project: '',
    },
    formControls: {
      title: {
        value: '',
      },
      description: {
        value: '',
      },
      dueDate: {
        value: '',
      },
      complete: {
        value: '',
      },
      priority: {
        value: '',
      },
      project: {
        value: '',
      },
    },
    newFormControls: { ...this.props.prefill },
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };
  render() {
    const selectProjectOptions = ['one'];
    const selectPriorityOptions = ['two'];
    const note = { ...this.props.prefill };
    return (
      <form className={classes.NoteForm}>
        <FormInput
          name="title"
          value={this.state.formControls.title.value}
          changed={this.changeHandler}
          inputFor={'Title'}
        />
        <FormInput
          name="dueDate"
          value={this.state.formControls.dueDate.value}
          changed={this.changeHandler}
          applyClass={'datepicker'}
          inputFor={'Due Date'}
        />
        <FormInput
          name="description"
          value={this.state.formControls.description.value}
          inputFor={'Comment'}
          changed={this.changeHandler}
        />
        <div className={[classes.AddProjDrop, 'row'].join(' ')}>
          <FormSelect type={note.project} options={selectProjectOptions} />
          <FormSelect type={note.priority} options={selectPriorityOptions} />
        </div>
        <div className="row addTaskButtons">
          <FormButton clicked={this.props.addNoteClicked}>Add Task</FormButton>
          <FormButton clicked={this.props.saveNoteClicked}>Save</FormButton>
          <FormButton>Cancel</FormButton>
        </div>
      </form>
    );
  }
}

export default Form;
