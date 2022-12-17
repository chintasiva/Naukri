import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Datafetch from "./Datafetch"
import Details from "./Details"


function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datafetch" element={<Datafetch />} />
            <Route path="/datafetch/:id" element={<Details />} />
        </Routes>
    )
}
export default AllRoutes