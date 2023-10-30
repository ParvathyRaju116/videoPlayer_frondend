import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-100'>

      <div className='footer p-5 fixed-bottum'>
      <Container>
        <Row >
          <Col className='mt-3 p-5' lg={4} md={4} sm={12} >
          
            <img
              alt=""
              src="https://i.postimg.cc/Rqr4r5yr/2f981bf73380a0d72eb517e4d8af1800-removebg-preview.png"
              width="40px"
              height="40px"
              className="d-inline-block align-top"
            />{' '}
            <span className="span2"><span className='span1'>V</span>iew <span className='span1'>V</span>ista <br />
</span>

            <p>The easy way to create stunning videos, add subtitles and grow your audience.</p>

          </Col>




          <Col className='p-5'  lg={3} md={4} sm={12}>
          <h5 className='footerhead mt-3'>Links</h5>
          <Link  to={'/'}style={{textDecoration:'none'}}><a  className='links' >Home</a></Link><br />
          <Link to={'/home'}style={{textDecoration:'none'}}><a  className='links'>Upload</a></Link>
          <br />
          <Link to={'/watch-history'}style={{textDecoration:'none'}}><a  className='links'>Watch History</a></Link>
          
          
          </Col>



          


          <Col className='p-5'  lg={5} md={4} sm={12}>

            <h5 className='mt-3 footerhead'>Contact Us</h5>
              <input type="email" placeholder='Enter Email'  className='form-control'/><br />
              <textarea name="" id="" placeholder='Message' className='form-control'></textarea> <br />
              <button>Submit</button> <br />
            <a href="" className='mt-5'><i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i></a>

          </Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}

export default Footer