import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_blog'>
                <Container>
                    <Row>
                        <Col lg={8} md={12}>
                            <Row>
                                <Col lg={4} md={4} sm={4}>
                                    <div className='footer_one'>
                                        <div className='footer_one_heading'>
                                            <h5>About Caratglow</h5>
                                        </div>
                                        <div className='footer_one_paragraph'>
                                            <p>We provide the best Quality of products to you.We are always here to help our lovely customers.</p>
                                        </div>
                                    </div>
                                    <div className='footer_two'>
                                        <div className='footer_two_heading'>
                                            <h5> Working Hours</h5>
                                        </div>
                                        <div className='footer_two_list'>
                                            <ul>
                                                <li>Monday to Friday</li>
                                                <li>10:00AM to 7:00PM</li>
                                                <li>+91 99789 55755</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3} sm={3}>
                                    <div className='menu_list'>
                                        <div className='menu_list_heading'>
                                            <h5>Customer Care</h5>
                                        </div>
                                        <div className='menu_list_blog'>
                                            <ul>
                                                <li>Faq's</li>
                                                <li>Return Policy</li>
                                                <li>Lifetime Exchange & Buy-Back</li>
                                                <li>Diamond Guide</li>
                                                <li>Sitemap</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} sm={2}>
                                    <div className='menu_list'>
                                        <div className='menu_list_heading'>
                                            <h5>Shop</h5>
                                        </div>
                                        <div className='menu_list_blog'>
                                            <ul>
                                                <li>Ring</li>
                                                <li>Earring</li>
                                                <li>Pendant</li>
                                                <li>Tanmania</li>
                                                <li>Bangle</li>
                                                <li>Nosepin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3} sm={3}>
                                    <div className='menu_list'>
                                        <div className='menu_list_heading'>
                                            <h5>Our Company</h5>
                                        </div>
                                        <div className='menu_list_blog'>
                                            <ul>
                                                <li>About Us</li>
                                                <li>Privacy Policy</li>
                                                <li>Terms & Conditions</li>
                                                <li>Affiliate Partner</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={12}>
                            <div className='newsletter'>
                                <div className='newsletter_heading'>
                                    <h5>Newsletter</h5>
                                </div>
                                <div className='newsletter_paragraph'>
                                    <p>Join CaratGlow to receive the latest updates & offers</p>
                                </div>
                                <div className='newsletter_input'>
                                    <input type='text' placeholder='Your Email' />
                                    <span>Subscribe</span>
                                </div>
                                <div className='Follow_heading'>
                                    <h5>Follow Us</h5>
                                </div>
                                <div className='Follow_list'>
                                    <ul>
                                        <li><FaSquareFacebook /></li>
                                        <li><FaTwitter /></li>
                                        <li><FaLinkedinIn /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaPinterestP /></li>
                                        <li><FaWhatsapp /></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='country'>
                        <div className="fdivsv">
                            <span>Surat </span> | <span>Mumbai </span> | <span>Delhi</span> | <span>Bangalore</span> | <span>Hyderabad</span> | <span className="cityspace">Ahmedabad</span> | <span className="cityspace">Chennai</span> | <span className="cityspace">Kolkata</span> | <span className="cityspace">Pune</span> | <span className="cityspace">Jaipur</span> | <span className="cityspace">Lucknow</span> | <span className="cityspace">Kanpur</span> | <span className="cityspace">Nagpur</span> | <span className="cityspace">Indore</span> | <span className="cityspace">Vadodara</span> | <span className="cityspace">Dehradun </span> | <span className="cityspace">Gandhinagar</span> | <span className="cityspace">Shimla </span> | <span className="cityspace">Guntur</span> | <span className="cityspace">Hubli</span> | <span className="cityspace">Amritsar</span> | <span className="cityspace">Gurgaon</span> | <span className="cityspace">Kochi </span> | <span className="cityspace">Visakhapatnam</span> | <span className="cityspace">Patna</span> | <span className="cityspace">Chandigarh</span> | <span className="cityspace">Rohtak</span> | <span className="cityspace">Ranchi</span> | <span className="cityspace">Thiruvananthapuram</span> | <span className="cityspace">Bhopal</span> | <span className="cityspace">Imphal</span> | <span className="cityspace">Aizawl</span> | <span className="cityspace">Cuttack</span> | <span className="cityspace">Pondicherry</span> | <span className="cityspace">Gangtok</span> | <span className="cityspace">Srinagar</span> | <span className="cityspace">Agartala</span> | <span className="cityspace">Udaipur</span> | <span className="cityspace">Jodhpur</span> | <span className="cityspace">Vijaywada</span> | <span className="cityspace">Nasik</span>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='footer_bottom'>
                <p>©2023 Caratglow. All Rights Reserved  | Managed & Developed by<span>Weingenious Technocrats</span></p>
            </div>
        </div>
    )
}

export default Footer
