import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io';

function FilterViewWeight({ item, OnclickData }) {

    const [show, setShow] = useState(false);
    const [WightName, setWightName] = useState('');

    const handlecurrencyClick = (item) => {
        setWightName(item);
    };

    const manageItemList = () => {
        setShow(!show);
    }

    return (
        <>
            <Col lg={2} md={3} sm={4} xs={12}>
                <div className='category_list'>
                    <div onClick={() => manageItemList()} className="category_list_heading">
                        <h6>{WightName || item?.Title}</h6>
                        <span><IoIosArrowDown /></span>
                    </div>
                    {show &&
                        <div className="category_lists">
                            <ul>
                                {item?.List?.map((listsitem, listsindex) => {
                                    return (
                                        <li onClick={() => {
                                            manageItemList();
                                            OnclickData(listsitem?.Value, listsitem?.Title);
                                            handlecurrencyClick(listsitem?.Title)
                                        }}
                                            key={listsindex}
                                        >
                                            {listsitem?.Title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </Col>
        </>
    )
}

export default FilterViewWeight
