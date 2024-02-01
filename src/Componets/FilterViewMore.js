import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function FilterViewMore({ item, handlecheck, selectedMore }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col lg={2} md={3} sm={4} xs={12}>
            <div className='category_list_more'>
                <div onClick={handleShow} className="category_list__more_heading">
                    <h6>{item?.Title}</h6>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>More Filters</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={3}>
                                <div className='modal_one'>
                                    <div className='modal_one_heading'>
                                        <h6>{item?.ListOne?.Title}</h6>
                                    </div>
                                    <div className='modal_one_list'>
                                        <ul>
                                            {
                                                item?.ListOne?.List?.map((listsitem, listindex) => {
                                                    return (
                                                        <li key={listindex}>
                                                            <input checked={selectedMore?.includes(listsitem?.Title)} onChange={() => handlecheck(listsitem?.Title)} type='checkbox' />
                                                            {listsitem?.Title}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='modal_one'>
                                    <div className='modal_one_heading'>
                                        <h6>{item?.ListTwo?.Title}</h6>
                                    </div>
                                    <div className='modal_one_list'>
                                        <ul>
                                            {
                                                item?.ListTwo?.List?.map((listsitem, listindex) => {
                                                    return (
                                                        <li key={listindex}>
                                                            <input type='checkbox' />
                                                            {listsitem?.Title}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        </Col>
    )
}

export default FilterViewMore
