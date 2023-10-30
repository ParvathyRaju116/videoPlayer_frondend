import axios from "axios";

export const commonRequest=async (method,url,body)=>{
 let confiq={
    method,
    url,
    data:body
 }
 return await axios(confiq).then(data=>{
    return data
 }).catch(err=>{
    return err
 })
}