import React, { useEffect, useState } from 'react'
import './CategoryProduct.css'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import loader_img from '../img/loader.gif';
import FilterViewMetal from './FilterViewMetal'
import FilterViewWeight from './FilterViewWeight'
import FilterViewSetting from './FilterViewSetting'
import FilterViewPrice from './FilterViewPrice'
import FilterViewMore from './FilterViewMore'
import { IoCloseSharp } from "react-icons/io5";
import { Pagination } from '@mantine/core';

function CategoryProduct() {

    const navigate = useNavigate()

    const [activePage, setPage] = useState(1);
    const [totalPage, settotalPage] = useState(1);

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);
    const [loader, setLoader] = useState(false);
    const [selectedMetal, setSelectedMetal] = useState([]);
    const [selectedWeight, setSelectedWeight] = useState('');
    const [selectedWeightName, setSelectedWeightName] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedPriceName, setSelectedPriceName] = useState('');
    const [selectedMore, setSelectedMore] = useState([]);

    useEffect(() => {
        productList();

        if (filters?.length === 0) {
            filterList()
        }

    }, [activePage, selectedMetal, selectedWeight, selectedPrice, selectedMore]);

    const productList = async () => {

        const data = {
            "Metal_Type": selectedMetal,
            "WEI_GHT": selectedWeight,
            "PRI_CE": selectedPrice,
            "MORE_FILTERS": selectedMore,
        }

        setLoader(true)
        const response = await axios.post(`http://127.0.0.1:8000/api/categoryproduct?page=${activePage}`, data ? data : {});
        setLoader(false)
        if (response?.data?.status) {
            if (activePage == 1) {
                settotalPage(response?.data?.pagination?.last_page)
            }
            setProducts(response?.data?.data)
        }
        else if (!response?.data?.status && response?.data?.message) {
            alert(response?.data?.message);
        }
    }
    const filterList = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/categorylist`);
        if (response?.data?.status) {
            setFilters(response?.data?.data)
        }
        else if (!response?.data?.status && response?.data?.message) {
            alert(response?.data?.message);
        }
    }

    const onFilterClick = (filter) => {
        let temp = selectedMetal ? [...selectedMetal] : [];

        let index = temp.indexOf(filter);

        if (index < 0) {
            temp.push(filter);
        } else {
            temp.splice(index, 1);
        }
        setSelectedMetal(temp);
    };
    const OnclickData = (filter, type) => {
        setSelectedWeightName(type)
        setSelectedWeight(filter)
    }
    const onFilterPrice = (filter, type) => {
        setSelectedPriceName(type)
        setSelectedPrice(filter)
    }
    const handlecheck = (filter) => {
        let temp = selectedMore ? [...selectedMore] : []

        let index = temp.indexOf(filter)

        if (index < 0) {
            temp.push(filter)
        }
        else {
            temp.splice(index, 1)
        }
        setSelectedMore(temp)
    }
    const gotohome = () => {
        navigate('/')
    }
    const ClearAll = () => {
        setSelectedMetal()
        setSelectedWeight()
        setSelectedPrice()
        setSelectedMore()
    }

    return (
        <div className='categoryproduct'>
            <div className='cate_home'>
                <span onClick={() => gotohome()}>Home</span>
                <p>/</p>
                <span>Product List</span>
            </div>
            <div className='categoryproduct_menu'>
                <div className='categoryproduct_menu_list'>
                    <Container>
                        <Row className='g-1'>
                            {
                                filters && filters?.length != 0 &&
                                filters?.metal?.map((item, index) => {
                                    return (
                                        <FilterViewMetal
                                            key={index}
                                            item={item}
                                            onFilterClick={onFilterClick}
                                            selectedMetal={selectedMetal}
                                        />
                                    )
                                })
                            }
                            {
                                filters && filters?.length != 0 &&
                                filters?.weight?.map((item, index) => {
                                    return (
                                        <FilterViewWeight
                                            key={index}
                                            item={item}
                                            OnclickData={OnclickData}
                                        />
                                    )
                                })
                            }
                            {
                                filters && filters?.length != 0 &&
                                filters?.setting?.map((item, index) => {
                                    return (
                                        <FilterViewSetting
                                            key={index}
                                            item={item}
                                        />
                                    )
                                })
                            }
                            {
                                filters && filters?.length != 0 &&
                                filters?.price?.map((item, index) => {
                                    return (
                                        <FilterViewPrice
                                            key={index}
                                            item={item}
                                            onFilterPrice={onFilterPrice}
                                            selectedPrice={selectedPrice}
                                        />
                                    )
                                })
                            }
                            {
                                filters && filters?.length != 0 &&
                                filters?.more?.map((item, index) => {
                                    return (
                                        <FilterViewMore
                                            key={index}
                                            item={item}
                                            handlecheck={handlecheck}
                                            selectedMore={selectedMore}
                                        />
                                    )
                                })
                            }

                        </Row>
                    </Container>
                </div>
                <div className='categoryproduct_clear'>
                    <p>FILTERED BY :</p>
                    <div className='clear_filter'>
                        <ul>
                            {
                                selectedMetal?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                            <IoCloseSharp onClick={() => setSelectedMetal()} />
                                        </li>
                                    )
                                })
                            }
                            {selectedWeight && <li>{selectedWeightName}<IoCloseSharp onClick={() => setSelectedWeight()} /></li>}
                            {selectedPrice && <li>{selectedPriceName}<IoCloseSharp onClick={() => setSelectedPrice()} /></li>}
                            {
                                selectedMore?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                            <IoCloseSharp onClick={() => setSelectedMore()} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <span onClick={() => ClearAll()}>Clear All</span>
                </div>
                {loader ? (
                    <div className='loader_img'>
                        <img src={loader_img} alt="Loader" />
                        <span>Loading Products</span>
                    </div>
                ) : (
                    <div className='filter_menu'>
                        <Container>
                            <Row>
                                {
                                    products && products?.length != 0 &&
                                    products?.map((item, index) => {
                                        return (
                                            <Col lg={3} md={4} sm={6} xs={12} key={index}>
                                                <div className='categoryproduct_list'>
                                                    <div className='categoryproduct_list_img'>
                                                        <img src={item.Image} alt={item.ProductTitle} />
                                                    </div>
                                                    <div className='categoryproduct_list_blog'>
                                                        <div className='categoryproduct_list_heading'>
                                                            <h4>{item?.ProductTitle}</h4>
                                                        </div>
                                                        <div className='categoryproduct_list_paragraph'>
                                                            <p>{item?.ProductDesc}</p>
                                                        </div>
                                                        <div className='categoryproduct_list_paragraph'>
                                                            <p>{item?.AppxMetalWgt}</p>
                                                        </div>
                                                        <div className='categoryproduct_list_paragraph'>
                                                            <p>{item?.metalDetail?.Description}</p>
                                                        </div>
                                                        <div className='categoryproduct_list_price'>
                                                            <span>₹{item?.SettingPrice}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                            </Row>
                            <Pagination className='d-flex justify-content-center pt-4' value={activePage} onChange={setPage} total={totalPage} />
                        </Container>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryProduct
