import React, { Component } from 'react';
import Notes from '../../components/Notes/Notes';
import classes from './Todo.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';

class Todo extends Component {
  state = {
    notes: {
      school: [
        {
          title: 'Math h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: false,
          project: 'School',
        },
        {
          title: 'Engl h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: false,
          project: 'School',
        },
      ],
      1: [
        {
          title: 'Eng h/w',
          description: 'Ch 2. Ex: 3,5,7',
          dueDate: '2020/06/15',
          complete: true,
          project: 'School',
        },
      ],
    },
    projects: {
      title: 'School',
    },
    adding: true,
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
    this.setState({ adding: false });
  };
  render() {
    return (
      <div className={classes.Content}>
        <Modal
          show={this.state.adding}
          modalClosed={this.addingCancelHandler}
        ></Modal>
        <Sidebar />
        <Notes notes={this.state.notes} toggleCheck={this.toggleCheckHandler} />
      </div>
    );
  }
}

export default Todo;
