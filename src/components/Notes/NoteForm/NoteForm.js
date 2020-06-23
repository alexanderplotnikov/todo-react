import React from 'react';

const NoteForm = (props) => (
  <form className="addNoteForm ">
    <div className="row">
      <div className="input-field">
        <input name="titleNote" id="titleNote" type="text" />
        <label htmlFor="titleNote">Title</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field">
        <input type="text" name="dueDate" id="dueDate" className="datepicker" />
        <label htmlFor="bdate">Due Date</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field">
        <input name="descNote" id="descNote" type="text" />
        <label htmlFor="descNote">Comment</label>
      </div>
    </div>
    <div className="addProjDrop row">
      <div className="input-field browser-default">
        <select className="browser-default priorityDrop" id="priority">
          <option value="" disabled selected>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="input-field browser-default">
        <select className="browser-default projSelectDrop" id="projId">
          <option value="" disabled selected>
            Project
          </option>
          {/*Automated in js*/}
        </select>
      </div>
    </div>
    <div className="row addTaskButtons">
      <a className="waves-effect waves-light btn addTaskBtn ">Add Task</a>
      <a className="waves-effect waves-light btn editTaskBtn hide">Save</a>
      <a className="waves-effect waves-light btn cancelTaskBtn ">Cancel</a>
    </div>
  </form>
);

export default NoteForm;
