import { Container, Row, Col } from "react-bootstrap";
import { about } from "../data/data";
function About() {
   return (
      <Container>
         <Row>
            {
               about.map(function(d){
                  return(
                     <Col>
                     <h2 class=" abt font-weight-bold text-center my-4">About us</h2>
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
                                       <h6 class="font-weight-medium my-3">Your complete website in just few minutes</h6>
                                       <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                       <a class="linking font-weight-medium" href="#">Lets Talk!</a>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                       <span class="text-info-gradiant display-5">G</span>
                                       <h6 class="font-weight-medium my-3">Get Powerful Results with WrapKit</h6>
                                       <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                       <a class="linking font-weight-medium" href="#">Lets Talk!</a>
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
      </Container>
   );
}

export default About;