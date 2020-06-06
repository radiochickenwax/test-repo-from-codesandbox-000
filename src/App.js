import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
//import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';

import "bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";

function App() {
  function onToggle(isOpen) {
    console.log(isOpen);
  }
  return (
    <Container>
      <Row>
        <Col />
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Things
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/blog">blog</Dropdown.Item>
              <Dropdown.Item href="/mediawiki">mediawiki</Dropdown.Item>
              <Dropdown.Item href="/sketches">Sketches</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>
        <Col>
          <LoremIpsum p={20} />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
