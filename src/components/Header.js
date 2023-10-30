import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='w-100'>  <Navbar className="bg-body-tertiary">
    <Container>
      <Link to={"/"} style={{textDecoration:'none'}}>
      <Navbar.Brand href="" className='navhead'>

      
        <img
          alt=""
          src="https://i.postimg.cc/Rqr4r5yr/2f981bf73380a0d72eb517e4d8af1800-removebg-preview.png"
          width="40px"
          height="40px"
          className="d-inline-block align-top"
        />{' '}
       <span className='span1'>V</span>iew <span className='span1'>V</span>ista
      </Navbar.Brand></Link>
    </Container>
  </Navbar>
</div>
  )
}

export default Header