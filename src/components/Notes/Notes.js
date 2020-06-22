import React from 'react';
import Note from './Note/Note';

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
            project={nKey}
            id={i}
          />
        );
      });
    });
  });
  /*
 <Note
      key={el.project}
      title={el.title}
      complete={el.complete}
      completeClicked={props.toggleCheck}
    />
 
 
 
 */
  return (
    <div>
      {notes}
      <button>Add Note</button>
    </div>
  );
};

export default notes;
