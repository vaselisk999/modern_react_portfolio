import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import './style.css'

export default function Header({ parallax }) {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    useEffect(() => {
        switch (splitLocation[1]) {
            case "":
                parallax.current.scrollTo(0);
                break;
            case "projects":
                parallax.current.scrollTo(1);
                break;
            case "contact":
                parallax.current.scrollTo(2);
                break;
            default:
                parallax.current.scrollTo(0);
                break;
        }
    })

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