import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'




function Home() {

  // state for state-lifting
  const [addUpdate,setAddUpdate]=useState({})

  return (
    <>
    
    <div style={{overflowX:'hidden'}} className='mt-4'>
      <Container>
      <Row >
        <Col lg={8} md={12}>
      <h2 className='m-5 head3'>Let's upload and play</h2>
      </Col>
       
         <Col lg={2} md={6}  sm={4} className='text-center mb-3'>
        <Add update={setAddUpdate}></Add>
        </Col>

         <Col lg={2} md={6} sm={4} className='text-center mb-3'>
      <Link to={'/watch-history'} style={{textDecoration:'none'}} >
        <button  className='a2 btn btn3 mt-5'><i class="fa-solid fa-clock-rotate-left text-white fs-6"></i> Watch History</button>
        </Link>
        </Col>

      </Row>
      </Container>

      <div>
        
      </div>
      <Row>

       

        <Col lg={7} md={12}>
        <View updatedState={addUpdate} ></View>
        </Col>
        <Col lg={1}></Col>

        <Col lg={3} md={12} className='ms-1'>
        <Categories></Categories>
         </Col>
      </Row>
    </div>
    
    </>
  )
}

export default Home