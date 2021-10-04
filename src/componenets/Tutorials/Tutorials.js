import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

// Render a YouTube video player
const Tutorials = () => {
    return (
        <Container>
            <h2 className="py-3 fw-bold text-center">
                Find All Free Tutorials Here!
            </h2>
            <Row sm lg="2">
                <Col lg="6">
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </Col>
                <Col lg="6">
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </Col>
                <Col>
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </Col>
                <Col>
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </Col>
            </Row>
        </Container>
    );
};

export default Tutorials;
