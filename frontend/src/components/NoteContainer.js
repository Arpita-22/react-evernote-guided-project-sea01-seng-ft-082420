import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state={
      notes:[],
      selectedNote:" "
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
    console.log('hi', note)
  }


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} displayNote={this.displayNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
