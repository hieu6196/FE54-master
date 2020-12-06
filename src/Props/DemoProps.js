import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="1,000$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Samsung"  price="1,200$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Sony"  price="1,400$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi" price="1,600$" />
                    </div>
                </div>
            </div>
        )
    }
}
