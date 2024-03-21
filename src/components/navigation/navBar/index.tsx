import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            {/* logo */}
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/chat"}>Chat</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
            {/*profile*/}
        </nav>
    )
};