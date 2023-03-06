import React from "react";
import "./style.css";
import data from "./../../data.json";
import { Link } from "react-router-dom";

export default function ProjectsComponent() {
    return (
        <section className="projects_wrapper">
            {
                data.map((val, key) => {
                    console.log(val)
                    return (
                        <div className="card" key={key}>
                            <div className="img_wrapper">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                            </div>
                            <div className="container">
                                <h4><b>{val.title}</b></h4>
                                <p><Link to={{pathname: val.deployedLink}}>Link to the deployed version</Link></p>
                                <p><Link to={{pathname: val.gitHubLink}}>Link to the GitHub repository</Link></p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}