import React,{useRef, useState} from 'react'
import {Button,Col,Form, Row} from 'react-bootstrap'
import { data } from '../redux/States';
import { add } from '../redux/Actions';
import {useDispatch} from 'react-redux'
import uniqid from 'uniqid';

const InputPanel = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(data.content);
  const ref = useRef();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    if (form.checkValidity() === true) {
      e.preventDefault();
      dispatch( add({id: uniqid(),content : name}));
      ref.current.value='';
      setName('');
    }
  };

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

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-3 d-flex justify-content-center">
        <Form.Group className='col-sm-6'>
          <Form.Control
            value = {data.content}
            onChange = {(e)=>setName(e.target.value)}
            ref={ref}
            required
            type="text"
            placeholder="Enter the note"
          />
        </Form.Group>
        <Form.Group className='mx-2'>
          <Button variant="success" type="submit">Add Note</Button>
        </Form.Group>
        </Form>
    </div>
  )
}

export default InputPanel