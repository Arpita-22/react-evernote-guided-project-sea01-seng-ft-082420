import React from 'react';


 let truncate= (str) =>{
  return str.length > 30 ? str.slice(0, 20) + "..." : str;
}

const NoteItem = (props) => {

   return(
     <li onClick={() => props.displayNote(props.note)}>  
      <h2>{props.note.title}</h2>
      <p >{truncate(props.note.body)}</p>
    </li>
);
}

export default NoteItem;
