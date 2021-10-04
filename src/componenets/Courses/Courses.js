import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../customhooks/useData";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
    const [courses, setCourses] = useData();
    return (
        <Container>
            <h1 className="text-center fw-bold pt-2">
                Find The Right Online Course For You!
            </h1>
            <p className="text-center">
                You don't have to struggle alone, you've got our assistance and
                help.
            </p>
            <hr />
            <Row sm="1" md="2" lg="4" className="pt-3 pb-3 g-3">
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
