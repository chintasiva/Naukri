import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Details() {
const {id}=useParams()
const [data,setData]=useState({})

useEffect(()=>{
    // setLoading(true)
    fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b86cc9a0&app_key=b1aed1fd6b1dd3d7d6928a09b2440f5f/${id}`)
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
},[id])
// console.log(data.el)
console.log(id)
    return (
        <>
        <div>
            Details
        </div>
        </>
    )
}
export default Details