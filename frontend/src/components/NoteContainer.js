import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state={
      notes:[],
      selectedNote:" ",
      clicked:false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(data => this.setState({
      notes:data
    }))

  }

  
  displayNote = (note) =>{
    // console.log("1111111" ,  note)
    this.setState({
      ...this.state, selectedNote: note
    })
  }

  editNote = (note) =>{
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  updateNote = (note, id) =>{
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
      })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);    
      let updatedNotes = []
      this.state.notes.map((note) => {
        if(note.id === data.id) {
          note.title = data.title
          note.body = data.body
        }
        updatedNotes.push(note)
      });
      this.setState({
        notes: updatedNotes
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  addNewNote = (e) =>{
    // console.log(e)
    fetch('http://localhost:3000/api/v1/notes', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  }


  render() {
    // console.log(this.state.notes)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} displayNote={this.displayNote} addNewNote={this.addNewNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote} clicked={this.state.clicked} displayNote={this.displayNote} updateNote={this.updateNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
