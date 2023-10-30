import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllCat, getAllVideosInCat, updatedCategory } from '../services/allapis';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';








function SingleCategory() {

    const params=useParams();
    // const {id} =params
    // console.log(id);
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);

  
    const fetchVideos = async() => {
      const {data} = await getAllVideosInCat(params.id);
  
      setVideos(data.videos);
  
      console.log(data.videos)

    }

    // delete single category
    const  removeVideofromCat= async (id) => {
      const selectedCategory = categories.find(i=>i.id==params.id);
      console.log(selectedCategory)
  
      // update category object with video data
      selectedCategory.videos = selectedCategory.videos.filter((v) => v.id !== id);
  
      await updatedCategory(params.id,selectedCategory);
  
      fetchVideos();
      getAllCategories();
    }
    const getAllCategories = async () => {
      const result = await getAllCat();
      if (result.status >= 200 && result.status < 300) {
        setCategories(result.data);
      }
    }
  
  
  
  
    useEffect(() => {
      fetchVideos();
      getAllCategories()
    }, [])
  

  return (
    <>
    <div className='text-center m-5'>
     <h2>
        <span className='fs-3 caption me-5'>{categories.find((i) => i.id == params.id)?.name}</span>
      </h2></div>
    <div className='d-flex text-center justify-content-center mb-5'>
      

        {
            videos.map(i=>(
              <div>

                <Card style={{ width: '18rem' }} className='m-2'>
                <Card.Img variant="top" src={i.cover_img} />
                <Card.Body style={{height:'150px'}}>
                  <Card.Title>{i.caption}</Card.Title>

                  <div className='text-end'>
                <Trash2 size={55} className='text-danger btn trash' onClick={()=>{removeVideofromCat(i.id)}}></Trash2>
              </div>


                </Card.Body>
              </Card></div>
             )) 
           
        }
    </div>
    </>
  )
}

export default SingleCategory