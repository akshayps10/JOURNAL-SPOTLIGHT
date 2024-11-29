import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import "firebase/compat/app";
// import "firebase/compat/auth";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   age: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  // });

  // // Update state on input change
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Sign Up Form Submitted", formData);
    
  // };

  // // Google Sign-In
  // const handleGoogleSignIn = () => {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("Google Sign-In Successful: ", user);
  //       // Handle user info here
  //     })
  //     .catch((error) => {
  //       console.error("Error with Google Sign-In: ", error);
  //     });
  // };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form className="border p-4 rounded shadow-sm">
            {/* Name Field */}
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                // required
              />
            </Form.Group>

            {/* Age Field */}
            <Form.Group controlId="age" className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                // value={formData.age}
                // onChange={handleChange}
                // required
              />
            </Form.Group>

            {/* Phone Field */}
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
                // required
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Sign Up Button */}
            <Link to={"/SignUpForm"}> <Button type="submit" variant="primary" className="w-100 mb-3">
              Sign Up
            </Button>
            </Link>

            {/* Google Sign-In Button */}
            <Button
              variant="danger"
              className="w-100"
              // onClick={handleGoogleSignIn}
            >
              Sign Up with Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
