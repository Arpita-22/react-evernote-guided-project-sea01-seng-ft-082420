import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state={
      notes:[],
      allNotes:[],
      selectedNote:" ",
      clicked:false,
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(data => this.setState({
      notes:data,
      allNotes:data
    }))

  }

  
  displayNote = (note) =>{
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
    const newNote ={
      title:"default",
      body:"placeholder"
    }
    fetch('http://localhost:3000/api/v1/notes', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        notes:[...this.state.notes, newNote],
        allNotes:[...this.state.allNotes, newNote]
      })
    console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
 
  handleSearch = (e) =>{
    this.state.notes = this.state.allNotes
    this.setState({
      notes:[...this.state.notes.filter(note => note.title.includes(e.target.value) || note.body.includes(e.target.value))]
    })
  }

  removeNote = (e) =>{
    this.setState({
      selectedNote: " ",
      notes :[...this.state.notes.filter(note => note !== e.selectedNote)]
    })
  }

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <div className='container'>
          <Sidebar notes={this.state.notes} displayNote={this.displayNote} addNewNote={this.addNewNote} removeNote={this.removeNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote} clicked={this.state.clicked} displayNote={this.displayNote} updateNote={this.updateNote} removeNote={this.removeNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
