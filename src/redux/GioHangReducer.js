const stateGioHang = {
    gioHang: []
}

export const GioHangReducer = (state = stateGioHang, action) => {
    console.log('action', action)
    let gioHangCapNhat = [...state.gioHang];
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // Xử lý cập nhật state.gioHang
            // Tìm trong giỏ hàng có sản phầm nào có mã == sản phẩm click hay không
            let spGH = gioHangCapNhat.find(sp => sp.maSP == action.sanPhamClick.maSP);
            if (spGH) {
                // Tìm thấy => tăng số lượng
                spGH.soLuong += 1;
            } else {
                gioHangCapNhat.push(action.sanPhamClick)
            }
        }
        case 'XOA_GIO_HANG': {
            // Cách 1:
            // let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSPXoa);
            // if (index !== -1) {
            //     gioHangCapNhat.splice(index, 1);
            // }
            // Cách 2: Tạo 1 mảng mới không có sản phẩm click
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPXoa);
        }
        case 'TANG_GIAM_SO_LUONG': {
            let spGH = gioHangCapNhat.find(sp => sp.maSP == action.maSPClick);
            if (spGH) {
                if (action.soLuong === -1 && spGH.soLuong < 2) {
                    return { ...state }
                } else {
                    spGH.soLuong += action.soLuong;
                }
            }
        }
            // Cập nhật lại state
            state.gioHang = gioHangCapNhat;
            console.log('state', state);
            return { ...state };
    }
    return state;
};