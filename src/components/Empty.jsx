import React from 'react'
import Image from 'react-bootstrap/Image';
import empty from '../images/empty.gif'

const Empty = () => {
  return (
    <div className='row justify-content-center my-5'>
      <Image src={empty} alt="Empty" className='img ' />
      <p className='text-center fs-5 my-2 text-muted'>Add a note ... It's empty now!!</p>
    </div>
  )
}

export default Empty