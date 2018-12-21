import React from "react"
import { Link } from "react-router-dom"
import Address from "./Address"
import Images from "./Images"
import Area from "./Area"
import Price from "./Price"

import "./Index.css"

const Product = ({ product, productTemplate }) => {

  const AREA = <Area key="AREA" area={product.area}/>;
  const ADDRESS = <Address key="ADDRESS" full_address={product.full_address}/>;
  const PRICE = <Price key="PRICE" price={product.price}/>;
  const IMAGE = <Images key="IMAGE" images={product.images} product={product}/>;
  const fragmentArray = [AREA, ADDRESS, PRICE, IMAGE];

  let componentArray = [];

  return (
    <Link to={{pathname: `/product/${product.id}`}}
className="col-lg-4 col-md-6 d-flex ">
      <div className="product">
        {
          fragmentArray.forEach(component => {
            // console.log(component.key);
            productTemplate.forEach(componentTemp => {
              if ( componentTemp.component === component.key ) {
                componentArray = [...componentArray, component];
              }
            });
          })
        }
        {
          componentArray.map(componentItem => (
            <React.Fragment>
              {componentItem}
            </React.Fragment>
          ))
        }
      </div>
    </Link>
  )
};
export default Product;


