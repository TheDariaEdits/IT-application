import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div>
            <div className="navbar-wrapper flex w-full h-13 bg-black text-white items-center justify-center">
                <ul className=" flex flex-row items-center justify-evenly w-full">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </div>
        </div>
    )
    
}