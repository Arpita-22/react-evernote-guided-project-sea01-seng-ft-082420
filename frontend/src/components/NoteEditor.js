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
    // console.log(this.state.note)  
    this.props.updateNote(this.state.note, this.props.selectedNote.id)
  //   fetch(`http://localhost:3000/api/v1/notes/${this.props.selectedNote.id}`, {
  //   method: 'PATCH', 
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(this.state.note)
  //   })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Success:', data);
  //   })
  // .catch((error) => {
  //   console.error('Error:', error);
  //   });
  }


  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)} > 
        <input defaultValue={this.state.note.title} type="text" name="title" onChange={(e) => this.handleEditTitle(e)} />
        <textarea name="body"  defaultValue={this.state.note.body} onChange={(e) => this.handleEditBody(e)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={(e) =>this.props.editNote(e)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
