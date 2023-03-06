import React from "react";
import "./style.css";
import data from "./../../data.json";
import ProjectComponent from "../Project";

export default function ProjectsComponent() {
    return (
        <section className="projects_wrapper">
            {
                data.map((val, key) => {
                    return (
                        <ProjectComponent key={key} data={val}/>
                    )
                })
            }
        </section>
    )
}