import React, { useState, useContext } from "react";
import { UserContext } from "../Auth/UserContext";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    photo: "",
  });
  const navItem = useNavigate();
  const { userInfo, setUserInfo, loading } = useContext(UserContext);
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setItem({ ...item, photo: e.target.files[0] });
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const infosData = new FormData();
    Object.entries(item).forEach(([key, value]) => {
      infosData.append(key, value);
    });
    infosData.append("userId", userInfo?.id);
    await axios
      .post("http://localhost:5000/addItem", infosData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Added item");
        navItem("/adminPannel");
      })
      .catch((err) => console.log("Not added item"));
  };
  return (
    <Container className="my-5 w-75 mx-auto">
      <h1> Create item</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            accept=".jpg, .png, jpeg"
            onChange={handleFile}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={item.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
      {uploadedImage && (
        <img src={uploadedImage} alt="Uploaded" rounded className="img-fluid" />
      )}
    </Container>
  );
};

export default Create;
