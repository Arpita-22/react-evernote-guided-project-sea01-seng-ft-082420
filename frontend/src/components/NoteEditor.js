import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props)
    this.state={
      note:{
        title:this.props.selectedNote.title,
        body:this.props.selectedNote.body
      }
    }
  }

  handleEditTitle = (e) =>{
    this.setState({
       note:{
       ...this.state.note, title: e.target.value
      }
    })
  }

  handleEditBody = (e) =>{
    this.setState({
      note:{
       ...this.state.note,body: e.target.value
      }
    })
  }


  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.updateNote(this.state.note, this.props.selectedNote.id)
  }

  componentDidUpdate(prevState){
    if (this.props.selectedNote.id !== prevState.selectedNote.id) {
      this.setState({ 
        note:{
          title:this.props.selectedNote.title,
          body:this.props.selectedNote.body
        }
       });
    }
  }

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)} > 
        <input value={this.state.note.title} type="text" name="title" onChange={(e) => this.handleEditTitle(e)} />
        <textarea name="body" value={this.state.note.body} onChange={(e) => this.handleEditBody(e)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={(e) =>this.props.editNote(e)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
