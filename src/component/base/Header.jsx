import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import HeaderImage from '../style/image/header.png'



function Header() {
    return (
        <>
        {['sm',].map((expand) => (
          <Navbar key={expand} expand={expand} >
            <Container fluid style={{height:'70px'}}>
              <Navbar.Brand href="#" style={{ marginLeft:'20%'}}>
                <Image src={HeaderImage} rounded />
              </Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link href="#action1" style={{ marginRight:'5%', fontFamily:'Nanum Gothic Coding'}}>스터디모집</Nav.Link>
                    <Nav.Link href="#action2" style={{marginRight:'5%'}}>나의 스터디</Nav.Link>
                    <Nav.Link href="#action3" >마이페이지</Nav.Link>
                  </Nav>
                  <Form className="d-flex" style={{marginRight:'10%'}}>
                    <Form.Control
                      type="search"
                      placeholder="검색"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
                  <Button variant="secondary" style={{marginRight:'3%'}}>로그인</Button>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
};

export default Header;