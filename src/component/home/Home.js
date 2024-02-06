import React from 'react'
import Slider from '../slider/Slider'
import Product from '../product/Product'
import Aboutus from '../About/Aboutus'
import Best from '../BestServices/Best'
import NewsLetter from '../news-letter/NewsLetter'
import Extra from '../BestServices/Extra'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <>
    <Slider/>
    <Best/>
    <Product/>
    <Extra/>
    <Aboutus/>
    <NewsLetter/>
    <Contact/>
    </>
  )
}

export default Home