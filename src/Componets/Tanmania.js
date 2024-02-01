import React from 'react'
import './Tanmania.css'
import { Col, Container, Row } from 'react-bootstrap'
import tanmania from '../img/tanmania.jpg'

function Tanmania() {
    return (
        <div className='tanmania'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='tanmania_list'>
                            <div className='tanmania_list_heading'>
                                <h4>Tanmania</h4>
                            </div>
                            <div className='tanmania_list_paragraph'>
                                <p> Shop our extensive inventory of fine diamonds. Browser our extensive range of beautifully crafted Diamond Rings, Diamond Bracelets, Diamond Earrings, Diamond Necklaces and Other Elegant Diamond Jewellery.</p>
                            </div>
                            <div className='tanmania_list_button'>
                                <span>Explore Collection</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='tanmania_img'>
                            <img src={tanmania} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tanmania

