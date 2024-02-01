import React, { useEffect, useState } from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import header_logo from '../img/caratglow-logo.png'
import all_img from '../img/all-img.jpg'
import all_imgs from '../img/all-imgs.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



function Header() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [IconOne, setIconOne] = useState(false);
    const [IconTwo, setIconTwo] = useState(false);
    const [IconThree, setIconThree] = useState(false);
    const [IconFour, setIconFour] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);

    const [jewellery, setJewellery] = useState([]);


    useEffect(() => {
        jewelleryDetail()
    }, []);

    const jewelleryDetail = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/productcategory')
        if (response?.data?.status) {
            setJewellery(response?.data?.data)
        }
        else if (!response?.data?.status && response?.data?.message) {
            alert(response?.data?.message);
        }
    }

    const handleEngagement = (categoryName) => {
        if (categoryName === 'Engagement') {
            navigate('/categoryproduct')
        }
    }
    const handleIconone = () => {
        setIconOne(!IconOne)
    }
    const handleIcontwo = () => {
        setIconTwo(!IconTwo)
    }
    const handleIconthree = () => {
        setIconThree(!IconThree)
    }
    const handleIconFour = () => {
        setIconFour(!IconFour)
    }

    return (
        <>
            <div className='header d-none d-lg-block'>
                <div className='header_paragraph'>
                    <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    <span><a href=''>Shop Now</a></span>
                </div>
                <div className='header_menu'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='header_info'>
                                    <div className='header_call'>
                                        <MdCall /><span>+ 91 99789 55755</span>
                                    </div>
                                    <div className='header_email'>
                                        <AiOutlineMail /><span>sales@gmail.com</span>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='header_logo'>
                                    <img src={header_logo} />
                                </div>
                            </Col>
                            <Col>
                                <div className='header_list'>
                                    <ul>
                                        <li><CiUser />Login</li>
                                        <li>
                                            <CiHeart />Wishlist
                                            <span>0</span>
                                        </li>
                                        <li>
                                            <IoCartOutline />Cart
                                            <span>0</span>
                                        </li>
                                        <li><IoIosSearch /></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='header_menu_list'>
                                    <ul>
                                        <li className='main_menus'>
                                            All Jewellery
                                            <div className='mydropdown'>
                                                <Row>
                                                    <Col md={3}>
                                                        <div className='header_all'>
                                                            <div className='header_all_heading'>
                                                                <h6>DIAMOND JEWELERY</h6>
                                                            </div>
                                                            <div className='header_all_img'>
                                                                <img src={all_img} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={9}>
                                                        <div className='header_all_list'>
                                                            <Row>
                                                                <Col md={2}>
                                                                    {jewellery?.map((item, index) => (
                                                                        <div className='list_ring' key={index}>
                                                                            <div className='list_ring_heading'>
                                                                                <h6>{item?.ring?.name}</h6>
                                                                            </div>
                                                                            <div className='list_ring_name'>
                                                                                <ul>
                                                                                    {item?.ring?.sub?.map((subitem, subindex) => (
                                                                                        <li onClick={() => handleEngagement(subitem?.CategoryName)} key={subindex}>{subitem?.CategoryName}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </Col>
                                                                <Col md={2}>
                                                                    {jewellery?.map((item, index) => (
                                                                        <div className='list_earring' key={index}>
                                                                            <div className='list_earring_heading'>
                                                                                <h6>{item?.earring?.name}</h6>
                                                                            </div>
                                                                            <div className='list_earring_name'>
                                                                                <ul>
                                                                                    {item?.earring?.sub?.map((subitem, subindex) => (
                                                                                        <li key={subindex}>{subitem?.CategoryName}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </Col>
                                                                <Col md={2}>
                                                                    {jewellery?.map((item, index) => (
                                                                        <div className='list_pendant' key={index}>
                                                                            <div className='list_pendant_heading'>
                                                                                <h6>{item?.pendant?.name}</h6>
                                                                            </div>
                                                                            <div className='list_pendant_name'>
                                                                                <ul>
                                                                                    {item?.pendant?.sub?.map((subitem, subindex) => (
                                                                                        <li key={subindex}>{subitem?.CategoryName}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </Col>
                                                                <Col md={2}>
                                                                    {jewellery?.map((item, index) => (
                                                                        <div className='list_tanmania' key={index}>
                                                                            <div className='list_tanmania_heading'>
                                                                                <h6>{item?.tanmania?.name}</h6>
                                                                            </div>
                                                                            <div className='list_tanmania_name'>
                                                                                <ul>
                                                                                    {item?.tanmania?.sub?.map((subitem, subindex) => (
                                                                                        <li key={subindex}>{subitem?.CategoryName}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </Col>
                                                                <Col md={2}>
                                                                    {jewellery?.map((item, index) => (
                                                                        <div className='list_bangle' key={index}>
                                                                            <div className='list_bangle_heading'>
                                                                                <h6>{item?.bangle?.name}</h6>
                                                                            </div>
                                                                            <div className='list_bangle_name'>
                                                                                <ul>
                                                                                    {item?.bangle?.sub?.map((subitem, subindex) => (
                                                                                        <li key={subindex}>{subitem?.CategoryName}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </Col>
                                                                <Col md={2}>
                                                                    <div className='list_nosepin'>
                                                                        <div className='list_nosepin_heading'>
                                                                            <h6>NOSEPIN</h6>
                                                                        </div>
                                                                        <div className='list_nosepin_name'>
                                                                            <ul>
                                                                                <li>Single Stone</li>
                                                                                <li> Multi Stone</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <div className='header_all_list_bottom'>
                                                                    <Row>
                                                                        <Col md={2}>
                                                                            <div className='header_all_list_shop'>
                                                                                <div className='header_all_list_shop_heading'>
                                                                                    <h6>SHOP BY OCCASION</h6>
                                                                                </div>
                                                                                <div className='header_all_list_shop_list'>
                                                                                    <ul>
                                                                                        <li>Office Wear</li>
                                                                                        <li>Casual Wear</li>
                                                                                        <li>Party Wear</li>
                                                                                        <li>Work Wear</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col md={2}>
                                                                            <div className='header_all_list_price'>
                                                                                <div className='header_all_list_price_heading'>
                                                                                    <h6>SHOP BY PRICE</h6>
                                                                                </div>
                                                                                <div className='header_all_list_price_list'>
                                                                                    <ul>
                                                                                        <li>Office Wear</li>
                                                                                        <li>Less Than 10k</li>
                                                                                        <li> 10k To 20k</li>
                                                                                        <li>20k To 30k</li>
                                                                                        <li>30k To 50k</li>
                                                                                        <li> Above 50k</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col md={2}>
                                                                            <div className='header_all_list_weight'>
                                                                                <div className='header_all_list_weight_heading'>
                                                                                    <h6>SHOP BY WEIGHT</h6>
                                                                                </div>
                                                                                <div className='header_all_list_weight_list'>
                                                                                    <ul>
                                                                                        <li> Less Than 2 Grams</li>
                                                                                        <li> 2 Grams To 4 Grams</li>
                                                                                        <li> 4 Grams To 6 Grams</li>
                                                                                        <li> 6 Grams And Above</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col md={2}>
                                                                            <div className='header_all_list_color'>
                                                                                <div className='header_all_list_color_heading'>
                                                                                    <h6>SHOP BY COLOR</h6>
                                                                                </div>
                                                                                <div className='header_all_list_color_list'>
                                                                                    <ul>
                                                                                        <li> White Gold</li>
                                                                                        <li>  Rose Gold</li>
                                                                                        <li>Yellow Gold</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </li>
                                        <li className='main_menus'>
                                            Solitaire
                                            <div className='mydropdown'>
                                                <div className='mydropdowns'>
                                                    <Row>
                                                        <Col md={6}>
                                                            <Row>
                                                                <Col md={7}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Start With Setting</li>
                                                                                <li>Start With Diamond</li>
                                                                                <li>Start With Your Design</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={5}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>SHOP BY CATEGORY</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Ring</li>
                                                                                <li>Pendant</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={6}>
                                                            <img src={all_imgs} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='main_menus'>
                                            Collection
                                            <div className='mydropdown'>
                                                <div className='mydropdownsv'>
                                                    <Row>
                                                        <Col md={7}>
                                                            <Row>
                                                                <Col md={5}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Start With Setting</li>
                                                                                <li>Start With Diamond</li>
                                                                                <li>Start With Your Design</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={4}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>SHOP BY CATEGORY</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Ring</li>
                                                                                <li>Pendant</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_name list_ring_names'>
                                                                            <ul>
                                                                                <li>URBANE</li>
                                                                                <li>ADORE</li>
                                                                                <li>CONTEMPORARY</li>
                                                                                <li>Florence</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={5}>
                                                            <img src={all_imgs} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </li>
                                        <li>Design Your Own Piece</li>
                                        <li className='main_menus'>
                                            Gifting
                                            <div className='mydropdown'>
                                                <div className='mydropdownsvg'>
                                                    <Row>
                                                        <Col md={8}>
                                                            <Row>
                                                                <Col md={5}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Start With Setting</li>
                                                                                <li>Start With Diamond</li>
                                                                                <li>Start With Your Design</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>SHOP BY OCCASION</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li> Office Wear</li>
                                                                                <li> Casual Wear</li>
                                                                                <li>Party Wear</li>
                                                                                <li>Work Wear</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={4}>
                                                                    <div className='list_ring'>
                                                                        <div className='list_ring_heading'>
                                                                            <h6>SHOP BY PRICE</h6>
                                                                        </div>
                                                                        <div className='list_ring_name'>
                                                                            <ul>
                                                                                <li>Below 20,000</li>
                                                                                <li> Between 20,000-30,000</li>
                                                                                <li>Above 30,000</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={4}>
                                                            <img src={all_imgs} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='header_show d-block d-lg-none'>
                <Container>
                    <Row>
                        <Col md={4} sm={4} xs={3}>
                            <div className='header_show_menu'>
                                <LuMenu onClick={handleShow} />
                            </div>
                        </Col>
                        <Col md={4} sm={4} xs={5}>
                            <div className='header_show_logo'>
                                <img src={header_logo} />
                            </div>
                        </Col>
                        <Col md={4} sm={4} xs={4}>
                            <div className='header_show_list'>
                                <ul>
                                    <li>
                                        <CiHeart />
                                        <span>0</span>
                                    </li>
                                    <li>
                                        <IoCartOutline />
                                        <span>0</span>
                                    </li>
                                    <li><IoIosSearch /></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => handleIconone()}>All Jewellery<span>{IconOne ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span></Accordion.Header>
                                <Accordion.Body>
                                    {jewellery?.map((item, index) => {
                                        console.log("item", item)
                                        return (
                                            <div className='list_ring' key={index}>
                                                <div className='list_ring_heading'>
                                                    <h6>{item?.ring?.name}</h6>
                                                </div>
                                                <div className='list_ring_name'>
                                                    <ul>
                                                        {item?.ring?.sub?.map((subitem, subindex) => (
                                                            <li onClick={() => handleEngagement(subitem?.CategoryName)} key={subindex}>{subitem?.CategoryName}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {jewellery?.map((item, index) => {
                                        return (
                                            <div className='list_ring' key={index}>
                                                <div className='list_ring_heading'>
                                                    <h6>{item?.earring?.name}</h6>
                                                </div>
                                                <div className='list_ring_name'>
                                                    <ul>
                                                        {item?.earring?.sub?.map((subitem, subindex) => (
                                                            <li key={subindex}>{subitem?.CategoryName}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {jewellery?.map((item, index) => {
                                        return (
                                            <div className='list_ring' key={index}>
                                                <div className='list_ring_heading'>
                                                    <h6>{item?.pendant?.name}</h6>
                                                </div>
                                                <div className='list_ring_name'>
                                                    <ul>
                                                        {item?.pendant?.sub?.map((subitem, subindex) => (
                                                            <li key={subindex}>{subitem?.CategoryName}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {jewellery?.map((item, index) => {
                                        return (
                                            <div className='list_ring' key={index}>
                                                <div className='list_ring_heading'>
                                                    <h6>{item?.tanmania?.name}</h6>
                                                </div>
                                                <div className='list_ring_name'>
                                                    <ul>
                                                        {item?.tanmania?.sub?.map((subitem, subindex) => (
                                                            <li key={subindex}>{subitem?.CategoryName}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => handleIcontwo()}>Solitaire <span>{IconTwo ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li>Start With Setting</li>
                                                <li>Start With Diamond</li>
                                                <li>Start With Your Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='list_ring_heading'>
                                        <h6>SHOP BY CATEGORY</h6>
                                    </div>
                                    <div className='list_ring_name'>
                                        <ul>
                                            <li>Ring</li>
                                            <li>Pendant</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => handleIconFour()}>Collection <span>{IconFour ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li>Start With Setting</li>
                                                <li>Start With Diamond</li>
                                                <li>Start With Your Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>SHOP BY CATEGORY</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li>Ring</li>
                                                <li>Pendant</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='list_ring'>
                                        <div className='list_ring_name list_ring_names'>
                                            <ul>
                                                <li>URBANE</li>
                                                <li>ADORE</li>
                                                <li>CONTEMPORARY</li>
                                                <li>Florence</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => handleIconthree()}>Gifting <span>{IconThree ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>CREATE YOUR OWN JEWELLERY</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li>Start With Setting</li>
                                                <li>Start With Diamond</li>
                                                <li>Start With Your Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>SHOP BY OCCASION</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li> Office Wear</li>
                                                <li> Casual Wear</li>
                                                <li>Party Wear</li>
                                                <li>Work Wear</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='list_ring'>
                                        <div className='list_ring_heading'>
                                            <h6>SHOP BY PRICE</h6>
                                        </div>
                                        <div className='list_ring_name'>
                                            <ul>
                                                <li>Below 20,000</li>
                                                <li> Between 20,000-30,000</li>
                                                <li>Above 30,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default Header
