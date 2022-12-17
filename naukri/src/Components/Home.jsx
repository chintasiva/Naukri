import { Button, Container, Flex, Input, Select, Stack, Text } from '@chakra-ui/react';
// import Carouselone from './Carouselone';
import Navbar from './Navbar';
import { Navigate, Link } from 'react-router-dom';
import Carouselone from './Carouselone';
import { useContext } from 'react';
import { StateContext } from '../Contexts/HandelState';
import Carouseltwo from './Carouseltwo';
import Carouselthree from './Carouselthree';
import Carouselfour from './Carouselfour';
import Carouselfive from './Carouselfive';
import Footer from './Footer';




function Home() {

    const { setCountry, } = useContext(StateContext)
    const { setLocation, setField, location, field } = useContext(StateContext)
    // const handleSubmit = () => {
    // console.log("clicked")

    // <Datafetch country={country}/>
    // }
    // }
    // const handleCountry=(e)=>{
    //     setCountry(e.target.value)
    // }
    console.log(location)

    const handleClick=(e)=>{
        return(
            <>
             setLocation(e.target.value)
         <Navigate to="/datafetch" />
            </>
         )
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div style={{ marginTop: "20px" }}>
                <Text fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'}>Find your dream job now</Text>
                <Text style={{ marginTop: "10px" }} fontSize={15} color="gray.500" fontFamily={'sans-serif'}>5 lakh+ jobs for you to explore</Text>
            </div>
            <div style={{
                display: "flex", width: "80%", margin: "auto",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "15px", borderRadius: "40px", marginTop: "25px"
            }}  >
                {/* <Input style={{ borderRadius: '100px' }} placeholder="Enter Company Name" type="text" /> */}
                <Select placeholder='Choose the Location' style={{ borderRadius: '100px' }}  onChange={()=>handleClick}>
                onChange={(e) => setLocation(e.target.value)}
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

                <Select style={{ borderRadius: '100px' }} onChange={(e) => setField(e.target.value)}>
                    <option value="">Choose the Field</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Medical">Medical</option>
                </Select>

                <Input text="text" style={{ borderRadius: '100px' }} placeholder="Search" onChange={(e) => setCountry(e.target.value)} />


                <Link to={"/datafetch"} ><Button style={{ borderRadius: '100px' }} width={40} colorScheme='blue' variant='solid'
                >Search
                </Button></Link>

            </div>
            <div style={{ display: "flex", justifyContent: "space-around", width: "60%", margin: "auto", marginTop: "50px" }}>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg" alt="remote" />
                    <Text>Remote</Text>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg" alt="remote" />
                    <Text>MNC</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg" alt="remote" />
                    <Text>Sales</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg" alt="remote" />
                    <Text>Data Science</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg" alt="remote" />
                    <Text>Fortune 500</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg" alt="remote" />
                    <Text>Engineering</Text>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", width: "50%", margin: "auto", marginTop: "50px" }}>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg" alt="remote" />
                    <Text>Banking</Text>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg" alt="remote" />
                    <Text>Project Mangement</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg" alt="remote" />
                    <Text>Fresher</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg" alt="remote" />
                    <Text>Analytics</Text>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px", padding: "15px" }}>
                    <img width={30} src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg" alt="remote" />
                    <Text>HR</Text>
                </div>
            </div>
            <Text style={{ marginTop: "20px" }} fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'}>Top Companies Hiring Now</Text>

            <div style={{ marginTop: "30px" }}>
                <Carouselone />
            </div>

            <div style={{ marginTop: "20px" }}>
                <Text fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'}>Top Companies Hiring Now</Text>
                <div style={{ display: "flex", justifyContent: 'space-evenly', justifyItems: "center", width: "15%", margin: "auto" }}>
                    <p className='btnhire'>All</p>
                    <p className='btnhire'>IT Services</p>
                    <p className='btnhire'>BFSI</p>
                </div>
                <div>
                    <Carouseltwo />
                </div>
            </div>
            <div>
                <Button id="Btn1">View All Companies</Button>
            </div>


            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "30%", backGround: "pink", border: "1px solid pink", borderRadius: "10px", padding: "40px", margin: "auto", marginTop: "20px", marginLeft: "20%" }}>
                    <img width="40%" src="https://static.naukimg.com/s/0/0/i/role-collection.png" alt="" />
                    <h1 className='head'>Discover jobs across popular roles</h1>
                    <p className='pgray'>Select a role and we'll show you relevant jobs for it!</p>
                </div>
                <div style={{ marginRight: "10%" }}>
                    <Carouselthree />
                </div>
            </div>


            <div>
                <Text fontSize={30} color="gray.900" fontWeight="bolder" fontFamily={'sans-serif'} marginTop={15}>Sponsored companies</Text>
            </div>
            <div>
                <Carouselfour />
            </div>

            <div style={{marginTop:"30px", display: "flex", justifyContent: "space-around", width: "80%", margin: "auto", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "30px", borderRadius: "15px" }}>

                <div>
                    <img src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="" />
                </div>


                <div style={{ width: "60%", textAlign: 'left' }}>
                    <div>
                        <h1 className='cpy'>Accelerate your job search with premium services</h1>
                        <p className='techname'>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                    </div>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <div style={{ display: "flex", border: "1px solid gray", borderRadius: "20px", justifyContent: "space-between", marginLeft: "10px", paddingLeft: "13px", paddingRight: "13px", padding: "3px" }}>
                            <img src="https://static.naukimg.com/s/0/0/i/ff-services-icon2.png" alt="" />
                            <p>Resume writing</p>
                        </div>
                        <div style={{ display: "flex", border: "1px solid gray", borderRadius: "20px", justifyContent: "space-between", marginLeft: "10px", paddingLeft: "13px", paddingRight: "13px", padding: "3px" }}>
                            <img src="https://static.naukimg.com/s/0/0/i/ff-services-icon3.png" alt="" />
                            <p>Priority applicant</p>
                        </div>
                        <div style={{ display: "flex", border: "1px solid gray", borderRadius: "20px", justifyContent: "space-between", marginLeft: "10px", paddingLeft: "13px", paddingRight: "13px", padding: "3px" }}>
                            <img src="https://static.naukimg.com/s/0/0/i/ff-services-icon1.png" alt="" />
                            <p>Resume display</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Button style={{ backgroundColor: "rgb(69,126,255)", color: "white", padding: "10px,20px,10px,20px", borderRadius: "20px" }}>Learn more</Button>
                    <p className='techname'>Include paid services</p>
                </div>
            </div>

            <div style={{display:"flex",margin:"auto",marginTop:"30px"}}>
                <div style={{width:"120%",marginRight:"-10%",marginLeft:"10%",marginTop:"45px"}}>
                    <h1 className='cpy'>Grow your career through learning</h1>
                    <img src="https://static.naukimg.com/s/0/0/i/learn-icon.svg" alt="" />
                </div>
                <div style={{margiLeft:"10%"}}>
                    <Carouselfive />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
export default Home;