import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Product.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import product_one from '../img/product_one.jpg'
import product_two from '../img/product_two.jpg'
import product_three from '../img/product_three.jpg'
import product_four from '../img/product_four.jpg'
import ring_one from '../img/ring_one.jpg'
import ring_two from '../img/ring_two.jpg'
import ring_three from '../img/ring_three.jpg'
import ring_four from '../img/ring_four.jpg'
import earring_one from '../img/earring_one.jpg'
import earring_two from '../img/earring_two.jpg'
import earring_three from '../img/earring_three.jpg'
import earring_four from '../img/earring_four.jpg'
import ProductList from './ProductList';
import axios from "axios";


function Product() {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        productDetail()
    }, []);

    const productDetail = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/productmaster`)
        if (response?.data?.status) {
            setproduct(response?.data?.data)
        }
    }

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
        <div className='product'>
            <Container>
                <div className='product_main'>
                    <div className='product_heading'>
                        <h4>Featured Products </h4>
                    </div>
                    <div className='product_paragraph'>
                        <p>Shop our extensive inventory of fine diamonds. Browser our extensive range of beautifully crafted Diamond Rings, Diamond Bracelets, Diamond Earrings, Diamond Necklaces and Other Elegant Diamond Jewellery.</p>
                    </div>
                </div>
                <div className='product_button'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                    >
                        <Tab eventKey="home" title="Pendant">
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
                                {product?.map((item, index) => (
                                    <ProductList
                                        key={index}
                                        item={item}
                                    />
                                ))}
                                {/* <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={product_one} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Infinitas Heart Diamond Pendant</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={product_two} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Reuleaux Shaped Diamond Pendant</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={product_three} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Double Circle Teardrop Prong Diamond Pendant</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={product_four} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Single Heart Prong Diamond Pendant</h6>
                                    </div>
                                </div> */}
                            </OwlCarousel>
                        </Tab>
                        <Tab eventKey="profile" title="Ring">
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
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={ring_one} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Rose Buds Diamond Ring</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={ring_two} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Teen Heart Diamond Ring</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={ring_three} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Capped Clast Shaped Diamond Ring</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={ring_four} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Round Cluster Diamond Ringt</h6>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Tab>
                        <Tab eventKey="demo" title="Earring">
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
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={earring_one} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Pave Edged Ellipse Stud Diamond Earrings </h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={earring_two} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Sharp Rhomb Stud Diamond Earrings</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={earring_three} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Pear Lattice Stud Diamond Earrings</h6>
                                    </div>
                                </div>
                                <div className='Pendant_list'>
                                    <div className='Pendant_list_img'>
                                        <img src={earring_four} />
                                    </div>
                                    <div className='Pendant_list_heading'>
                                        <h6>Ovate Lattice Stud Diamond Earrings</h6>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </div>
    )
}

export default Product
