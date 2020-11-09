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

  handleEditTitle = (e,note) =>{
    // console.log(e.target.value)
    this.setState({
      ...this.state,title:e.target.value
    })
    // console.log(this.state.title)
  }

  handleEditBody = (note) =>{
    console.log("body")
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
  }

  render() {
    console.log(this.state.title)
    const {selectedNote} = this.props
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <input value={selectedNote.title} type="text" name="title" onChange={(e) => this.handleEditTitle(e,selectedNote.title)} />
        <textarea name="body"  value={selectedNote.body} onChange={() => this.handleEditBody(selectedNote.body)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
