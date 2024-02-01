import React from 'react'
import './Diamond.css'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus } from "react-icons/fa6";

function Diamond() {
    return (
        <div className='diamond'>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Caratglow Jewellery - Your Everyday Elegance <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p> The definition of modern jewellery has been redefined and evolved over the years. Now it is beyond the family tradition and cultural heritage. It is substantially more about self-worth and investments in developing ideas and one’s personality so they showcase style and uniqueness. </p>
                                    <p> CaratGlow’s gold jewellery is a manifestation of the beauty of every woman’s journey. Our compelling jewellery designs will make your heart skip a beat. We firmly believe in providing the best to customers be it design, quality, price, or service. </p>
                                    <p> We have an extensive range of diamond earrings, diamond rings, bangles, diamond bracelets, diamond mangalsutra, tanmaniya & nosepin. You can <span>Buy Elegant Diamond Jewellery Online</span> and get the happiness delivered at your doorstep. </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Diamond Earring <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>Earrings are the everyday essentials for each woman. Women are obsessed with buying matching diamond studs or hoop earrings for their outfits. CaratGlow takes care of your obsessions and provides you wide collection  of diamond studs, solitaire earrings, gold hoop earrings, drop earrings, Huggies earrings, sui dhaga& ear cuffs to suit every specific need. </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Diamond Rings <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>If you are looking for diamond rings for men and women online, look no further. CaratGlow offers the latest collection of white gold, yellow gold, rose gold & solitaire diamond engagement rings that you can buy online. Get a captivating experience of magnificent artisanship & experience the contentment of owning a beautiful diamond ring on CaratGlow. Be it engagement, wedding, party, office wear, or a casual day, we have a diamond ring for every occasion. Browse our collection here</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Diamond Pendant <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>All your chains are missing spark without the pendant. CaratGlow’s fine collection of diamond pendants add a stunning spark to your outfit effortlessly. From the office, a party to daily wear, our diamond solitaire pendants never fail to make you stand out for every occasion. You can buy diamond pendants online available in 14K, 18K, yellow gold, white gold, rose gold variants here</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Tanmania <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>Women gold tanmaniya is an intricate piece of jewellery that appeals to every modern woman. It can be carried with any attire to keep the lively spirit alive. A Gold Tanmania or Mangalsutra transforms your whole look and helps you to ace your fashion game. If you are looking for splendid tanmaniya or mangalsutra, you can check out our artistic collection to buy online.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Diamond Bangles <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>Diamond bangles have been an extension of women's traditional look for ages. The diamond bangle not only embellishes your wrist in grace but also makes a reflection of your excellent taste in jewellery. A diamond-studded bangle is what you need to complete your look for those extra special occasions in your life. CaratGlow is an online jewellery portal where you can buy diamond bangles online and look mesmerizing for that special event.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Nosepin <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                    <p>Diamond Nosepin is like a little shining star that steals the show and increases the beauty of the face by abundant times. The nosepin has been a part of Indian culture for ages and in modern fashion, it always does a fabulous job of adding ethnic touch to your traditional attire. Be it starry, floral, geometric patterns, single stone or multi-stone, you have a variety of options to make a choice and buy diamond nose pin online on CaratGlow.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Caratglow Jewellery - Your Everyday Elegance <FaPlus /></Accordion.Header>
                        <Accordion.Body>
                            <div className='diamond_one'>
                                <div className='diamond_one_paragraph'>
                                   <p>Diamond Nosepin is like a little shining star that steals the show and increases the beauty of the face by abundant times. The nosepin has been a part of Indian culture for ages and in modern fashion, it always does a fabulous job of adding ethnic touch to your traditional attire. Be it starry, floral, geometric patterns, single stone or multi-stone, you have a variety of options to make a choice and buy diamond nose pin online on CaratGlow.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}

export default Diamond
