import React from 'react';
import classes from './NoteForm.module.css';

class FormData extends React.Component {
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
    });
    this.props.saveNoteClicked(event, newNote, projIndex, noteIndex);
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

    return (
      <form className={classes.NoteForm}>
        <div className="row">
          <div className="input-field">
            <input
              value={title.value ? null : defaultTitle}
              onChange={this.changeHandler}
              name="title"
              id="titleNote"
              type="text"
            />
            <label forhtml="titleNote">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              value={dueDate.value ? null : defaultDueDate}
              onBlur={this.changeDateHandler}
              type="text"
              name="dueDate"
              id="dueDate"
              className="datepicker"
            />
            <label forhtml="bdate">Due Date</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              value={description.value ? null : defaultDescription}
              onChange={this.changeHandler}
              name="description"
              id="descNote"
              type="text"
            />
            <label forhtml="descNote">Comment</label>
          </div>
        </div>
        <div className={[classes.AddProjDrop, 'row'].join(' ')}>
          <div className="input-field browser-default">
            <select
              value={priority.value ? null : defaultPriority}
              onBlurCapture={this.changeHandler}
              className="browser-default priorityDrop"
              id="priority"
              name="priority"
            >
              <option>Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="input-field browser-default">
            <select
              className="browser-default projSelectDrop"
              id="projId"
              value={project.value ? null : defaultProject}
              onBlurCapture={this.changeHandler}
              name="project"
            >
              <option>Project</option>
              <option value="school">School</option>
              <option value="work">Work</option>
            </select>
          </div>
        </div>
        <div className="row addTaskButtons">
          {this.props.isAdding ? (
            <button
              onClick={(event) => {
                this.props.addNoteClicked(
                  event,
                  this.state.formControls,
                  (() => this.resetForm(event))()
                );
              }}
              className="waves-effect waves-light btn addTaskBtn"
            >
              Add Task
            </button>
          ) : (
            <button
              onClick={(event) => this.saveNoteHandler(event)}
              className="waves-effect waves-light btn editTaskBtn"
            >
              Save
            </button>
          )}
          <button
            onClick={this.resetForm}
            className="waves-effect waves-light btn cancelTaskBtn"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default FormData;
