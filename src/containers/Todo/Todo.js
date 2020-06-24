import React, { Component } from 'react';
import Notes from '../../components/Notes/Notes';
import classes from './Todo.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import NoteForm from '../../components/Notes/NoteForm/NoteForm';
class Todo extends Component {
  state = {
    notes: {
      school: [
        {
          title: 'Math h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: true,
          priority: 'medium',
          project: 'Math',
        },
        {
          title: 'Engl h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: false,
          priority: 'medium',
          project: 'Hw',
        },
      ],
      1: [
        {
          title: 'Eng h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: true,
          priority: 'low',
          project: 'Eng',
        },
      ],
    },
    projects: {
      title: 'School',
    },
    adding: false,
    editing: false,
    prefill: {
      title: '',
      description: '',
      dueDate: '',
      complete: false,
      priority: 'high',
      project: '',
    },
  };
  toggleCheckHandler = (proj, note) => {
    const updatedNote = {
      ...this.state.notes,
    };
    const curNote = updatedNote[proj][note];
    curNote.complete = !curNote.complete;
    this.setState({
      notes: updatedNote,
    });
  };
  addingCancelHandler = () => {
    this.setState({ adding: false, editing: false });
  };
  addingHandler = () => {
    this.setState({ adding: true });
  };
  deleteNoteHandler = (proj, index) => {
    const updatedNote = {
      ...this.state.notes,
    };
    updatedNote[proj].splice(index, 1);
    this.setState({ notes: updatedNote });
  };
  editNoteHandler = (proj, index) => {
    const notePrefill = {
      ...this.state.notes[proj][index],
    };
    this.setState({ editing: true, prefill: notePrefill });
    console.log(this.state.prefill);
  };
  addNoteHandler = (event) => {
    alert('add note');
    event.preventDefault();
  };
  getPrefill() {
    if (this.state.editing) {
      return this.state.prefill;
    } else {
      return {
        title: '',
        description: '',
        dueDate: '',
        complete: false,
        priority: '',
        project: '',
      };
    }
  }
  saveNoteHandler = (event) => {
    alert('save clicked');

    this.addingCancelHandler();
    event.preventDefault();
  };
  render() {
    return (
      <div className={classes.Content}>
        <Modal
          show={this.state.adding || this.state.editing}
          modalClosed={this.addingCancelHandler}
        >
          <NoteForm
            prefill={this.getPrefill()}
            addNoteClicked={this.addNoteHandler}
            saveNoteClicked={this.saveNoteHandler}
          />
        </Modal>
        <Sidebar />
        <Notes
          addNoteClicked={this.addingHandler}
          deleteNoteClicked={this.deleteNoteHandler}
          editNoteClicked={this.editNoteHandler}
          notes={this.state.notes}
          toggleCheck={this.toggleCheckHandler}
        />
      </div>
    );
  }
}

export default Todo;
