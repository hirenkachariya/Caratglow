import React from 'react'
import './ProductDetails.css'
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import metal_one from '../img/metal_one.png'
import metal_two from '../img/metal_two.png'
import metal_three from '../img/metal_three.png'
import metal_four from '../img/metal_four.png'
import metal_five from '../img/metal_five.png'
import metal_six from '../img/metal_six.png'
import certified_one from '../img/certified_one.png'
import certified_two from '../img/certified_two.png'

function ProductDetails() {

    let location = useLocation();

    return (
        <div className='productdetails'>
            <Header />
            <div className='productdetails_one_menubar'>
                <ul>
                    <li>Home</li>
                    <li>/</li>
                    <li>Pendant</li>
                    <li>/</li>
                    <li>With Bail</li>
                    <li>/</li>
                    <li>Infinitas Heart Diamond Pendant</li>
                </ul>
            </div>
            <Container className='productdetails_one'>
                <Row>
                    <Col lg={5} md={12}>
                        <div className='productdetails_img'>
                            <img src={location?.state?.product?.Image} />
                        </div>
                    </Col>
                    <Col lg={7} md={12}>
                        <div className='productdetails_list'>
                            <div className='productdetails_heading'>
                                <h4>{location?.state?.product?.ProductTitle}</h4>
                            </div>
                            <div className='productdetails_span'>
                                <span>Sku: CG-DP 271214Y</span>
                            </div>
                            <div className='productdetails_paragraph'>
                                <p>{location?.state?.product?.ProductDesc}</p>
                            </div>
                            <div className='productdetails_price_list'>
                                <div className='productdetails_price'>
                                    <span>₹10,579</span>
                                </div>
                                <div className='productdetails_price_link'>
                                    <span>Fair Pricing Guaranteed</span>
                                </div>
                            </div>
                            <div className='productdetails_metal_list'>
                                <div className='headingproductdetails_metal'>
                                    <span>Metal:</span>
                                </div>
                                <div className='headingproductdetails_metal_img'>
                                    <ul>
                                        <li><img src={metal_one} /></li>
                                        <li><img src={metal_two} /></li>
                                        <li><img src={metal_three} /></li>
                                        <li><img src={metal_four} /></li>
                                        <li><img src={metal_five} /></li>
                                        <li><img src={metal_six} /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='first_border'>
                                <div className='headingproductdetails_list_button'>
                                    <div className='headingproductdetails_list_button_one'>
                                        <span>Side Diamond</span>
                                    </div>
                                    <div className='headingproductdetails_list_button_two'>
                                        <span>Chain</span>
                                    </div>
                                </div>
                                <div className='color_blog'>
                                    <div className='color_blog_heading'>
                                        <span>Color/Clarity:</span>
                                    </div>
                                    <div className='color_blog_list'>
                                        <ul>
                                            <li>SI - IJ</li>
                                            <li>SI - GH</li>
                                            <li>VS - GH</li>
                                            <li>VVS - EF</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='color_blog_button'>
                                <div className='color_button_one'>
                                    <span>Add to cart</span>
                                </div>
                                <div className='color_button_two'>
                                    <span>Live Trail</span>
                                </div>
                            </div>
                            <div className='back_blog'>
                                <ul>
                                    <li>15 -Day Money Back</li>
                                    <li>Lifetime Exchange & Buy-Back</li>
                                    <li>Certified  Jewellery </li>
                                </ul>
                            </div>
                            <div className='back_blog_paragraph'>
                                <p>Any Questions? Please feel to reach us at:<strong>+91 99789 55755</strong></p>
                            </div>
                            <div className='Certified_heading'>
                                <h6>Certified By : </h6>
                                <div className='Certified_img_one'>
                                    <img src={certified_one} />
                                </div>
                                <div className='Certified_img_two'>
                                    <img src={certified_two} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails
