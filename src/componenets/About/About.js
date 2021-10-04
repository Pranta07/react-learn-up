import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./About.css";
const About = () => {
    return (
        <div className="row d-flex align-items-center ps-5">
            <div className="col">
                <h1 className="fw-bold text-dark">About US</h1>
                <p className="text-secondary">
                    We provide some free courses. You can start and finish one
                    of these popular courses in under a day – for free! Check
                    out the link below.. Take the course for free.
                </p>
                <button className="btn btn-info text-white px-4 py-2">
                    Contact <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
            </div>
            <div className="col">
                <img
                    src="https://media.istockphoto.com/photos/web-design-development-and-coding-concept-picture-id1219854221?b=1&k=20&m=1219854221&s=170667a&w=0&h=wl3J-ScOcNohyXiXvPTK9FEnUyUS52VfXq7jcI1MECk="
                    alt=""
                    className="w-100"
                />
            </div>
        </div>
    );
};

export default About;
