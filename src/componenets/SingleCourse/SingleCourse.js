import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCourse = (props) => {
    // const { course } = props.course;
    // console.log(props);
    return (
        <Col>
            <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={props?.course?.img} />
                <Card.Body>
                    <Card.Title>{props.course?.name}</Card.Title>
                    <Card.Text>{props?.course?.author}Author</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Card.Text>${props.course?.price}</Card.Text>
                    <Link to="/details">Know Details</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleCourse;
