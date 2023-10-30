import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allapis'
import { Col, Container, Row } from 'react-bootstrap'




function View({updatedState}) {

  // state to update delete
const [deleteUpdate, setDeleteUpdate]=useState({})

  const[allVideos,setAllVideos]=useState([])

  const accessAllVideos=async()=>{
    const result= await getAllVideos()
    if(result.status>=200&&result.status<300){
      setAllVideos(result.data)
      // console.log(result);
    }
  }

useEffect(()=>{
   accessAllVideos()
},[updatedState,deleteUpdate])

// console.log(allVideos);


  return (
    <Container>
    <Row className='text-center justify-content-center align-item-center'>
      {
        allVideos.length>0?(
          allVideos.map(i=>
            <Col lg={4} md={6}>
            <VideoCard deletefunction={setDeleteUpdate} video={i}></VideoCard>
            </Col>
            )
        ):<h2>No videos in your collection</h2>
      }
      
    </Row>
    </Container>
  )
}

export default View