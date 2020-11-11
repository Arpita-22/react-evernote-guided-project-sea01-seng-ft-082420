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
      this.setState({
        ...this.state.notes
      })
      console.log('Success:', data);
      })
    .catch((error) => {
      console.error('Error:', error);
      });

  }

  addNewNote = (e) =>{
    // console.log(e)
  }


  render() {
    // console.log(this.state.selectedNote)
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
