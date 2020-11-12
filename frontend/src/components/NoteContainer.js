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
      value: 0
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

  //displays the selected note in the noteviewer
  displayNote = (note) =>{
    this.setState({
      ...this.state, selectedNote: note
    })
  }

//Takes the selected note to the editmode i.e in the noteeditor
  editNote = (note) =>{
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

//updates a note in the database
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
        return updatedNotes.push(note)
      });
      this.setState({
        notes: updatedNotes
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }
// adds a new note with default title and placeholder body
  addNewNote = (e) =>{
    const newNote ={
      title:"default",
      body:"placeholder",
      user_id: 3
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
    this.setState({
      notes:[...this.state.allNotes.filter(note => note.title.includes(e.target.value) || note.body.includes(e.target.value))]
    })
  }
//removes note from the database
  removeNote = (e) =>{
    fetch(`http://localhost:3000/api/v1/notes/${e.selectedNote.id}`, {
      method: 'DELETE'
    }).then(() => {
    this.setState({
      selectedNote: " ",
      notes :[...this.state.notes.filter(note => note !== e.selectedNote)]
    })
       console.log('removed');
    }).catch(err => {
      console.error(err)
    });

  }
// sort's a note by both ascending and descending order
  sortNote = () =>{
    if (this.state.value % 2 === 0){
      this.setState({
        notes:[...this.state.notes.sort((a, b) => (b.title.toLowerCase() > a.title.toLowerCase())? 1 : -1)],
        allNotes:[...this.state.allNotes.sort((a, b) => (b.title.toLowerCase() > a.title.toLowerCase())? 1 : -1)],
        ...this.state.value, value: this.state.value + 1
      })
    }
    else{
    this.setState({
      notes:[...this.state.notes.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase())? 1 : -1)],
      allNotes:[...this.state.allNotes.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase())? 1 : -1)],
      ...this.state.value, value: this.state.value + 1
    })
    }
  }

  render() {
    // console.log(this.state.notes.sort((a, b) => a.title.localeCompare(b.title)))
    // console.log(this.state.notes.sort((a, b) => b.title.localeCompare(a.title)))
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <div className='container'>
          <Sidebar notes={this.state.notes} displayNote={this.displayNote} addNewNote={this.addNewNote} removeNote={this.removeNote} sortNote={this.sortNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote} clicked={this.state.clicked} displayNote={this.displayNote} updateNote={this.updateNote} removeNote={this.removeNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
