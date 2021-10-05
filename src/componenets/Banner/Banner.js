import React from "react";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="w-100 banner row d-flex align-items-center m-0">
            <div className="col-6 banner-text">
                <h1 className="fw-bold m-0 p-0">
                    <span className="text-dark">Learn</span> and Build Skills
                    From Our <span className="text-white">Courses!</span> Online{" "}
                    <span className="text-info">Tutorials</span> From Top
                    Instructors!
                </h1>
                <br />
                <p className="text-white fw-bold fs-6">
                    You can start and finish one of these popular courses <br />{" "}
                    and then join us as an Instructor!
                </p>
                <button className="btn btn-info text-white px-4 py-2">
                    Join Us
                </button>
            </div>
        </div>
    );
};

export default Banner;
