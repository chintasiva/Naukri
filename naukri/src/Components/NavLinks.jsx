// import { Link } from "@chakra-ui/react"
import React from "react"

const NavLinks = () => {

    const links = [
        { name: "Jobs" },
        { name: "Companies" },
        { name: "Services" }
    ]


    return (<>

        {
            links.map((Link) => (
                <div>
                    <div>
                        <h1>{Link.name}</h1>
                    </div>
                </div>
            ))}

    </>
    )
}

export default NavLinks