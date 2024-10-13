import React from 'react';
import { Component } from 'react';


class comp extends Component{
  constructor(props){
    super(props);
    this.state={
      notes:[]
    }
  }

API_URL="http://localhost:5555/";

componentDidMount(){
  this.refreshNotes();
}

async refreshNotes(){
  fetch(this.API_URL+"api/eventss").then(response=>response.json())
  .then(data=>this.setState({notes:data}));
}

render() {
  const{notes}=this.state;
  return(
    <div className='App'>
      <h2>hello</h2>
      {notes.map(note=>
        <div key={note.id}>
          <h3>{note.e_time}</h3>
        </div>
      )}
    </div>
  );
}
}


export default comp;