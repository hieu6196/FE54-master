import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'

export default class BaiTapLayout extends Component {
   
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
