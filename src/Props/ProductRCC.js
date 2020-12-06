import React, { Component } from 'react'

export default class ProductRCC extends Component {

    //this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    //this.props thuộc tính không được gán lại giá trị mới
    render() {
        // this.props.sanPham = {};

        let {sanPham} = this.props;
        // let {maSP,tenSP,giaBan,hinhAnh} = this.props.sanPham;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{this.props.sanPham.giaBan}</p>
                </div>
            </div>
        )

    }
}
