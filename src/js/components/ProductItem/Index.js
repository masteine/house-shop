import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Address from "./Address"
import Images from "./Images"
import Area from "./Area"
import Price from "./Price"

import "./Index.css"

const Product = ({ product, productTemplate, props }) => {

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
		<React.Fragment>
			<Link to={{
				pathname: `/product/${product.id}`,
				match: props,
			}}
						className="col-lg-4 col-md-6 d-flex ">
				<div className="product">
					{
						componentArray.map(componentItem => (
							<React.Fragment key={product.id++}>
								{componentItem}
							</React.Fragment>
						))
					}
				</div>
			</Link>

		</React.Fragment>
	)
};

export default Product;

Product.propTypes = {
	product: PropTypes.object,
	productTemplate: PropTypes.array,
};

