import {Link} from "react-router-dom"
function Navbar() {

  return (
<div id="pnav">
    <div id="navbar">
      <div>
        <img style={{ width: "150px" }} src="https://i.ibb.co/C2Wz7m8/rctLogo.png"
          alt="" />
      </div>
      <div>



        <div id="dropdown">
          <h4 id="dropbtn" style={{color:"black"}}>Jobs</h4>
          <div id="dropcont">
            <div id="parent">
              <div>
                <h2 className="q">IT jobs</h2>
                <p className="hub">Sales jobs</p>
                <h3 className="hub">Marketing jobs</h3>
                <h3 className="hub">Data Science jobs</h3>
                <h3 className="hub">HR jobs</h3>
                <h3 className="hub">Engineering jobs</h3>
              </div>
             <hr transform=" rotate(90deg)" width="2px"/>
              <div>
                <h2 className="q">Jobs in damand</h2>
                <p className="hub">Fresher jobs</p>
                <h3 className="hub">MNC jobs</h3>
                <h3 className="hub">Remote jobs</h3>
                <h3 className="hub">Work from home jobs</h3>
                <h3 className="hub">Walk in jobs</h3>
                <h3 className="hub">Part-time jobs</h3>
              </div>
              <div>
                <h2 className="q">Jobs in Location</h2>
                <p className="hub">Jobs in Delhi</p>
                <h3 className="hub">Jobs in Mumbai</h3>
                <h3 className="hub">Jobs in Banglore</h3>
                <h3 className="hub">Jobs in Hydrabad</h3>
                <h3 className="hub">Jobs in Chennai</h3>
                <h3 className="hub">Jobs in Pune</h3>
              </div>
              <div>
                <h2 className="q">Explore more jobs</h2>
                <p className="hub">Jobs by category</p>
                <h3 className="hub">Jobs by skill</h3>
                <h3 className="hub">Jobs by location</h3>
                <h3 className="hub">Jobs by designation</h3>
                <h3 className="hub">Create free job alert</h3>

              </div>
            </div>
          </div>




        </div>
        <div id="dropdown">
          <h4 id="dropbtn" style={{color:"black"}}>Companies</h4>
          <div id="dropcont">
            <div id="parent">
              <div>
                <h2 className="q">Unicorn</h2>
                <p className="hub">MNC</p>
                <h3 className="hub">Startup</h3>
                <h3 className="hub">Product based</h3>
                <h3 className="hub">Internet</h3>
              </div>
              <div>
                <h2 className="q">Explore collections</h2>
                <p className="hub">Top companies</p>
                <h3 className="hub">IT companies</h3>
                <h3 className="hub">Fintech companies</h3>
                <h3 className="hub">Sponsored companies</h3>
                <h3 className="hub">Featured companies</h3>

              </div>
              <div>
                <h2 className="q">Research companies</h2>
                <p className="hub">Interview questions</p>
                <h3 className="hub">Company salaries</h3>
                <h3 className="hub">Comapany reviews</h3>
                <h3 className="hub">Salary Calculator</h3>
              </div>
              <div>
                <h2 className="q">Explore collections</h2>
                <p className="hub">Top companies</p>
                <h3 className="hub">IT companies</h3>
                <h3 className="hub">Fintech companies</h3>
                <h3 className="hub">Sponsored companies</h3>
                <h3 className="hub">Featured companies</h3>

              </div>
            </div>
          </div>
        </div>

        <div id="dropdown">
          <h4 id="dropbtn" style={{color:"black"}}>Services</h4>
          <div id="dropcont">
            <div id="parent">
              <div>
                <h2 className="q">Resume writing</h2>
                <p className="hub">Text resume</p>
                <h3 className="hub">Visual resume</h3>
                <h3 className="hub">Resume critique</h3>
                
              </div>
              <div>
                <h2 className="q">Get recruiter's attention</h2>
                <p className="hub">Resume display</p>
                <h3 className="hub">Recruiter connection</h3>
                <h3 className="hub">Job search booster</h3>
               

              </div>
              <div>
                <h2 className="q">Explore collections</h2>
                <p className="hub">Top companies</p>
                <h3 className="hub">IT companies</h3>
                <h3 className="hub">Fintech companies</h3>
                <h3 className="hub">Sponsored companies</h3>
                <h3 className="hub">Featured companies</h3>

              </div>
              <div>
                <h2 className="q">Learn & upskill</h2>
                <p className="hub">Data Science courses</p>
                <h3 className="hub">Technology courses</h3>
                <h3 className="hub">Management courses</h3>
                <h3 className="hub">Finance courses</h3>
              </div>

            </div>
          </div>
        </div>



        {/* <div id="dropdown1">
          <h4 id="dropbtn1">Companies</h4>
          <div id="dropcont1">
            <p>Customor Stories</p>
            <p>Lately Office hours signin</p>
            <p>Lately LIVE replays</p>
            <p>How to Postion ANYTHING</p>
            <p>Ebooks</p>
            <p>Blog</p>
            <p>Help Center</p>
          </div>
        </div>
        <div id="dropdown2">
          <h4 id="dropbtn2">Company</h4>
          <div id="dropcont2">
            About
            <p>Team Lately</p>
            <p>Press & News</p>
            <p>Lately Professional Services</p>
            <p>Contact Us</p>
          </div>
        </div> */}



        {/* <h4>Pricing</h4> */}

      </div>
      <div>
       <Link to="/login"> <button id="btnlogin" >Login</button></Link>

       <Link to="/signup"> <button style={{ padding: "10px 20px 10px 20px", backgroundColor: "orange", borderRadius: "25px" }}>SignUp</button></Link>

      </div>

    </div>
    </div>
  )
}
export default Navbar;