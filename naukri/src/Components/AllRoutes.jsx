import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Datafetch from "./Datafetch"


function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datafetch" element={<Datafetch />} />
        </Routes>
    )
}
export default AllRoutes