import React, { Component } from 'react';
import classes from './NoteForm.module.css';
import FormButton from './FormButton/FormButton';
import FormSelect from './FormSelect/FormSelect';
import FormInput from './FormInput/FormInput';

class Form extends Component {
  state = {};

  render() {
    const note = { ...this.props.prefill };
    console.log(note.project);
    const selectPriorityOptions = ['Priority', 'low', 'medium', 'high'];
    const selectProjectOptions = ['Project', 'Hw', 'Math', 'Eng'];

    return (
      <form className={classes.NoteForm}>
        <FormInput type={note.title} inputFor={'Title'} />
        <FormInput
          type={note.dueDate}
          applyClass={'datepicker'}
          inputFor={'Due Date'}
        />
        <FormInput type={note.description} inputFor={'Comment'} />
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
