import "./header.css";
import hamicon from "./menu.png";

import { useState, Image } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Header">
            <Container fluid>
                <Row>
                    <Col className="d-flex flex-row py-2">
                        <img src={hamicon} onClick={handleShow} id="icon"/>
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                        <h4 className="d-flex flex-row-reverse mt-2 me-3" id="header-text">James' Site</h4>
                    </Col>
                </Row>
            </Container>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>James' Site</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default App;
