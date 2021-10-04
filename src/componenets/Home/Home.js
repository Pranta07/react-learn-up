import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../customhooks/useData";
import Banner from "../Banner/Banner";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./Home.css";
const Home = () => {
    const [courses, setCourses] = useData();
    // console.log(courses);
    return (
        <div>
            <Banner></Banner>
            <Container>
                <h1 className="pt-3 text-center fw-bold text-dark">
                    Browse our top courses
                </h1>
                <p className="text-center">
                    You don't have to struggle alone, you've got our assistance
                    and help.
                </p>
                <hr />
                <Row xs={1} md={2} lg={4} className="pt-3 pb-3 g-3">
                    <SingleCourse course={courses[0]}></SingleCourse>
                    <SingleCourse course={courses[1]}></SingleCourse>
                    <SingleCourse course={courses[2]}></SingleCourse>
                    <SingleCourse course={courses[3]}></SingleCourse>
                </Row>
                <Link
                    to="/courses"
                    className="d-flex justify-content-center"
                    style={{ textDecoration: "none" }}
                >
                    <button className="mb-3 text-white btn btn-primary">
                        All Courses
                    </button>
                </Link>
            </Container>
        </div>
    );
};

export default Home;
