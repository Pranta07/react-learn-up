import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useData from "../../customhooks/useData";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
    const [courses, setCourses] = useData();
    return (
        <Container>
            <h1 className="pt-2 text-center fw-bold">
                Find The Right Online Course For You!
            </h1>
            <p className="text-center">
                You don't have to struggle alone, you've got our assistance and
                help.
            </p>
            <hr />
            <Row xs={1} md={2} lg={4} className="pt-3 pb-3 g-3">
                {courses.map((course) => (
                    <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>
                ))}
            </Row>
        </Container>
    );
};

export default Courses;
