import React from "react";
import "./Footer.css";
import logo from "../../images/favicon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className="footer">
            <div
                className="
                        row row-cols-1 row-cols-md-3 row-cols-lg-3
                        mx-auto
                        pt-3 ps-5
                        d-flex align-items-center
                    "
            >
                <div className="col">
                    <img src={logo} alt="" width="30" height="30" />
                    <span className="fw-bold"> Learn UP</span>
                    <p className="mt-2">
                        <small>
                            Great lesson ideas and lesson plans for ESL
                            teachers! Educators can customize lesson plans to
                            best.
                        </small>
                    </p>
                </div>
                <div className="col">
                    <ul className="list mt-2">
                        <span className="fw-bold">Company</span>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Tutorials</li>
                        <li>Events</li>
                        <li>Instructor</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list mt-2">
                        <span className="fw-bold">Platform</span>
                        <li>Library</li>
                        <li>Partners</li>
                        <li>News & Blogs</li>
                        <li>FAQs</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <h5>Follow us on</h5>
                <div class>
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <p className="text-center mb-0">
                    <small>All rights reserved ©LearnUp, 2021|Pranta Pal</small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
