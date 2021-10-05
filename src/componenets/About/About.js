import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./About.css";
const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row align-items-center gx-0">
                <div className="col-12 col-md-6 px-5 py-3">
                    <h1 className="fw-bold text-dark">About US</h1>
                    <p className="text-secondary">
                        We provide some free courses. You can start and finish
                        one of these popular courses in under a day – for free!
                        Check out the link below.. Take the course for free.
                    </p>
                    <button
                        className="btn btn-info text-white px-4 py-2"
                        onClick={handleShow}
                    >
                        Contact <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src="https://media.istockphoto.com/photos/web-design-development-and-coding-concept-picture-id1219854221?b=1&k=20&m=1219854221&s=170667a&w=0&h=wl3J-ScOcNohyXiXvPTK9FEnUyUS52VfXq7jcI1MECk="
                        alt=""
                        className="w-100"
                    />
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-info">Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pe-4">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name"
                        className="w-100 border-0 shadow-sm p-2 m-2 rounded bg-light outline-0"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email"
                        className="w-100 border-0 shadow-sm p-2 m-2 rounded bg-light"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Contact Number"
                        className="w-100 border-0 shadow-sm p-2 m-2 rounded bg-light"
                    />
                    <textarea
                        name=""
                        id=""
                        rows="5"
                        placeholder="Message"
                        className="w-100 border-0 shadow-sm p-2 m-2 rounded bg-light"
                    ></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="info"
                        onClick={handleClose}
                        className="text-white"
                    >
                        Send <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default About;
