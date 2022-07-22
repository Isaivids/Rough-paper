import React,{useRef, useState} from 'react'
import {Button,Form, Modal} from 'react-bootstrap'
import { data } from '../redux/States';
import { add,reset } from '../redux/Actions';
import {useDispatch, useSelector} from 'react-redux'
import uniqid from 'uniqid';

const InputPanel = () => {
  const dispatch = useDispatch();
  let contents = useSelector(state => state);
  const [name, setName] = useState(data.content);
  const ipref = useRef();
  const [show, setShow] = useState(false);
  // const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    if (form.checkValidity() === true) {
      e.preventDefault();
      dispatch( add({id: uniqid(),content : name,progress : true}));
      ipref.current.value='';
      setName('');
    }
  };

  const Popover = () =>{
    return(
      <Modal show={show} onHide={()=>setShow(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Clear confirmatione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete all Notes??</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>setShow(false)}>No</Button>
          <Button variant="danger" onClick={()=> {
            return (dispatch(reset()), setShow(!show));
          }}>Sure</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div>
    {/* <div className="my-3 d-sm-flex justify-content-center">
          <Form className='col-sm-6'>
            <input
              type ="text"
              value = {data.content}
              onChange = {(e)=>setName(e.target.value)}
              placeholder="Enter the note"
              ref={ref}
            />
          </Form>
          <Button 
          className='btn btn-success mx-4' disabled={!ref.current}
          onClick = {()=>{dispatch( add({id: uniqid(),content : name}));
            ref.current.value='';
            setName('');
          }} >Add note</Button>
      </div> */}

      <Form noValidate /*validated={validated}*/ onSubmit={handleSubmit} className="m-3 d-flex flex-wrap justify-content-center">
        <Form.Group className='col-sm-6 col-10'>
          <Form.Control
            value = {data.content}
            onChange = {(e)=>setName(e.target.value)}
            ref={ipref}
            required
            type="text"
            placeholder="Enter the note"
          />
        </Form.Group>
        <Form.Group className='mx-sm-2 my-4 my-sm-0 gap-sm-2'>
          <Button variant="success" disabled={!name} type="submit">Add Note</Button>
          {/* <Button variant="primary mx-2" disabled={!contents.length>0} onClick={()=>setShow(true)}>Clear All</Button> */}
          <Button variant='primary mx-2' className="position-relative" disabled={!contents.length>0} onClick={()=>setShow(true)}>
            Clear All
            {contents.length > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {contents.length}
              </span>
            : ''}
          </Button>
          <Popover/>
        </Form.Group>
        </Form>
    </div>
  )
}

export default InputPanel