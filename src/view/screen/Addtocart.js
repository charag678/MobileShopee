import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
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
        <Container fluid>

            <Row className="justify-content-center">
                {
                    <Col className="col-lg-6">
                        {
                            data ? data.map((d, index) => {
                                if (d !== false) {
                                    return (
                                        <div className="border mt-5 mb-4">
                                            <div className="addtocartshow ">
                                                <div className="addtocartshow-img">
                                                    <img src={d.Image} style={{ height: '200px' }} />

                                                </div>
                                                <div className="addtocartshow-text mt-3 ">
                                                    <h5><p>{d.name}</p></h5>
                                                    <h5> ₹<span className="cart-p"> {d.Price}</span></h5><br />
                                                    <h6><p className="disc">{d.Disc}</p></h6>
                                                    <h6>{d.description}</h6><br />
                                                    <h6><p>Qty:{1}</p></h6>
                                                    <Button className="remove mb-4" variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>


                                                </div>

                                                <div className="addtocartshow-text mt-4">

                                                </div>
                                            </div>
                                        </div>


                                    )
                                }
                            }) : null
                        }
                    </Col>
                }

                <center><Link className="buynow" to="/Payment"> <Button>Proceed to Payment</Button></Link></center>
            </Row>

            <br /> <br />
            <br /> <br />

            <br /> <br />
            <br /> <br />
        </Container>

    )
}