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

  render() {
    console.log(this.props.selectedNote)
    return (
      <form className="note-editor">
        <input title={this.state.title} type="text" name="title" />
        {/* {this.props.selectedNote.title} */}
        {/* {this.props.selectedNote.body} */}
        <textarea name="body"  body={this.props.selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
