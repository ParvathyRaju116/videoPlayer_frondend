import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';










function Categories() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// -----------------------------------------------

 const [categories,setCategories]=useState([])

 
  // state to hold input , id and vide array
const[catInputs,setCatInputs]=useState({
  id:"",
  name:"",
  videos:[]
})
// -----------------------------------------------



const setInputs=(e)=>{
  const {value,name}=e.target
  setCatInputs({...catInputs,[name]:value})
}
// console.log(catInputs);
// -----------------------------------------------


// add data 

const  addData=async()=>{
  let id =uniqid()
  setCatInputs({...catInputs,["id"]:id})

  const {name}=catInputs
if(name===""){
  toast.error(" Please provide caption", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
else{

  // api call
  const result=await addCategory(catInputs)
  if(result.status>=200 && result.status<300 ){
    setShow(false)
    getAllCategories()
    toast.success(`${result.data.name} added`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

}

}
// -----------------------------------------------

// api call for get all categories

const getAllCategories=async()=>{
  const result = await getAllCat()
  if(result.status>=200 && result.status<300){
  setCategories(result.data);
  console.log(result);
}

}
// -----------------------------------------------

// function for delete categories

  const removeCategory=async(id)=>{
    const result=await deleteCat(id)
    if(result.status>=200 && result.status<300){
      getAllCategories()
    }

  }

// -----------------------------------------------

  useEffect(()=>{
  getAllCategories()
},[])
// -----------------------------------------------





// function for drag over
const dragOver=(e)=>{
  e.preventDefault()
  console.log("dragged over the cateegory");
}

//  function for drop
 const dropped =  async(e,id)=>{
  console.log("dropped id",+id);

  // video id access
  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);

// function for get video
const {data}= await getVideo(videoId)
console.log(data);

// select dropped categegory from all categories
const selectedCategory=categories.find(i=>i.id==id)
console.log(selectedCategory);

// udate category object with video data
selectedCategory.videos.push(data)
console.log(selectedCategory);

// api all to update changed category in bd
await updateCategory(id,selectedCategory)
getAllCategories()

}





  return (
    <div className='text-center'>
      <Container>

   <div className='text-center'><Button className='mt-5 cat w-100 text-center ' variant="primary" onClick={handleShow}>
   <i class="fa-solid fa-square-plus m-2 text-white caticon p-3"></i>
        CATEGORIES
        
      </Button></div>
      
      {
        categories.length>0?(
          categories.map(i=>(
            <div droppable  
            onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>dropped(e,i.id)}
             className='mt-3  m-2 w-100 p-3 text-center catdiv' >
            

              <div>
                <Link to={`/singleCategory/${i.id}`} style={{textDecoration:'none',color:'white'}}>
              <p className='fs-5'>{i.name}</p>
              
             
              {
                
               i.videos.map(j=>(
                <img src={j.cover_img} style={{height:'70px', width:'136px'}} className='m-1' alt="" />
               ))
              }</Link>
              </div>
             
                
              <div className='text-end'>
                <Trash2 size={55} className='text-danger btn trash' onClick={()=>{removeCategory(i.id)}}></Trash2>
              </div>
             
            </div> 
              
          ))
        ):<h3>No categories added</h3> 
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setInputs(e)} name="name" id='catId' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
      </Container>
    </div>
  )
}

export default Categories