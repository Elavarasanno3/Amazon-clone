import React from 'react'
import ProductGroup from './ProductGroup'
import SecondHeader from './SecondHeader'
import Slick from './Slick'
import Footer from './Footer'
import '../style/home.css'

const Home = () => {
  return (
    <div>
        <Slick/>
        <ProductGroup/>  
        <hr></hr> 
        <Footer />
    </div>
  )
}

export default Home