import React from 'react'
import Carousel from 'better-react-carousel'
import { Button } from '@chakra-ui/react'

const Carouselfive = () => {
  return (
    <div  style={{width:"85%",margin:"auto",padding:"40px"}}> 
        <Carousel cols={3} rows={1} gap={1} loop>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Data Science</h3>
           <h1 className='cpy'>Artificial Intelligence</h1>
           <p className='gray' >Learn in demand AI skills like Deep learining, NLP, Computer vision and more for career growth across different roles.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>600 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>28 providers</p>
           </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Cloud Technologies</h3>
           <h1 className='cpy'>AWS</h1>
           <p className='gray'  >Get certified for high demand cloud computing skills for Cloud Practitioner, Architect, Developer, and Operations roles.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>800 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>16 providers</p>
           </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Programming</h3>
           <h1 className='cpy'>Data Structures & Algorithms</h1>
           <p className='gray' >Master DS and Algorithms for entry level engineering product and for copetitive programming.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>800 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>13 providers</p>
           </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Management</h3>
           <h1 className='cpy'>Strategy and Leadership</h1>
           <p className='gray' >Learn to lead and thrive in a world of increasing uncertainty and volatility - get certified from top universities.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>500 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>70 providers</p>
           </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Management</h3>
           <h1 className='cpy'>Digital Marketing</h1>
           <p className='gray' >A fast growing field with opportunities in PPC, SEO, Email marketing, Marketing analytics, Contect marketing and more.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>600 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>28 providers</p>
           </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car2' >
           <h3 className='newcla'>Management</h3>
           <h1 className='cpy'>Business Analytics</h1>
           <p className='gray' >Improve your business decision making with dashboards, real-time analytics, scenario analysis, and reporting skills.</p>
           <div style={{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{margin:"auto",arginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>500 courses</p>
            <p style={{marginTop:"5px",padding:"1px",borderRadius:"5px",border:"1px solid gray",color:"gray"}}>42 providers</p>
           </div>
        </div>
      </Carousel.Item>
   
    
   

     

     

      {/* <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" alt="" />
      </Carousel.Item> */}
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
  )
}
export default Carouselfive