import React from 'react'
import './Jumbotron.css'
import { Col, Container, Row } from 'react-bootstrap'
import jumbotron_one from '../img/jumbotron_one.jpg'
import jumbotron_two from '../img/jumbotron_two.jpg'

function Jumbotron() {
    return (
        <div className='jumbotron'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className='jumbotron_left'>
                            <div className='jumbotron_left_img'>
                                <img src={jumbotron_one} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className='jumbotron_right'>
                            <div className='jumbotron_right_img'>
                                <img src={jumbotron_two} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jumbotron
