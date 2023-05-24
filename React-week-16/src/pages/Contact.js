import React from 'react'
import Image from 'react-bootstrap/Image';
import moviePosters from '../images/movies.jpg'

const Contact = () => {
  return (
    <div>
        <Image roundedCircle src={moviePosters} fluid />
    </div>
  )
}

export default Contact