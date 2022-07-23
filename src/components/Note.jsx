import React, { useState } from 'react'
import '../App.scss'
import {useDispatch} from 'react-redux'
import {Button,Col,Container,Form, Modal, Row} from 'react-bootstrap'
import { remove,progress, updateTodo } from '../redux/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleMinus, faClipboardCheck, faHourglass, faPencil } from '@fortawesome/free-solid-svg-icons';
 
const Note = ({note}) => {
const dispatch = useDispatch();
const [show, setShow] = useState(false);
const [editable, setEditable] = useState(false)
const [editContent, setEditcontent] = useState(note.content);

const Popover = () =>{
  return(
    <Modal show={show} onHide={()=>setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure to Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-break'>{note.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={()=>setShow(false)}>No</Button>
        <Button variant="danger" onClick={()=>dispatch(remove(note.id))}>Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}
  return (
    <Container fluid>
        <Row className='note p-3 justify-content-center gap-2 mb-2'>
          <Col sm={8}>
          {editable ?
            <Col sm={10}><Form.Control required value={editContent} onChange={(e) => setEditcontent(e.target.value)}/></Col>
          :
          <Col sm={10}>
            <p className={note.progress ? 'text-dark fw-bold': 'fw-bold text-muted text-decoration-line-through'}>{note.content}</p>
          </Col>
          }
          </Col>
          <Col sm={2} className='d-flex justify-content-center gap-2'>
          <Button variant={editable ?'success' :'primary'} onClick={() =>{
            return(
              setEditable(!editable),
              dispatch(updateTodo({...note, content : editContent}))
            )
          } }>{editable?<FontAwesomeIcon icon={faCircleCheck}/>:<FontAwesomeIcon icon={faPencil}/>}</Button>        
          {/* <Button className='btn btn-danger' onClick={()=>dispatch(remove(note.id))}>-</Button> */}
          <Button variant="danger" disabled={editable} onClick={()=>setShow(true)}><FontAwesomeIcon icon={faCircleMinus} /></Button>
          <Button variant="warning text-white" disabled={editable} onClick={()=>dispatch(progress(note.id))}>{note.progress ? <FontAwesomeIcon icon={faClipboardCheck}/>: <FontAwesomeIcon icon={faHourglass}/> }</Button>
          </Col>
          <Popover />
        </Row>
    </Container>
  )
}

export default Note