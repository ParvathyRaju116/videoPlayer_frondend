import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';
import { Container } from 'react-bootstrap';






function VideoCard({video,deletefunction}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async() =>{
      setShow(true);

      // body
      
      // id
      var id=uniqid()

      // title
      var video_title =video.caption

      // url
      var url =video.video_url

      // data
      var date =format(new Date(),'yyyy-MM-dd hh:mm:ss a')
      console.log(date);

      const body={id,video_title,url,date}
      if(body){
        // api call
        const result= await addHistory(body)
        console.log(result);
      }
    } 

    // api call for delete video
    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if(result.staus>=200 && result.staus<300){
        deletefunction(result.data)
     
      }
      // console.log(result);
    }

    // function for drag

    
    const dragStart=(e,id)=>{
      console.log("drag started ... source card id "+id);

      // store dragged data till it drop
      e.dataTransfer.setData("cardId",id)
    }
  return (
    <div >
       <Container>

      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} style={{ width: '18rem', }} className='ms-4 m-3'>
      <Card.Img variant="top" src={video.cover_img} style={{height:'180px'}}  onClick={handleShow} />
      <Card.Body cbody style={{ color:'text-white', height:'150px'}}>
        <Card.Text>
          {video.caption}
        </Card.Text>
        <div style={{backgroundColor:'transparent',border:0}} className='text-end'>
        <Trash2 onClick={()=>handleDelete(video.id)} className='text-danger  btn' size={56}></Trash2>
          </div>
      </Card.Body>
    </Card>






      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe 
            width="100%" 
            height="300" 
            src={video.video_url} title="Tamil × Malayalam Lofi songs ~ malayalam cover songs ~ tamil cover songs ~ malayalam lofi.tamil lofi" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          
        </Modal.Footer>
      </Modal>
      </Container>
    </div>




  )
}

export default VideoCard