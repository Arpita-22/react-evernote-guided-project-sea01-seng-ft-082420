import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props)
    this.state={
      title:" ",
      body:" ",
      user:{}
    }
  }

  editTitle = (note) =>{
    console.log('title')
  }

  editBody = (note) =>{
    console.log("body")
  }

  render() {
    const {selectedNote} = this.props
    return (
      <form className="note-editor">
        <input value={selectedNote.title} type="text" name="title" onChange={() => this.editTitle(selectedNote.title)} />
        <textarea name="body"  value={selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onChange={() => this.editBody(selectedNote.body)}/>
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
