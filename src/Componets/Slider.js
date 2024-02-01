import React from 'react';
import './Slider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider_one from '../img/slider_one.jpg'
import slider_img_one from '../img/slider_img_one.jpg'
import slider_img_two from '../img/slider_img_two.jpg'

function Slider() {
    const responsive = {
        0: { margin: 10, items: 1 },
        600: { items: 1 },
        1024: { items: 1, nav: true },
        1200: { items: 1, nav: true },
        1366: { items: 1, nav: true },
    }
    return (
        <div className='slider'>
            <OwlCarousel className="owl-theme"
                items={1}
                loop={true}
                margin={0}
                nav={true}
                dots={true}
                responsive={responsive}
                navText={[
                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>'
                ]}
            >
                <div className='items'>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={slider_one} />
                        <img src={slider_img_one} />
                    </picture>
                </div>
                <div className='items'>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={slider_one} />
                        <img src={slider_img_two} />
                    </picture>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default Slider;
