import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./Components/DemoFunctionComponent";
import DemoReactClassComponent from "./Components/DemoReactClassComponent";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingClassComponent from "./DataBinding/DataBindingClassComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoState from "./DemoState/DemoState";
import BaiTapChonXe from "./DemoState/BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderDanhSachPhim from "./RenderWithMap/BaiTapRenderDanhSachPhim";
import DemoProps from "./Props/DemoProps";
import ProductListRCC from "./Props/ProductListRCC";
import PropsWithEvent from "./Props/PropsWithEvent";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapXucXacRedux from "./BaiTapXucXacRedux/BaiTapXucXacRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderDanhSachPhim /> */}
      {/* <DemoProps /> */}
      {/* <ProductListRCC /> */}
      {/* <PropsWithEvent /> */}
      {/* <BaiTapGioHangRedux/> */}
      <BaiTapXucXacRedux />
    </div>
  );
}

export default App;
