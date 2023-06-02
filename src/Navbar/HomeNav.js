import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HomeNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ABC Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="OPD" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/customeropd">INVESTIGATION</NavDropdown.Item>
              <NavDropdown.Item href="/customeropd/sale/report">SALES REPORT</NavDropdown.Item>
              <NavDropdown.Item href="/itemexam">ITEM INVENTORY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/doctor">DOCTOR LIST</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="IPD" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/patientIPD">ADMISSION</NavDropdown.Item>
              <NavDropdown.Item href="/otdetails">OT INFO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cabin">CABIN SERVICE</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PHARMACY" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/customerpharmacy">POS</NavDropdown.Item>
              <NavDropdown.Item href="/customerpharmacy/list">Customer List</NavDropdown.Item>
              <NavDropdown.Item href="/medicine">Medicine Inventory</NavDropdown.Item>
              <NavDropdown.Item href="/pharmacy/sale/report">SALES REPORT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/supplier">SUPPLIER</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
          <Nav.Link href="/employee">EMPLOYEE</Nav.Link>
            <Nav.Link href="/material">HOSPITAL INVENTORY</Nav.Link>
            <Nav.Link href="/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default HomeNav;