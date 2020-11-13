import React, { Component } from 'react';
import NoteList from './NoteList';



class Sidebar extends Component {
  render() {
    const { notes,sortNote,displayNote,addNewNote} = this.props
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={()=> sortNote()} >Sort</button>
        <NoteList notes={notes} displayNote={displayNote} />
        <button onClick={(e) => addNewNote(e)} >New</button>
      </div>
    );
  }
}

export default Sidebar;
