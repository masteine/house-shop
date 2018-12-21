import React from "react";
import Address from "./Address"
import Images from "./Images"
import Area from "./Area"
import Price from "./Price"

import "./Index.css"

const Product = ({ product, productTemplate }) => {

  return (
    <div className="col-lg-4 col-md-6 ">
      <Images images={product.images} product={product}/>
      <Price price={product.price}/>
      <Address full_address={product.full_address}/>
      <Area area={product.area}/>
    </div>
  );
};

export default Product;


