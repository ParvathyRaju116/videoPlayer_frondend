import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




function LandingPage() {
  return (
    <div>
      <div className='langingBody mb-5 mt-5'>
        <Container>
          <Row>
            <Col lg={6} md={12}>
            <img src="https://i.postimg.cc/QMgf35H6/1-f7c-Zomx-EUs-R2-AYQVl-UXZog.gif" alt="" className='landingimg' />
            </Col>
            <Col lg={6} md={12} className=' mt-5 pt-5 para'>

              <h2><i class="fa-solid fa-play text-white"></i> play   <i class="fa-solid fa-tv text-white"></i> watch   <i class="fa-solid fa-repeat text-white"></i>   repeate </h2>
              
              <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint explicabo quasi facilis cupiditate accusantium nobis quisquam nesciunt voluptate sit, architecto saepe itaque ducimus reprehenderit officiis perferendis ipsam? Voluptas, dolorem commodi  </p>
              <Link to={'/home'}><button className='btn1'>Get Started</button></Link>
              
              </Col>


          </Row>
        </Container>
        </div>
        <hr />

        <Container>
      <Row>
        <Col className='mt-5 mb-5'><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/W14PHNzq/lock.gif" />
      <Card.Body className='cbody'>
        <Card.Title className='text-white'>Upload Video</Card.Title>
        <hr />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam excepturi eos consequatur delectus eum animi soluta harum, at dicta earum nam commodi dolore mollitia sit sed, impedit aspernatur quo.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>

        <Col className='mt-5 mb-5'>
        <Card style={{ width: '18rem',  }}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/1zWC3dx8/gif-icons-menu-transition-animations-play.gif" />
      <Card.Body className='cbody'>
        <Card.Title className='text-white'>Categories</Card.Title>
        <hr />
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, commodi ea non dolorum maiores nemo. Illo cum corrupti ut magnam voluptatum beatae error quam at libero atque! Aliquam, consequatur velit!
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Col>

        <Col className='mt-5 mb-5'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/k5LQHvN6/youtube.gif" />
      <Card.Body className='cbody'>
        <Card.Title className='text-white'>Watch History</Card.Title>
        <hr />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel enim architecto consequatur quisquam eveniet hic labore voluptates? Odit, minima illo? Provident aliquam sunt, tempore sequi quod vel odio possimus.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
      
      
    </div>
  )
}

export default LandingPage