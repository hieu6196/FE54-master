import React, { Component } from "react";
import productList from "../data/productList.json";
import Product from "./Product";
import Modal from "./Modal";

export class ProductList extends Component {
  state = {
    productDetail: productList[0],
    cart: [],
  };

  renderProductListHandler = () => {
    return productList.map((product, index) => {
      return (
        <Product
          onViewDetail={this.viewDetailHandler}
          onAddToCart={this.addToCartHandler}
          prod={product}
          key={index}
        />
      );
    });
  };

  viewDetailHandler = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  addToCartHandler = (product) => {
    const index = this.state.cart.findIndex(
      (prod) => prod.maSP === product.maSP
    );

    if (index !== -1) {
      const cartUpdate = [...this.state.cart];
      cartUpdate[index].soLuong += 1;

      this.setState({
        cart: cartUpdate,
      });
    } else {
      const productUpdate = { ...product, soLuong: 1 };
      this.setState({
        cart: [...this.state.cart, productUpdate],
      });
    }
  };
  //Định nghĩa sự kiện xoá giỏ hàng tại nơi chứa state giỏ hàng
  deleteItem = (maSPClick) => {
    // console.log(maSP);
    //Tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
    let gioHangCapNhat = [...this.state.cart];
    //Xử lý xoá trên giỏ hàng mới
    let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPClick);
    if(index !== -1) {
      gioHangCapNhat.splice(index,1);
    }

    //Gán lại giỏ hàng cũ bằng giỏ hàng mới
    this.setState({
      cart:gioHangCapNhat
    });


  }

  //Định nghĩa hàm thay đổi số lượng tại nơi chứa state số lượng (số lượng nằm trong cart[])
  tangGiamSoLuong = (maSPClick,soLuong) => {
    // console.log(maSP,soLuong);

    let gioHangCapNhat = [...this.state.cart];

    //Tìm trong giỏ hàng có sản phẩm mã == với sản phẩm được click + hoặc - 
    let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSPClick);
    //Tìm thấy sp trong giỏ hàng 
    if(spGioHang){
      spGioHang.soLuong += soLuong;
    }
    //Cập nhật lại giỏ hàng
    this.setState({cart:gioHangCapNhat});

    
  }


  render() {
    const { productDetail, cart } = this.state;
    return (
      <>
        {/* Modal giỏ hàng */}
        <Modal cart={cart} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong}/>

        <div className="row">{this.renderProductListHandler()}</div>
        {/* Thông tin chi tiết */}
        <div className="row mt-4">
          <div className="col-6 text-center">
            <h5>{productDetail.tenSP}</h5>
            <img src={productDetail.hinhAnh} width="300" />
          </div>
          <div className="col-6">
            <h5>Thông số kỹ thuật</h5>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <td>{productDetail.manHinh}</td>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <td>{productDetail.heDieuHanh}</td>
              </tr>
              <tr>
                <th>Camera trước</th>
                <td>{productDetail.cameraTruoc}</td>
              </tr>
              <tr>
                <th>Camera sau</th>
                <td>{productDetail.cameraSau}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{productDetail.ram}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{productDetail.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
