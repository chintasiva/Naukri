import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Datafetch from "./Datafetch"
import Details from "./Details"
import Signup from "./Signup"
import Login from "./Login"
function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datafetch" element={<Datafetch />} />
            <Route path="/datafetch/:id" element={<Details />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </Routes>
    )
}
export default AllRoutes