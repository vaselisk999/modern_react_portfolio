import React from "react";
import { NavLink, Link, useLocation } from 'react-router-dom';
import './style.css'

export default function Header({parallax} ) {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
            <nav className="horizontal-menu plain">
                <ul className="menu">
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link
                            to="/"
                            onClick={() => parallax.current.scrollTo(0)}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={splitLocation[1] === "projects" ? "active" : ""}>
                        <Link
                            to="projects"
                            onClick={() => parallax.current.scrollTo(1)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "active" : ""}>
                        <Link
                            to="contact"
                            onClick={() => parallax.current.scrollTo(2)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}