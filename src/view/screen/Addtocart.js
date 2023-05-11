// import { Container, Row, Col } from "react-bootstrap";
// import '../style/style.css'
// import { useEffect, useState } from "react";
// import axios from "axios";
// function Addtocart() {
//     const [cartdata, setCart] = useState('')
//     useEffect(() => {

//         async function show() {

//             let res = await axios.post('showtocart', {})
//             // console.log(res.data);
//             setCart(res.data)
//         }
//         show()
//     }, [])

//     console.log(cartdata);
//     return (
//         {
//             cartdata && cartdata.map((d) => {
//                 return (
//                     <>
//                     <Row>


//                         <Col lg={3}>

//                             <div class="card">
//                                 <Col lg={4}>
//                                     <img src={d.Image} class="card-img-top"  />
//                                 </Col>

//                                 <div class="card-body">
//                                     <h5 class="card-title">{d.name}</h5>
//                                 </div>
//                                 <ul class="list-group list-group-light list-group-small">
//                                     <li class="list-group-item px-4">Rs:<span className="cart-p"> {d.Price}</span></li>
//                                     <li class="list-group-item px-4"><h6>{d.description}</h6></li>
//                                 </ul>


//                             </div>

//                         </Col>


//                         </Row>
//                         </>
//                         )

//                 })
//             }




//     );
// }

// export default Addtocart;
import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function Cart() {

    const [data, setData] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {})
            console.log(res.data);
            setData(res.data)
        }
        show()
    }, [])

    function removeitem(index) {
        console.log(index);
        setData(data.map((d, index1) => {
            return index !== index1 && d
        }))

    }
    console.log(data);

    return (
        <Container>

            

                
                        {
                            data ? data.map((d, index) => {
                                if (d !== false) {
                                    return (
                                        <Row>
                                        <Col className="border mt-5 mb-4">

                                            <div className="addtocartshow d-flex">
                                                <div className="addtocartshow-img">
                                                    <img src={d.Image} style={{ height: '200px' }} />

                                                </div>
                                                <div className="addtocartshow-text mt-3">
                                                    <h5><p>{d.name}</p></h5>
                                                   <h5> ₹<span className="cart-p"> {d.Price}</span></h5><br/>
                                                    <h6>{d.description}</h6><br/>
                                                    <h6><p>Qty:{1}</p></h6>


                                                </div>

                                                <div className="addtocartshow-text mt-4">
                                                    <Button onClick={() => removeitem(index)}  variant="outline-danger">Remove</Button>

                                                </div>
                                            </div>
                                            </Col>
                                             </Row>
                                )}
                                
                            }):null
                        }

                                       
                   
                

                

            

        </Container>
    )
}