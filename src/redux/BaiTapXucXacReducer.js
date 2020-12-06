const stateDefault = {
    datCuoc: true,
    soBanChoi: 0,
    soBanThang: 0,
    mangXucXac: [
        {hinhAnh: './img/xuc_xac/6.png', diem: 6},
        {hinhAnh: './img/xuc_xac/6.png', diem: 6},
        {hinhAnh: './img/xuc_xac/6.png', diem: 6},
    ]
}
export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {

    return{...state};
}