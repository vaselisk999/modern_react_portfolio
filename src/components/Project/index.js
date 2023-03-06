import React from "react";
import { Link } from "react-router-dom";

export default function ProjectComponent({ data }) {
    const { image, title, deployedLink, gitHubLink} = data;

    const imagePath = require(`./../../assets/${image}`)

    return (
        <div className="card" >
            <div className="img_wrapper">
                <img src={imagePath} alt="Avatar" />
            </div>
            <div className="container">
                <h4><b>{title}</b></h4>
                <p><Link to={{ pathname: deployedLink }}>Link to the deployed version</Link></p>
                <p><Link to={{ pathname: gitHubLink }}>Link to the GitHub repository</Link></p>
            </div>
        </div>
    )
}