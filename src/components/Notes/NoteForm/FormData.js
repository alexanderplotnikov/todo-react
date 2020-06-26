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
    console.log(name);
    console.log(value);

    setTimeout(() => {
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
    let newNote = {};
    const note = this.state.formControls;
    Object.keys(note).map((name) => {
      let { value } = note[name];
      value !== null
        ? (newNote[name] = value)
        : (newNote[name] = this.props.prefill[name]);
    });
    console.log(event.target);
    this.props.saveNoteClicked(event, newNote);
    event.preventDefault();
  };
  resetForm = (event) => {
    this.setState(this.baseState);
    this.props.cancelNoteClicked();
    event.preventDefault();
  };
  render() {
    const { title, dueDate, description } = this.state.formControls;
    return (
      <form className={classes.NoteForm}>
        <div className="row">
          <p>Title {this.state.formControls.title.value}</p>
          <p>DefaultVal {this.props.defaultVal}</p>
          <p>Date {this.state.formControls.dueDate.value}</p>
          <p>Comment {this.state.formControls.description.value}</p>
          <p>Priority {this.state.formControls.priority.value}</p>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              defaultValue={this.props.defaultVal}
              value={title.value}
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
              defaultValue={this.props.defaultVal}
              value={dueDate.value}
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
              value={description.value}
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
              defaultValue={this.props.defaultVal}
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
            <select className="browser-default projSelectDrop" id="projId">
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
