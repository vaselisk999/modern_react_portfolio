import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css'

export default function Header({parallax}) {
    return (
        <>
            <nav className="horizontal-menu plain">
                <ul className="menu">
                    <li className="menu_list">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            onClick={() => parallax.current.scrollTo(0)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="menu_list">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            onClick={() => parallax.current.scrollTo(1)}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="menu_list">
                        <NavLink
                            to="contact"
                            end
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            onClick={() => parallax.current.scrollTo(2)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}