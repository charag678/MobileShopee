import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./view/screen/Home1";
import About from "./view/screen/About";
import Details from "./view/screen/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Nav, NavDropdown, Navbar, Form } from "react-bootstrap";
import { menubar } from "./view/data/data";
import './view/style/style.css'
import Contact from "./view/screen/Contact";
import Service from "./view/screen/Service";
import Register from "./view/screen/Register"
import Login from "./view/screen/Login";
import { useState } from "react";
import Addtocart from "./view/screen/Addtocart";
function App() {
  console.log(menubar);
  const [user, setUser] = useState(localStorage.getItem('user'));

  console.log(localStorage.getItem('user'));



  function logout() {
    alert('logout')
    localStorage.setItem('user', false)
    setUser(false)
  }
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col>
              <Navbar bg="white" expand="lg">
                <Container fluid>
                  <Navbar.Brand><Link to="/" className="text-decoration-none text-secondary" ><span className="logo1"><span className="w1">📱M</span><span className="w2">O</span><span className="w3">B</span><span className="w4">I</span><span className="w5">L</span><span className="w6">E</span><span className="logo2"> SHOPEE</span></span></Link></Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link><Link to={"/"} className="text-decoration-none text-danger">Home</Link></Nav.Link>
                      {
                        menubar.map(function (d) {
                          return (
                            <Nav.Link><Link to={`/${d}`} className="text-decoration-none text-danger">{d}</Link></Nav.Link>
                          )
                        })
                      }
                      {user ? null : <>
                        <Nav.Link><Link to={"/register"} className="text-decoration-none text-danger">Register</Link></Nav.Link>
                        <Nav.Link><Link to={"/login"} className="text-decoration-none text-danger">Login</Link></Nav.Link>
                      </>
                      }
                      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

                    </Nav>
                    {/* <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form> */}
                    {
                      user ? <Button onClick={logout} variant="outline-danger">Logout</Button> : null
                    }
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/details' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          {/* <Route path='/form' element={<Form />} /> */}





          {
            user ? null : <>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </>


          }






          <Route path='/addtocart' element={<Addtocart />} />




        </Routes>
        <>
          <Container fluid>
            {/* Footer */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <footer className="bg-dark text-white pt-5 pb-4" >
              <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">📱MOBILE SHOPEE</h5>
                    <p>Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                    <p className="text-white">Redmi Note 9 Pro
                    </p>
                    <p className="text-white">Samsung Galaxy M51
                    </p>
                    <p className="text-white">Tecno Phantom X2 Pro 5G
                    </p>
                    <p className="text-white">Samsung Galaxy S22 5G
                    </p>
                    <p className="text-white">Apple iPhone 14 Pro Max
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                    <Link to='/about' className="text-decoration-none">
                      <p className="text-white">About
                      </p></Link>
                    <Link to='/service' className="text-decoration-none">
                      <p className="text-white">Service
                      </p></Link>
                    <Link to='/contact' className="text-decoration-none">
                      <p className="text-white">Contact
                      </p></Link>
                    <Link to='/register' className="text-decoration-none">
                      <p className="text-white">Register
                      </p></Link>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                      <i className="fas fa-home mr-3"></i> Jaipur 302012,Rajasthan,India</p>
                    <p> <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p> <i className="fas fa-phone mr-3"></i> + 01 234 567 89</p>
                    <p> <i className="fas fa-print mr-3"></i> +01 456 237 89
                    </p>
                  </div>
                  <hr className="mb-4" />
                  <div className="w-100 row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-8">
                      <p>Copyright © 2023 | Chirag Sharma, All right reserved:
                        <strong className="text-warning">📱MOBILE SHOPEE</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </footer>

          </Container>

        </>
      </BrowserRouter>
    </>
  );
}

export default App;