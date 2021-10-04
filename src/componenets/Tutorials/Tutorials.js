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
            <Row className="g-3 pb-5">
                <Col sm={6}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=5665s"
                        width="200"
                    />
                </Col>
                <Col sm={6}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=W6NZfCO5SIk"
                        width="200"
                    ></ReactPlayer>
                </Col>
                <Col sm={6}>
                    <ReactPlayer
                        url="youtube.com/watch?v=qz0aGYrrlhU"
                        width="200"
                    />
                </Col>
                <Col sm={6}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=-_X6PhkjpzU"
                        width="200"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Tutorials;
