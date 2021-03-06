import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import { auth } from "../../firebase";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <section>
        <Row>
          <Col>
            <form>
              <input
                className="input-field"
                placeholder="username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <input
                className="input-field"
                placeholder="E-mail"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <br />
              <input
                className="input-field"
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <input
                className="input-field"
                placeholder="password"
                type="password"
              />
              <br />
              
                <Button variant="primary"

             
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }} >
                Register
                </Button>{' '}
        
            </form>
          </Col>
        </Row>
      </section>
      <Footer />
      <hr />
    </div>
  );
}
