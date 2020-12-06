import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPham extends Component {
    render() {
        console.log('props', this.props)
        let { sanPham } = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width="200px" height="350px" />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.donGia.toLocaleString()}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success" onClick={()=>{
                            this.props.themGioHang(sanPham)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    // dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClick) => {
            // Gửi đữ liệu lên redux
            // B1: tạo action
            const action = {
                type: 'THEM_GIO_HANG', // Thuộc tính bắt buộc
                sanPhamClick: {...spClick, soLuong: 1}, // Thuộc tính thứ 2 là giá trị gửi lên redux
            }
            // B2: Sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch(action);
            console.log('sp Click', spClick);
        }
    }
}

// Kết nối component sản phẩm với store
// Tham số 1 của connect: là mapStateToProps (nếu không lấy dữ liệu nào từ store thì để null)
// Tham số 2 của connect: là mapDispatchToProps (hàm này sẽ tạo ra props là function đưa dữ liệu lên store)
export default connect(null,mapDispatchToProps)(SanPham)