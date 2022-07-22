import React, { useState } from 'react'
import Note from './Note';
import {useSelector} from 'react-redux'
import { Container, Form, Row} from 'react-bootstrap';
 
const NoteList = () => {
  let contents = useSelector(state => state);
  const [input, setInput] = useState('');
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Form.Group className="col-4">
          <Form.Control
            required
            value={input}
            type="text"
            placeholder="Search task"
            onChange={(e)=>setInput(e.target.value)}
            
          />
        </Form.Group>
      </Row>
      {contents.filter(note =>(note.content.toLowerCase().includes(input.toLowerCase()))).map((content)=>{
        return(
          <Note key={content.id} note={content}/>
        )
      })}
    </Container>
  )
}

export default NoteList