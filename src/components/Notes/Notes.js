import React from 'react';
import Note from './Note/Note';
import classes from './Notes.module.css';
import Button from '../UI/Button/Button';

const notes = (props) => {
  let notes = Object.keys(props.notes).map((nKey) => {
    return [...Array(props.notes[nKey])].map((proj) => {
      return proj.map((note, i) => {
        return (
          <Note
            key={nKey + i}
            title={note.title}
            complete={note.complete}
            completeClicked={props.toggleCheck}
            deleteClicked={props.deleteNoteClicked}
            editClicked={props.editNoteClicked}
            project={nKey}
            id={i}
          />
        );
      });
    });
  });

  return (
    <div className={classes.Notes}>
      <div>{notes}</div>
      <Button clicked={props.addNoteClicked} btnType="add">
        Add Note
      </Button>
    </div>
  );
};

export default notes;
