import React from 'react'
import Carousel from 'better-react-carousel'

const Carouselthree = () => {
  return (
    <div  style={{width:"83%",margin:"auto",height:"200px",padding:"40px"}}> 
        <Carousel cols={2} rows={3} gap={1} loop>
      <Carousel.Item >
        <div class='car' >
            <h3>Full Stack Developer</h3>
            <p className='pgray'>23.7K+ Jobs </p>
        
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div class='car' >
            <h3>Mobile / App Dev...</h3>
            <p className='pgray'>3K+ Jobs </p>
            
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car' >
            <h3>Front End  Developer</h3>
            <p className='pgray'>3.9K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car' >
            <h3>DevOps Engineer</h3>
            <p className='pgray'>2K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car' >
            <h3>Engineering Manager</h3>
            <p className='pgray'> 3.9K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Technical Lead</h3>
            <p className='pgray'> 13.5K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Automation Test Engi...</h3>
            <p className='pgray'> 2.2K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car' >
            <h3>Cyber Security</h3>
            <p className='pgray'> 494 Jobs </p>
            
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Technical Architect</h3>
            <p className='pgray'> 9.2K+ Jobs </p>
            
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Bussiness Analyst</h3>
            <p className='pgray'> 5.3K+ Jobs </p>
           
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Data Scientist</h3>
            <p className='pgray'> 765 Jobs </p>
            
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='car'>
            <h3>Program Manger</h3>
            <p className='pgray'> 695Jobs </p>
            
        </div>
      </Carousel.Item>
      {/* <Carousel.Item >
        <div id='car' >
            <h3>MNC's</h3>
            <p>1.4k actively hiring </p>
            <div style={{display:"flex",justifyContent:'space-around',alignItems:"center"}}>
                <img style={{width:"20%",padding:"10px"}} src="https://img.naukimg.com/logo_images/groups/v1/36136.gif" alt="" />
                <img style={{width:"20%",padding:"10px"}} src="https://img.naukimg.com/logo_images/groups/v1/240936.gif" alt="" />
                <img style={{width:"20%",padding:"10px"}} src="https://img.naukimg.com/logo_images/groups/v1/143730.gif" alt="" />
                <img style={{width:"20%",padding:"10px"}} src="https://img.naukimg.com/logo_images/groups/v1/722108.gif" alt="" />
            </div>
        </div>
      </Carousel.Item> */}
     

     

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
export default Carouselthree