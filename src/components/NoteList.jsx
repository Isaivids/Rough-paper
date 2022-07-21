import React, { useState } from 'react'
import Note from './Note';
import {useSelector} from 'react-redux'
import { Form} from 'react-bootstrap';
 
const NoteList = () => {
  let contents = useSelector(state => state);
  const [input, setInput] = useState('');
  return (
    <div>
      <div className='d-flex justify-content-center col'>
        <Form.Group >
          <Form.Control
            required
            value={input}
            type="text"
            placeholder="Search a task"
            onChange={(e)=>setInput(e.target.value)}
          />
        </Form.Group>
      </div>
      {contents.filter(note =>(note.content.toLowerCase().includes(input.toLowerCase()))).map((content)=>{
        return(
          <Note key={content.id} note={content}/>
        )
      })}
    </div>
  )
}

export default NoteList