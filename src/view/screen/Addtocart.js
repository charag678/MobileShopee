import { Container, Row, Col } from "react-bootstrap";
import '../style/style.css'
import { useEffect, useState } from "react";
import axios from "axios";
function Addtocart() {
    const [cartdata, setCart] = useState('')
    useEffect(() => {

        async function show() {

            let res = await axios.post('showtocart', {})
            // console.log(res.data);
            setCart(res.data)
        }
        show()
    }, [])
    


    console.log(cartdata);
    return (
        <Row>
            <>{
                cartdata && cartdata.map((d) => {
                    return (
                        <>

                            
                            <Col lg={3}>

                                <div class="card" >
                                    <Col lg={4}>
                                        <img src={d.Image} class="card-img-top" alt="" />
                                    </Col>
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">{d.name}</h5>
                                    </div>
                                    <ul class="list-group list-group-light list-group-small">
                                        <li class="list-group-item px-4">Rs:<span className="cart-p"> {d.Price}</span></li>
                                        <li class="list-group-item px-4"><h6>{d.description}</h6></li>
                                    </ul>
                                    
                                
                                </div>
                                
                            </Col>  
                            
                        </>
                    )
                })
            }

            </>
        </Row>

    );
}

export default Addtocart;