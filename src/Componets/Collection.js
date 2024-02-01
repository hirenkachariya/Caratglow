import React, { useEffect, useState } from 'react';
import './Collection.css';
import { Col, Container, Row } from 'react-bootstrap';
import collection_one from '../img/collection_one.jpg';
import collection_two from '../img/collection_two.jpg';
import collection_three from '../img/collection_three.jpg';
import collection_four from '../img/collection_four.jpg';
import collection_five from '../img/collection_five.jpg';

function Collection() {

    const [showImage, setShowImage] = useState(1)
    const imageObj = { 1: collection_one, 2: collection_two, 3: collection_three, 4: collection_four, 5: collection_five }
    const [currentImage, setCurrentImage] = useState('')

    useEffect(() => {
        setCurrentImage(imageObj[showImage])
    }, [showImage])

    return (
        <div className='collection'>
            <Container>
                <div className='collection_span'>
                    <span>SEE ALL COLLECTIONS</span>
                </div>
                <Row>
                    <Col md={6}>
                        <div className='collection_list'>
                            <div className='collection_list_one '>
                                <h1 className={`${showImage == 1 && 'active'}`}
                                    onMouseEnter={() => setShowImage(1)}
                                    onMouseLeave={() => setShowImage(1)}
                                >
                                    Flora
                                </h1>
                            </div>
                            <div className='collection_list_one'>
                                <h1 className={`${showImage == 2 && 'active'}`}
                                    onMouseEnter={() => setShowImage(2)}
                                    onMouseLeave={() => setShowImage(2)}
                                >
                                    Swansea
                                </h1>
                            </div>
                            <div className='collection_list_one'>
                                <h1 className={`${showImage == 3 && 'active'}`}
                                    onMouseEnter={() => setShowImage(3)}
                                    onMouseLeave={() => setShowImage(3)}
                                >
                                    Lattrape coeur
                                </h1>
                            </div>
                            <div className='collection_list_one'>
                                <h1 className={`${showImage == 4 && 'active'}`}
                                    onMouseEnter={() => setShowImage(4)}
                                    onMouseLeave={() => setShowImage(4)}
                                >
                                    On The Rocks
                                </h1>
                            </div>
                            <div className='collection_list_one'>
                                <h1 className={`${showImage == 5 && 'active'}`}
                                    onMouseEnter={() => setShowImage(5)}
                                    onMouseLeave={() => setShowImage(5)}
                                >
                                    Artemis
                                </h1>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={currentImage} alt="Flora Collection" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Collection;
