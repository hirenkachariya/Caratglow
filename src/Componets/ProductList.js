import React from 'react'
import './ProductList.css'
import { useNavigate } from "react-router-dom";

function ProductList({ item }) {

    const navigate = useNavigate();

    const handleitems = (item) => {
        navigate('/productdetails', { state: { product: item } });  
    }
    return (
        <div className='ProductList'>
            <div className='ProductList_list'>
                <div onClick={() => handleitems(item)} className='ProductList_list_img'>
                    <img src={item.Image} />
                </div>
                <div className='ProductList_list_heading'>
                    <h6>{item.ProductTitle}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProductList
