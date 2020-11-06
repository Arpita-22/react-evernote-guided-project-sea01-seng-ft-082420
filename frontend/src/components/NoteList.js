import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {/* Render list of notes here... */}
      {props.notes.map(note => <NoteItem key={note.id} note={note} displayNote={props.displayNote}/>)}
    </ul>
  );
}

export default NoteList;
