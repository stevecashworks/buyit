import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link,  useNavigate } from "react-router-dom";
import { linkStyle } from "../hotdeals/hotDeals";
import styled from "styled-components";
import { IoMdLogOut } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../../../state/users/userslice";
import { headerProps } from "./header";
import { useState } from "react";
// changes will be made here
const LogoutBtn=styled.button`
  width:250px;
  height:35px;
  color:white;
  background-color: var(--info);
  border-radius: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
`

function Menu({children, showNav, toggleNav}:headerProps) {
  const  [showContent,setshowContent]=useState<boolean>(false)
  const show_or_hide= toggleNav?toggleNav:()=>{
    setshowContent(!showContent)
  }
  const  should_be_visible=showNav?showNav:showContent
  
  const user_is_logged_in=useSelector(selectIsLogged)
  const navigate=useNavigate()
  const logout= ()=>{
    localStorage.removeItem("buyit_token")
    navigate("/")
  }
  return (
    <>
      {["i"].map((expand) => (
        <Navbar
          style={{ backgroundColor: "transparent" }}
          key={expand}
          expand={expand}
          variant="dark"
        >
          <Container fluid style={{ color: "white" }}>
            <Navbar.Toggle
              onClick={() => {
                show_or_hide()
              }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              show={should_be_visible}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header onClick={()=>{show_or_hide()}} closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                  <Link onClick={()=>{show_or_hide()}} style={linkStyle} to="/">
                    Home
                  </Link>
                  <Link onClick={()=>{show_or_hide()}} style={linkStyle} to="/cart">
                    My Cart
                  </Link>
                  {children}

                  <NavDropdown
                    title="Me"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      <Link style={linkStyle} to="/login">
                        Login
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <Link style={linkStyle} to="/register">
                        Register
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      {user_is_logged_in && (
                        <LogoutBtn onClick={logout}>
                          Logout{" "}
                          <span style={{ marginLeft: "5px" }}>
                            <IoMdLogOut />
                          </span>
                        </LogoutBtn>
                      )}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;
