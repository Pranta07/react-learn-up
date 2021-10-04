import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

const Tutorials = () => {
    return (
        <Container>
            <h2 className="pt-3 text-center fw-bold">
                Find All Free Youtube Tutorials Here!
            </h2>
            <p className="text-center">Enjoy your learning with us!</p>
            <hr />
            <Row className="pb-5 g-3">
                <Col sm={6}>
                    <h2 className="fw-bold">React Tutorial For Beginners!</h2>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=5665s"
                        width="200"
                    />
                </Col>
                <Col sm={6}>
                    <h2 className="fw-bold">JavaScript in 1 Hour!</h2>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=W6NZfCO5SIk"
                        width="200"
                    ></ReactPlayer>
                </Col>
                <Col sm={6}>
                    <h2 className="fw-bold">HTML in 1 Hour!</h2>
                    <ReactPlayer
                        url="youtube.com/watch?v=qz0aGYrrlhU"
                        width="200"
                    />
                </Col>
                <Col sm={6}>
                    <h2 className="fw-bold">5 Key Frontend Skills!</h2>
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
