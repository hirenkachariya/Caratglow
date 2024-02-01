import React from 'react'
import { useState } from 'react';
import { Col } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheck } from "react-icons/fa";


function FilterViewMetal({ item, onFilterClick, selectedMetal }) {
    const [show, setShow] = useState(false);

    const manageItemList = () => {
        setShow(!show);
    }
    return (
        <>
            <Col lg={2} md={3} sm={4} xs={12}>
                <div className='category_list' >
                    <div onClick={() => manageItemList()} className='category_list_heading'>
                        <h6>{item?.Title}</h6>
                        <span><IoIosArrowDown /></span>
                    </div>
                    {show &&
                        <div className='category_lists'>
                            <ul>
                                {item?.List?.map((listsitem, listsindex) => {
                                    let selected = selectedMetal[listsitem]?.indexOf(listsitem?.Title) == -1 ? true : false;

                                    return (
                                        <li onClick={() => {
                                            manageItemList();
                                            onFilterClick(listsitem?.Title);
                                        }} key={listsindex}>
                                            {
                                                listsitem?.Img &&
                                                <img src={listsitem?.Img} />
                                            }
                                            {listsitem?.Title}<span>{selected && <FaCheck />}</span>
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

export default FilterViewMetal
