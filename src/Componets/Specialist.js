import React from 'react'
import './Specialist.css'
import { Col, Container, Row } from 'react-bootstrap'
import specialist from '../img/specialist.jpg'

function Specialist() {
    return (
        <div className='specialist'>
            <Container>
                <Row className='g-0'>
                    <Col lg={6} md={6} sm={12}>
                        <div className='specialist_img'>
                            <img src={specialist} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='specialist_list'>
                            <div className='specialist_list_blog'>
                                <div className='specialist_list_heading'>
                                    <h4>Consult with a Jewelry Specialist</h4>
                                </div>
                                <div className='specialist_list_paragraph'>
                                    <p>A more thoughtful way to experience fine jewelry, built around you.</p>
                                </div>
                                <div className='specialist_list_button'>
                                    <span>Book a Virtual Appointment</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Specialist
