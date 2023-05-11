import React from "react";
import { Container, Row, Col, Carousel, Card, ListGroup, Button } from "react-bootstrap";
import {product,slider} from "../data/data";
import { useNavigate } from "react-router-dom";
import { about } from "../data/data";
import { product1 } from "../data/data";
function Home1() {
   const nav = useNavigate()
   console.log(product);
   return (
      <Container fluid>
         <Row>
            <Col>
               <Carousel>
                  {

                     slider.map(function (d) {
                        return (
                           <Carousel.Item>
                              <video
                                 className="d-block w-100"
                                 src={d.img} muted autoPlay loop
                                  
                              />
                               <Carousel.Caption>
                                 <br/>
                                 <h3>SPECIAL OFFER 🤩 </h3>
                                 <h2>SUPER SALE 50% OFF</h2>
                              </Carousel.Caption> 

                           </Carousel.Item>


                        )
                     })

                  }

               </Carousel>

            </Col>
         </Row>
         <Row>
            {
               product.map(function (d) {
                  return (
                     <Col className="Sec">
                        <Card style={{ width: '18rem' }} className="cur">
                           <Card.Img variant="top" src={d.Image} onClick={() => nav('/details', { state: d })} />
                           <Card.Body>
                              <Card.Title>{d.name}</Card.Title>

                           </Card.Body>
                           <ListGroup className="list-group-flush">
                              <ListGroup.Item className="price">Price:{d.Price}</ListGroup.Item>
                              <ListGroup.Item>MRP:<del>{d.MRP}</del></ListGroup.Item>
                              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                           </ListGroup>
                           <Card.Body>
                              <Button className="text-decoration-none mb-1" variant="outline-primary" href="#" onClick={() => nav('/details', { state: d })}>Details</Button>
                           </Card.Body>
                        </Card>
                     </Col>
                  )
               })
            }
         </Row>
         <Row>
            {
               about.map(function (d) {
                  return (
                     <Col>
                        <h2 class="abt font-weight-bold text-center my-4"><u>About us</u></h2>
                        <div class="py-5 bg-light service-27">
                           <div class="container">
                              <div class="row">
                                 {/* <!-- column --> */}
                                 <div class="col-lg-6 align-self-center">
                                    {/* <span class="badge badge-info rounded-pill px-3 py-1 font-weight-light">Service 27</span> */}
                                    <h4 class="my-3">We have covered everything for you get desire results with us</h4>
                                    <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p>
                                    <div class="row">
                                       <div class="col-md-6 mt-4">
                                          <span class="text-info-gradiant display-5">Y</span>
                                          <h6 class="font-weight-medium my-3">Your complete website in just </h6>
                                          <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                    
                                       </div>
                                       <div class="col-md-6 mt-4">
                                          <span class="text-info-gradiant display-5">G</span>
                                          <h6 class="font-weight-medium my-3">Get Powerful Results</h6>
                                          <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                        
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-lg-6 text-center">
                                    <img src={d.Image} class="img-fluid" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Col>
                  )

               })
            }
         </Row>
         <Row>
            <h2 class="service font-weight-bold text-center my-4"><u>Service</u></h2>
            {
               product1.map(function (d) {
                  return (
                     <Col className="Sec">
                        <div class="card" style={{ width: '18rem' }}>
                           <img src={d.image} class="card-img-top" alt="" />
                           <Card.Title className="title text-center" ><h4>{d.name}</h4></Card.Title>
                           <div class="card-body">
                             <h6>{d.description}</h6>
                           </div>
                        </div>
                     </Col>
                  )
               })
            }
         </Row>
         <Row>
            <Col>
               <section class="mb-4">
                  <h2 class="h1-responsive font-weight-bold text-center my-4"><u>Contact us</u></h2>
                  <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                     a matter of hours to help you.</p>
                  <div class="row">
                     <div class="col-md-9 mb-md-0 mb-5">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="md-form mb-0">
                                 <input type="text" id="name" name="name" class="form-control" />
                                 <label for="name" class="">Your name</label>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="md-form mb-0">
                                 <input type="text" id="email" name="email" class="form-control" />
                                 <label for="email" class="">Your email</label>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-md-12">
                              <div class="md-form mb-0">
                                 <input type="text" id="subject" name="subject" class="form-control" />
                                 <label for="subject" class="">Subject</label>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-md-12">
                              <div class="md-form">
                                 <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                 <label for="message">Your message</label>
                              </div>
                           </div>
                        </div>
                        {/* </form> */}
                        <div class="text-center text-md-left">
                           <a class="btn btn-primary">Send</a>
                        </div>
                        <div class="status"></div>
                     </div>
                     <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                           <li><i class="fas fa-map-marker-alt fa-2x"></i>
                              <p>Jaipur 302012,Rajasthan,India</p>
                           </li>
                           <li><i class="fas fa-phone mt-4 fa-2x"></i>
                              <p>+ 01 234 567 89</p>
                           </li>
                           <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                              <p>info@example.com</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </section>
            </Col>
         </Row>

      </Container>

   );
}

export default Home1;