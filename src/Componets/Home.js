import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Banner from './Banner'
import Custom from './Custom'
import Collection from './Collection'
import Product from './Product'
import Tanmania from './Tanmania'
import Jumbotron from './Jumbotron'
import Lorem from './Lorem'
import Reactions from './Reactions'
import Specialist from './Specialist'
import Diamond from './Diamond'
import DiamondList from './DiamondList'
import Footer from './Footer'

function Home() {
    return (
        <div className='home'>
            <Slider />
            <Banner />
            <Custom />
            <Collection />
            <Product />
            <Tanmania />
            <Jumbotron />
            <Lorem />
            <Reactions />
            <Specialist />
            <Diamond />
            <DiamondList />
        </div>
    )
}

export default Home
