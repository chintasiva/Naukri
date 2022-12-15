import axios from "axios"
import { useEffect, useState } from "react"

function Datafetch(){
    const [data,setData]=useState([])

    useEffect(()=>{
axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b86cc9a0&app_key=b1aed1fd6b1dd3d7d6928a09b2440f5f&what_phrase=Marketing`)
.then((res)=>setData(res.data.results))
.catch((err)=>console.log(err))
    },[])
console.log(data)
    return(
    <div>
    {
        data?.map((el)=>(
            <div key={el.id}>
                <h3>{el.title}</h3>
                <h3>{el.company.display_name}</h3>
                <p>{el.description}</p>
                <p>{el.salary_mim}{"-"}{el.salary_max}</p>
                <p>{el.location.display_name}</p>
            </div>
        ))
    }
    </div>)
}
export default Datafetch