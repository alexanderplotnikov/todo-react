import React from 'react';
import classes from './NoteForm.module.css';
import FormInput from './FormInput/FormInput';
import FormSelect from './FormSelect/FormSelect';
import FormButton from './FormButton/FormButton';

class NoteForm extends React.Component {
  state = {
    formControls: {
      title: {
        value: null,
      },
      description: {
        value: null,
      },
      dueDate: {
        value: null,
      },
      complete: {
        value: null,
      },
      priority: {
        value: null,
      },
      project: {
        value: null,
      },
    },
  };
  baseState = this.state;

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
  changeDateHandler = (event) => {
    const doneBtn = document.querySelector('.datepicker-done');
    const name = event.target.name;
    const id = event.target.id;
    doneBtn.addEventListener('click', () => {
      const value = document.getElementById(`${id}`).value;
      this.setState({
        formControls: {
          ...this.state.formControls,
          [name]: {
            ...this.state.formControls[name],
            value,
          },
        },
      });
    });
  };
  saveNoteHandler = (event) => {
    const projIndex = this.props.projIndex;
    const noteIndex = this.props.noteIndex;
    let newNote = {};
    const note = this.state.formControls;
    Object.keys(note).map((name) => {
      let { value } = note[name];
      value !== null
        ? (newNote[name] = value)
        : (newNote[name] = this.props.prefill[name]);
      return value;
    });
    this.props.saveNoteClicked(event, newNote, projIndex, noteIndex);
    this.resetForm(event);
    event.preventDefault();
  };
  resetForm = (event) => {
    this.setState(this.baseState);
    this.props.cancelNoteClicked();
    event.preventDefault();
  };
  render() {
    const defaultTitle = this.props.prefill.title;
    const defaultDueDate = this.props.prefill.dueDate;
    const defaultDescription = this.props.prefill.description;
    const defaultPriority = this.props.prefill.priority;
    const defaultProject = this.props.prefill.project;

    const {
      title,
      dueDate,
      description,
      priority,
      project,
    } = this.state.formControls;

    const priorityOptions = ['Priority', 'low', 'medium', 'high'];
    const projectOptions = ['Project', 'school', 'work'];

    return (
      <form className={classes.NoteForm}>
        <FormInput
          value={title.value ? null : defaultTitle}
          changed={this.changeHandler}
          name="title"
        />
        <FormInput
          value={dueDate.value ? null : defaultDueDate}
          blurChanged={this.changeDateHandler}
          name="dueDate"
          applyClass="datepicker"
        />
        <FormInput
          value={description.value ? null : defaultDescription}
          changed={this.changeHandler}
          name="description"
        />
        <div className={[classes.AddProjDrop, 'row'].join(' ')}>
          <FormSelect
            options={priorityOptions}
            value={priority.value ? null : defaultPriority}
            changed={this.changeHandler}
            id="priority"
          />
          <FormSelect
            options={projectOptions}
            value={project.value ? null : defaultProject}
            changed={this.changeHandler}
            id="project"
          />
        </div>
        <div className="row addTaskButtons">
          {this.props.isAdding ? (
            <FormButton
              clicked={(event) => {
                this.props.addNoteClicked(
                  event,
                  this.state.formControls,
                  (() => this.resetForm(event))()
                );
              }}
            >
              Add Task
            </FormButton>
          ) : (
            <FormButton clicked={(event) => this.saveNoteHandler(event)}>
              Save
            </FormButton>
          )}
          <FormButton clicked={this.resetForm}>Cancel</FormButton>
        </div>
      </form>
    );
  }
}

export default NoteForm;
