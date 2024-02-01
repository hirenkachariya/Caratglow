import React from 'react';
import './Banner.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import banner_one from '../img/banner_one.jpg'
import banner_two from '../img/banner_two.jpg'
import banner_three from '../img/banner_three.jpg'
import banner_four from '../img/banner_four.jpg'

function Banner() {
    const responsive = {
        0: { margin: 10, items: 1 },
        576: { items: 2, nav: true, margin: 30 },
        768: { items: 3, nav: true, margin: 30 },
        992: { items: 3, nav: true, margin: 30 },
        1024: { items: 4, nav: true, margin: 30 },
        1200: { items: 4, nav: true, margin: 30 },
        1400: { items: 4, nav: true, margin: 30 },
    }
    return (
        <div className='banner'>
            <Container>
                <div className='banner_heading'>
                    <h4>Shop By Category</h4>
                </div>
                <OwlCarousel className="owl-theme"
                    items={1}
                    loop={true}
                    margin={0}
                    nav={true}
                    dots={false}
                    responsive={responsive}

                    navText={[
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>'
                    ]}
                >
                    <>

                        <div className='banner_one'>
                            <div className='banner_one_img'>
                                <img src={banner_one} />
                            </div>
                            <div className='banner_one_heading'>
                                <h5>Earring</h5>
                            </div>
                        </div>
                        <div className='banner_two'>
                            <div className='banner_two_img'>
                                <img src={banner_two} />
                            </div>
                            <div className='banner_two_heading'>
                                <h5>Pendant</h5>
                            </div>
                        </div>
                        <div className='banner_three'>
                            <div className='banner_three_img'>
                                <img src={banner_three} />
                            </div>
                            <div className='banner_three_heading'>
                                <h5>NOSEPIN</h5>
                            </div>
                        </div>
                        <div className='banner_four'>
                            <div className='banner_four_img'>
                                <img src={banner_four} />
                            </div>
                            <div className='banner_four_heading'>
                                <h5>Bangle</h5>
                            </div>
                        </div>
                    </>
                </OwlCarousel>
            </Container>
        </div>
    );
}

export default Banner;
