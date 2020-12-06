// File quản lý tất cả state của ứng dụng (thay vì đặt tại component ta đặt state tại store)
import {combineReducers, createStore} from 'redux';
import BaiTapXucXacRedux from '../BaiTapXucXacRedux/BaiTapXucXacRedux';
// Import giỏ hàng
import {GioHangReducer} from '../redux/GioHangReducer';
import { BaiTapGameXucXacReducer } from './BaiTapXucXacReducer';

const stateGioHang = {
    gioHang: [
        {maSP: 1, tenSP: 'ip', hinhAnh: './img/sp_iphoneX.png', donGia: 1000, soLuong: 5}
    ]
}
const rootReducer = combineReducers({
    // Các state sau này khai báo ở dây

    // stateGioHang: (state = stateGioHang, action) => {
    //     return state;
    // }

    // Tách file GioHangReducer
    stateGioHang: GioHangReducer,
    stateGameXucXac: BaiTapGameXucXacReducer,
})

// Tạo ra các store chứa rootReducer (xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);
