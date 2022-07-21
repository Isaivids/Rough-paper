import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Button, ListGroup, Modal} from 'react-bootstrap'
import { remove } from '../redux/Actions';
 
const Note = ({note}) => {
const dispatch = useDispatch();
const [show, setShow] = useState(false);

const Popover = () =>{
  return(
    <Modal show={show} onHide={()=>setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure to Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>{note.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={()=>setShow(false)}>No</Button>
        <Button variant="danger" onClick={()=>dispatch(remove(note.id))}>Sure</Button>
      </Modal.Footer>
    </Modal>
  )
}

  return (
    <div>
        <div className='mx-3 d-flex gap-4 my-3 justify-content-center'>
          <ListGroup.Item className='col-sm-4 col'>{note.content}</ListGroup.Item>
          <Button className='btn btn-primary'>+</Button>        
          {/* <Button className='btn btn-danger' onClick={()=>dispatch(remove(note.id))}>-</Button> */}
          <Button variant="danger" onClick={()=>setShow(true)}>-</Button>
          <Popover />
        </div>
    </div>
  )
}

export default Note