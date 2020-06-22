import React, { Component } from 'react';
import Notes from '../../components/Notes/Notes';
import Aux from '../../hoc/Aux/Aux';

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
  render() {
    return (
      <Aux>
        <div>Sidebar</div>
        <Notes notes={this.state.notes} toggleCheck={this.toggleCheckHandler} />
      </Aux>
    );
  }
}

export default Todo;
