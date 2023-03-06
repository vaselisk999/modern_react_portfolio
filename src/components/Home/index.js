import React from "react";
import "./style.css"

export default function HomeComponent() {
    return (
        <div className="home_wrapper">
            <p className="bigFont">Hello I`m</p>
            <h1>Artur</h1>
            <p className="smallFont">Front-End Web Development</p>
            <br/>
            <p className="midFont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="image_wrapper">
                <img src="https://www.w3schools.com/w3images/avatar2.png"  alt="avatar2" />
            </div>
        </div>
    )
}