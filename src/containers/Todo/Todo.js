import React, { Component } from 'react';
import Notes from '../../components/Notes/Notes';
import classes from './Todo.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
//import NoteForm from '../../components/Notes/NoteForm/NoteForm';

// Temporary FormData for testing purposes
import FormData from '../../components/Notes/NoteForm/FormData';

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
      work: [
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
  };
  addNoteHandler = (event, note) => {
    let newNote = {};
    Object.keys(note).map((name) => {
      let { value } = note[name];
      return (newNote[name] = value);
    });
    const proj = newNote.project;
    const updatedNotes = { ...this.state.notes };
    let notesArr = [];
    if (updatedNotes[proj]) {
      notesArr = [...updatedNotes[proj]];
    }
    notesArr.push(newNote);
    this.setState({
      notes: {
        ...this.state.notes,
        [proj]: notesArr,
      },
    });

    this.addingCancelHandler();
    event.preventDefault();
  };
  getPrefill() {
    if (this.state.editing) {
      return { ...this.state.prefill };
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
  cancelNoteHandler = (event) => {
    this.addingCancelHandler();
    event.preventDefault();
  };
  render() {
    // const prefill = this.getPrefill();
    // console.log(this.state.notes);
    return (
      <div className={classes.Content}>
        <Modal
          show={this.state.adding || this.state.editing}
          modalClosed={this.addingCancelHandler}
        >
          {/* <NoteForm
            prefill={prefill}
            addNoteClicked={this.addNoteHandler}
            saveNoteClicked={this.saveNoteHandler}
          /> */}
          <FormData
            addNoteClicked={this.addNoteHandler}
            saveNoteClicked={this.saveNoteHandler}
            cancelNoteClicked={this.addingCancelHandler}
            isAdding={this.state.adding}
            defaultVal={'low'}
            prefill={this.getPrefill()}
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
