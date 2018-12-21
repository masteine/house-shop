import React from "react"
import { Link } from "react-router-dom"
import Address from "./Address"
import Images from "./Images"
import Area from "./Area"
import Price from "./Price"

import "./Index.css"

const ProductItem = ({ product, productTemplate }) => {

	const AREA = <Area key="AREA" area={product.area}/>;
	const ADDRESS = <Address key="ADDRESS" full_address={product.full_address}/>;
	const PRICE = <Price key="PRICE" price={product.price}/>;
	const IMAGE = <Images key="IMAGE" images={product.images} product={product}/>;
	const templateItemArray = [AREA, ADDRESS, PRICE, IMAGE];

	let componentArray = [];

	productTemplate.forEach(componentTemp => {
		templateItemArray.forEach(component => {
			if ( componentTemp.component === component.key ) {
				componentArray = [...componentArray, component];
			}
		});
	});

	return (
		<Link to={{
			pathname: `/product-details/${product.id}`,
			match: product,
		}}
					className="col-lg-4 col-md-6 d-flex ">
			<div className="product">
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
export default ProductItem;


