import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function History() {

    
        const [histories,setHistories]=useState([])


        const getHistories=async()=>{
            const {data}=await getAllHistory()
            setHistories(data);
        }

        // delete watch history
        const removehistory=async(id)=>{
          const result =await deleteHistory(id)
          if(result.status>=200 && result.status<300){
            deleteHistory(result.data)
            getHistories()
          }
        }
    
    useEffect(()=>{
        getHistories()
    },[])
    console.log(histories);

  return (
    <div className='m-5'>
        <h2 className='m-5 text-center'>History</h2>

        {
            histories.length>0?(
              <div style={{overflowX:'scroll'}}>
            <table   size="sm" className='text-center w-75 container p-5 table1' style={{backgroundColor:'transparent'}}>
      <thead className='fs-5'>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Video URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       { histories?.map((i,index)=>(
            <tr>
          <td  className='p-2'>{index+1}</td>
          <td className='p-2'>{i?.date}</td>
          <td className='p-2'>{i?.video_title}</td>
          <td className='p-2'>{i?.url}</td>
          <td className='p-2'>
        <Trash2 size={30} className='text-danger' onClick={()=>{removehistory(i.id)}}></Trash2>
          </td>
        </tr>

        ))}
       
      </tbody>
    </table>
    </div>
    ):<h2>No Watching History</h2>}
    <Link to={'/home'}>
<div className='text-center m-5'>
 <Button>Go Back</Button>
</div>
   </Link>
    </div>
  )
  }


export default History