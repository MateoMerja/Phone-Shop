import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
const ReadOne = () => {
  const { id } = useParams();
  const navItem = useNavigate();
  const [element, setElement] = useState({});
  useEffect(() => {
    const dbInfo = async () => {
      await axios
        .get("http://localhost:5000/readOneItem/" + id)
        .then((res) => setElement(res.data))
        .catch((err) => console.log("Not read" + err));
    };
    dbInfo();
  }, [id]);
  // Funksion delete
  // const handleDelete = async (id) => {
  //   await axios
  //     .delete("http://localhost:5000/deleteOneItem/" + id)
  //     .then((res) => {
  //       navItem("/");
  //     })
  //     .catch((err) => console.log("Not Deleted" + err));
  // };
  return (
    <Container className="my-5 w-75 mx-auto">
      <Row>
        <Col xs={12} md={6}>
          <img
            src={"http://localhost:5000/images/" + element.photo}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6}>
          <h1>{element.name}</h1>
          {/* <Button variant="danger" onClick={() => handleDelete(element._id)}>
            Delete
          </Button>
          <Button variant="warning" href={"/updateOne/" + element._id}>
            Update
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ReadOne;
