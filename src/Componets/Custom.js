import React from 'react'
import './Custom.css'
import custom from '../img/custom.jpg'
import round from '../img/round.png'

function Custom() {
    return (
        <div className='custom'>
            <div className='custom_img_one'>
                <img src={custom} />
            </div>
            <div className='custom_img_two'>
                <img src={round} />
            </div>
            <div className='custom_list'>
                <div className='custom_heading'>
                    <h4>Create A Custom Engagement Ring</h4>
                </div>
                <div className='custom_paragraph'>
                    <p>Select a setting and choose a diamond to create your own Beyond Conflict Free  engagement ring.</p>
                </div>
                <div className='custom_button'>
                    <span>Start with a setting</span>
                    <span>start with a Diamond</span>
                </div>
            </div>
        </div>
    )
}

export default Custom

