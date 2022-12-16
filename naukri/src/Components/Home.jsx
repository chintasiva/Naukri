import { Button, Container, Flex, Input, Select, Stack, Text } from '@chakra-ui/react';
// import Carouselone from './Carouselone';
import Navbar from './Navbar';
import { Navigate,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Datafetch from './Datafetch';
import { useContext } from 'react';
import { StateContext } from '../Contexts/HandelState';




function Home() {

    const {setCountry,}=useContext(StateContext)
    const {setLocation,setField,location,field}=useContext(StateContext)
    // const handleSubmit = () => {
        // console.log("clicked")
       
        // <Datafetch country={country}/>
    // }
    // }
    // const handleCountry=(e)=>{
    //     setCountry(e.target.value)
    // }
console.log(location)

// const handleClick=()=>{
//     return <Navigate to="/datafetch" />
// }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div style={{marginTop:"20px"}}>
                <Text fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'}>Find your dream job now</Text>
                <Text style={{marginTop:"10px"}} fontSize={15} color="gray.500" fontFamily={'sans-serif'}>5 lakh+ jobs for you to explore</Text>
            </div>
            <div style={{display:"flex" ,width: "80%",margin:"auto",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"15px", borderRadius:"40px",marginTop:"25px"}}  >
                {/* <Input style={{ borderRadius: '100px' }} placeholder="Enter Company Name" type="text" /> */}
                 <Select placeholder='Choose the Location' style={{ borderRadius: '100px' }}  onChange={(e)=>setLocation(e.target.value)}>
                 
                   <option value="Birmingham">Birmingham</option>
                    <option value="Staffordshire">Staffordshire</option>
                    <option value="Warwickshire">Warwickshire</option>
                    <option value="Coventry">Coventry</option>
                    <option value="Shropshire">Shropshire</option>
                    <option value="Wolverhampton">Wolverhampton</option>
                    <option value="Herefordshire">Herefordshire</option>
                    <option value="Solihull">Solihull</option>
                    <option value="Walsall">Walsall</option>
                    <option value="Dudley">Dudley</option>
                    <option value="Sutton Cold Field">Sutton Cold Field</option>
                    
                </Select>
                
                <Select style={{ borderRadius: '100px' }} onChange={(e)=>setField(e.target.value)}>
                    <option value="">Choose the Field</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Medical">Medical</option>
                </Select>

                <Input text="text" style={{ borderRadius: '100px' }} placeholder="Search"  onChange={(e)=>setCountry(e.target.value)}/>

                
               <Link to={"/datafetch"} ><Button style={{ borderRadius: '100px' }} width={40} colorScheme='blue' variant='solid'
                >Search
                </Button></Link>
                
            </div>
            <div style={{display:"flex",justifyContent:"space-around",width:"60%",margin:"auto",marginTop:"50px"}}>

                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg" alt="remote" />
                    <Text>Remote</Text>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg" alt="remote" />
                    <Text>MNC</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg" alt="remote" />
                    <Text>Sales</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg" alt="remote" />
                    <Text>Data Science</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg" alt="remote" />
                    <Text>Fortune 500</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg" alt="remote" />
                    <Text>Engineering</Text>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-around",width:"50%",margin:"auto",marginTop:"50px"}}>

                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg" alt="remote" />
                    <Text>Banking</Text>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg" alt="remote" />
                    <Text>Project Mangement</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg" alt="remote" />
                    <Text>Fresher</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg" alt="remote" />
                    <Text>Analytics</Text>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"10px",padding:"15px"}}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg" alt="remote" />
                    <Text>HR</Text>
                </div>
            </div>
            <Text style={{marginTop:"20px"}} fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'}>Top Companies Hiring Now</Text>

            <div>
                {/* <Carouselone/> */}
            </div>
        </>
    )
}
export default Home;