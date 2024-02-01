import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'

function FilterViewSetting({ item }) {
    const [Show, setShow] = useState(false);

    const manageItemList = () => {
        setShow(!Show)
    }
    return (
        <Col lg={2} md={3} sm={4} xs={12}>
            <div className='category_list'>
                <div onClick={() => manageItemList()} className='category_list_heading'>
                    <h6>{item?.Title}</h6>
                    <span><IoIosArrowDown /></span>
                </div>
                {Show &&
                    <div className='category_lists'>
                        <ul>
                            {item?.List?.map((listsitem, listsindex) => {
                                return (
                                    <li
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
    )
}

export default FilterViewSetting

