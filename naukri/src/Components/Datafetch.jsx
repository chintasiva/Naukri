import axios from "axios"
import { useContext } from "react"
import { useEffect, useState } from "react"
import { StateContext } from "../Contexts/HandelState"
import { Button, Text, } from "@chakra-ui/react"
import { Grid, Image, Stack, Skeleton } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
function Datafetch() {
    const [data, setData] = useState([])
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(1)
    const { country, location, field } = useContext(StateContext)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b86cc9a0&app_key=b1aed1fd6b1dd3d7d6928a09b2440f5f&what=${country}&where=${location}&results_per_page=10`)
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [page])
    console.log(data)

    const handlePage = (val) => {
        setPage(page + val)
    }

    return loading ? (<Stack width="50%" marginLeft="13%" marginTop="5%">
        <Skeleton height='170px' />
        <Skeleton height='170px' />
        <Skeleton height='170px' />
        <Skeleton height='170px' />
    </Stack>) : (
        <>
            <Navbar />
            <div style={{ display: "flex" }}>
                <div >
                    {
                        data?.map((el) => (
                            <div style={{ width: "70%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "30px", marginTop: "20px", textAlign: "left", marginLeft: "20%" }}>
                                <Link to={`/datafetch/${el.id}`}>   <div key={el.id} >
                                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>{el.title}</h3>
                                    <h3>{el.company.display_name}</h3>
                                    <div style={{ display: "flex" }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3240/3240354.png" alt="logo" style={{ width: "3%", height: "20px", marginTop: "2px" }} /> <Text style={{ marginLeft: "10px" }} noOfLines={1}>{el.description}</Text>
                                    </div>

                                    <p>₹ {el.salary_min}{"-"}{el.salary_max}</p>
                                    <div style={{ display: "flex" }} >
                                        <img style={{ width: "3%", height: "20px", marginTop: "2px" }} src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="rise" />
                                        <p style={{ marginLeft: "10px" }}>{el.location.display_name}</p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {/* <p>See 340 jobs in Featured Companies</p>
       <img src="https://img.naukimg.com/fc_images/v2/3211.gif" alt=""/>
       <img src="https://img.naukimg.com/fc_images/v2/3426010.gif" alt=""/> */}
                    <Grid mt={100} mr={20} w={300} templateColumns='repeat(2, 1fr)' gap={2}>
                        <Image src={"https://img.naukimg.com/fc_images/v2/3211.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/3426010.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/719011.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/15001.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/294009.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/4531204.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/473403.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/93084.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/121866.gif"} alt="" />
                        <Image src={"https://img.naukimg.com/fc_images/v2/2710958.gif"} alt="" />
                    </Grid>
                </div>

            </div>
            <div style={{marginRight:"420px",marginTop:"20px"}}>
                <Button disabled={page===1} onClick={() => handlePage(-1)}>Previous</Button>
                <Button>{page}</Button>
                <Button disabled={page===10} onClick={() => handlePage(1)}>Next</Button>
            </div>
            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </>

    )
}
export default Datafetch