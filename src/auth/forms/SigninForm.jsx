import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Form Submitted");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
           
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>

   
            <Button type="submit" variant="primary" className="w-100 mb-3">
              Sign In
            </Button>

            <Link to={"/Sign-Up"}>
            <Button
              variant="warning"
              className="w-100"
              onClick={() => console.log("Sign Up Button Clicked")}
            >
              Sign Up
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInForm;
