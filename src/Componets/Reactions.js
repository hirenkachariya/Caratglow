import React from 'react'
import './Reactions.css'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import reactions from '../img/reactions.jpg'

function Reactions() {
    const responsive = {
        0: { margin: 10, items: 1 },
        600: { items: 1 },
        1024: { items: 1, nav: true },
        1200: { items: 1, nav: true },
        1366: { items: 1, nav: true },
    }
    return (
        <div className='reactions'>
            <Container>
                <div className='reactions_heading'>
                    <h4>Customer's Reactions</h4>
                </div>
                <OwlCarousel className="owl-theme"
                    items={1}
                    loop={true}
                    margin={0}
                    nav={false}
                    dots={true}
                    responsive={responsive}

                // navText={[
                //     '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                //     '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>'
                // ]}
                >
                    <div className="item" key="1">
                        <div className='reactions_position'>
                            <div className='reactions_position_div'>
                                <Row>
                                    <Col md={4} sm={12}>
                                        <div className='reactions_left'>
                                            <img src={reactions} />
                                        </div>
                                    </Col>
                                    <Col md={8} sm={12}>
                                        <div className='reactions_right'>
                                            <div className='reactions_right_paragraph'>
                                                <p>My mother’s birthday was coming. This time I wanted to gift her something special. I found this delicate pendant on CaratGlow that was beautiful and perfectly fit into my budget</p>
                                            </div>
                                            <div className='reactions_right_span'>
                                                <span>Prachi Chopra</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="item" key="2">
                        <div className='reactions_position'>
                            <div className='reactions_position_div'>
                                <Row>
                                    <Col md={4} sm={12}>
                                        <div className='reactions_left'>
                                            <img src={reactions} />
                                        </div>
                                    </Col>
                                    <Col md={8} sm={12}>
                                        <div className='reactions_right'>
                                            <div className='reactions_right_paragraph'>
                                                <p>My mother’s birthday was coming. This time I wanted to gift her something special. I found this delicate pendant on CaratGlow that was beautiful and perfectly fit into my budget</p>
                                            </div>
                                            <div className='reactions_right_span'>
                                                <span>Prachi Chopra</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </Container>
        </div >
    )
}

export default Reactions
