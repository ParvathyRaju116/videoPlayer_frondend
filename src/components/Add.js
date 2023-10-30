import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({update}) {

   // state to hold input datas
//   ----------------------------
   const [input,setInput]=useState({
    id:"",
    caption:"",
    cover_img:"",
    video_url:""
  })

  const setValues=(e)=>{
    let{value,name}=e.target 
    // console.log(value,name);
    setInput({...input,[name]:value})
    console.log(input);
  }

  // function to exract video link
//  -------------------------------
  const exrtactUrl=(e)=>{
     let videoUrl=e.target.value
    //  console.log(videoUrl);

    if(videoUrl.includes("v=")){
    let suburl=videoUrl.split("v=")[1]
    console.log(suburl);

    let finalurl=`https://www.youtube.com/embed/${suburl}?autoplay=1`
    setInput({...input,["video_url"]:finalurl})
    console.log(finalurl);

    }
  }

//  function for upload button

const addHandle=async()=>{
  let id=uniqid()

  setInput({...input,["id"]:id})

  const{caption,cover_img,video_url}=input

 if (caption=="" || cover_img=="" || video_url==""){
    toast.error(" all input are requier", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
 }
  else{
    const result = await addVideo(input)
    console.log(result);
  
    if(result.status>=200 && result.status<300){

      // update state of home
      update(result.data)

      toast.success("video added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    setShow(false)
    }

  }

}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* <h1> */}
      

      <Button onClick={handleShow} className='btn3 mt-5'>
      <i class="fa-solid fa-square-plus text-white fs-6  homeicon"></i>Upload
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} className='modal'>
        <Modal.Header closeButton className='mheader'>
          <Modal.Title >Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mbody'> 
        
        <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control name='caption' onChange={(e)=>setValues(e)} type="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video cover image url"
        className="mb-3"
      >
        <Form.Control name='cover_img' onChange={(e)=>setValues(e)} type="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video youtube link url"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>exrtactUrl(e)} />
      </FloatingLabel>

      

        </Modal.Body>

        


        <Modal.Footer className='mfooter'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </h1> */}
      <ToastContainer />
    </div>
  )
}

export default Add