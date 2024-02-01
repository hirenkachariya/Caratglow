import React from 'react'
import './Lorem.css'
import { Col, Container, Row } from 'react-bootstrap'
import lorem_one from '../img/lorem_one.png'
import lorem_two from '../img/lorem_two.png'
import lorem_three from '../img/lorem_three.png'
import lorem_four from '../img/lorem_four.png'

function Lorem() {
    return (
        <div className='lorem'>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className='lorem_one'>
                            <div className='lorem_one_img'>
                                <img src={lorem_one} />
                            </div>
                            <div className='lorem_one_heading'>
                                <h4>Free Shipping</h4>
                            </div>
                            <div className='lorem_one_paragraph'>
                                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className='lorem_one'>
                            <div className='lorem_one_img'>
                                <img src={lorem_two} />
                            </div>
                            <div className='lorem_one_heading'>
                                <h4>Free Shipping</h4>
                            </div>
                            <div className='lorem_one_paragraph'>
                                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className='lorem_one'>
                            <div className='lorem_one_img'>
                                <img src={lorem_three} />
                            </div>
                            <div className='lorem_one_heading'>
                                <h4>Free Shipping</h4>
                            </div>
                            <div className='lorem_one_paragraph'>
                                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className='lorem_one'>
                            <div className='lorem_one_img'>
                                <img src={lorem_four} />
                            </div>
                            <div className='lorem_one_heading'>
                                <h4>Free Shipping</h4>
                            </div>
                            <div className='lorem_one_paragraph'>
                                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Lorem
