import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const SingleCourse = (props) => {
    // const { course } = props.course;
    // console.log(props);
    return (
        <Col>
            <Card style={{ width: "16rem" }} className="h-100 rounded">
                <Card.Img variant="top" src={props?.course?.img} />
                <Card.Body>
                    <Card.Title>{props.course?.name}</Card.Title>
                    <Card.Text>
                        <FontAwesomeIcon icon={faUser} />{" "}
                        {props?.course?.instructor}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bold fs-4 m-0">
                        $ {props.course?.price}
                    </Card.Text>
                    <Link to="/details" style={{ textDecoration: "none" }}>
                        Know Details{" "}
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleCourse;
