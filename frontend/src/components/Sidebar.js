import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={()=> this.props.sortNote()} >Sort</button>
        <NoteList notes={this.props.notes} displayNote={this.props.displayNote} />
        <button onClick={(e) => this.props.addNewNote(e)} >New</button>
      </div>
    );
  }
}

export default Sidebar;
