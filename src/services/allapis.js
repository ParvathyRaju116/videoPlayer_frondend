import { baseUrl } from "./baseUrl";
import { commonRequest } from "./commonRequest";

// add video

export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

// get all videos

export const getAllVideos=async()=>{
  return await  commonRequest('GET',`${baseUrl}/videos`,{})
}


// delete single video

export const deleteVideo= async(id)=>{
  return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

// add category

export const addCategory=async(body)=>{
  return await commonRequest('POST',`${baseUrl}/categories`,body)
}


// get all category
export const getAllCat=async()=>{
  return await commonRequest('GET',`${baseUrl}/categories`,{})
}

// delete category
export const deleteCat= async(id)=>{
  return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

// add history
export const addHistory= async(body)=>{
  return await commonRequest('POST',`${baseUrl}/histories`,body)
}
// get all history
export const getAllHistory=async()=>{
  return await commonRequest('GET',`${baseUrl}/histories`,{})
}
// delete history
export const deleteHistory= async(id)=>{
  return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}
// api for access single video
// export const getVideo=async(id)=>{
//   return await commonRequest ('GET',`${baseUrl}/videos/${id}`,{})
// }

// update category
export const updateCategory=async(id,body)=>{
  return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}

// single category
export const getAllVideosInCat=async(id)=>{
  return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})
}

// access single video

export const getVideo=async(id)=>{
  return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

// delete single video from category

export const deleteSingleCat= async(id)=>{
  return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}
// update category

export const updatedCategory=async(id,body)=>{
  return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}
 

