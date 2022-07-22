import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Button, ListGroup, Modal} from 'react-bootstrap'
import { remove,progress, edit } from '../redux/Actions';
 
const Note = ({note}) => {
const dispatch = useDispatch();
const [show, setShow] = useState(false);
const [editable, setEditable] = useState(false)
const [editContent, setEditContent] = useState(note.name);

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
          {editable ?
            <ListGroup.Item  className="col-sm-4 col-6" value={editContent} onChange={(e) => setEditContent(e.target.value)}/>
          :
          <ListGroup.Item className='col-sm-4 col-6'>
            <h6 className={note.progress ? 'text-primary': 'text-muted text-decoration-line-through'}>{note.content}</h6>
          </ListGroup.Item>
          }
          {/* <ListGroup.Item  className='col-sm-4 col'>
            <h6 className={note.progress ? 'text-primary': 'text-muted text-decoration-line-through'}>{note.content}</h6>
          </ListGroup.Item> */}
          <Button variant='primary'>X</Button>        
          {/* <Button className='btn btn-danger' onClick={()=>dispatch(remove(note.id))}>-</Button> */}
          <Button variant="danger" disabled={editable} onClick={()=>setShow(true)}>-</Button>
          <Button variant="warning" disabled={editable} onClick={()=>dispatch(progress(note.id))}>{note.progress ? "S" :"C" }</Button>
          <Popover />
        </div>
    </div>
  )
}

export default Note