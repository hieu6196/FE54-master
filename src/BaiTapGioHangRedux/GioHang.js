import React, { Component } from 'react'
// Import thư viện kết nối với redux store
import { connect } from 'react-redux'
import DanhSachSanPham from './DanhSachSanPham'

class GioHang extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1 className="text-center display-4">Giỏ hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGH, index) =>
                            <tr key={index}>
                                <td>{spGH.maSP}</td>
                                <td>{spGH.tenSP}</td>
                                <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width="50" height="50"></img></td>
                                <td>
                                    <button onClick={() => {
                                        this.props.tangGiamSoLuong(spGH.maSP,-1)
                                    }}>-</button>
                                    {spGH.soLuong}
                                    <button onClick={() => {
                                        this.props.tangGiamSoLuong(spGH.maSP,1)
                                    }}>+</button>
                                </td>
                                <td>{spGH.donGia.toLocaleString()}</td>
                                <td>{(spGH.soLuong * spGH.donGia).toLocaleString()}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => this.props.xoaGioHang(spGH.maSP)}>Xóa</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}
// Sinh nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state) => { //State đại diện cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
// Hàm tạo ra 1 props gửi lên redux store (tất cả reducer)
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log(maSPClick);
            // Đưa dữ liệu lên redux (reducer)
            const action = {
                type: 'XOA_GIO_HANG',
                maSPXoa: maSPClick,
            }
            // Dùng hàm dispatch gửi action lên reducer
            dispatch(action)
        },
        tangGiamSoLuong: (maSPClick, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSPClick: maSPClick,
                soLuong: soLuong,
            }
            // Dùng hàm dispatch gửi action lên reducer
            dispatch(action)
        }
    }
}

// Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);