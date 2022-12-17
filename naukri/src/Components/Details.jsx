import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Details() {
const {id}=useParams()
const [data,setData]=useState([])
useEffect(()=>{
    fetch(`http://localhost:3000/datafetch/${id}`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))
},[id])
console.log(data)
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