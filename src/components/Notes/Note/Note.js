import React from 'react';
import classes from './Note.module.css';

const note = (props) => {
  const mi = 'material-icons';
  const wrapperClasses = [classes.Note, classes.Medium];
  const editNote = [classes.EditNote, mi];
  const deleteNote = [classes.DeleteNote, mi];
  return (
    <div className={wrapperClasses.join(' ')}>
      <span onClick={() => props.completeClicked(props.project, props.id)}>
        {props.complete ? (
          <i className="material-icons hide">check_circle</i>
        ) : null}
      </span>
      <p>{props.title}</p>
      <div>
        <i className={editNote.join(' ')}>edit</i>
        <i
          onClick={() => props.deleteClicked(props.project, props.id)}
          className={deleteNote.join(' ')}
        >
          delete_forever
        </i>
      </div>
    </div>
  );
};

export default note;
