import React from "react";

//React function component nhận props là tham số đầu vào của hàm component
export default function ProductRFC(props) {
  //ES5
  // let name = props.name;
  // let price = props.price;
  //ES6
  let { name, price } = props;
  return (
    <div className="card text-dark">
      <img
        className="card-img-top"
        src="https://picsum.photos/200/200"
        alt="123"
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
}
