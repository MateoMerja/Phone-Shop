import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
const UpdateOne = () => {
  const { id } = useParams();
  const navItem = useNavigate();
  const [element, setElement] = useState({
    name: "",
    description: "",
    photo: "",
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  useEffect(() => {
    const dbInfo = async () => {
      await axios
        .get("http://localhost:5000/readOneItem/" + id)
        .then((res) => setElement(res.data))
        .catch((err) => console.log("Not read" + err));
    };
    dbInfo();
  }, [id]);
  const handleChange = (e) => {
    setElement({ ...element, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setElement({ ...element, photo: e.target.files[0] });
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const infosData = new FormData();
    Object.entries(element).forEach(([key, value]) => {
      infosData.append(key, value);
    });
    await axios
      .patch("http://localhost:5000/updateItem/" + id, infosData)
      .then((res) => {
        console.log("update item");
        // Navigimi
        navItem("/adminPannel");
      })
      .catch((err) => console.log("Not update item" + err));
  };
  return (
    <Container>
      <h1> Update item</h1>
      <Form onSubmit={handleUpdate} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={element.name}
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
            value={element.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Update Item
        </Button>
      </Form>
      {uploadedImage ? (
        <img src={uploadedImage} alt="Uploaded" rounded className="img-fluid" />
      ) : (
        <img
          src={`http://localhost:5000/images/${element.photo}`}
          alt="Uploaded"
          rounded
          className="img-fluid"
        />
      )}
    </Container>
  );
};

export default UpdateOne;
