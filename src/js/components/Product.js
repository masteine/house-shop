import React from "react";
import PropTypes from 'prop-types'
import './Product.css'

const Product = ({ product }) => {
	const imgArr = product.images;
	const areaArr = product.area;
	return (
		<div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
			<div className="product">
				<div className="img-wrapper">
					<img className="img-cover"
							 src={imgArr.length > 1 ? imgArr[1] : imgArr}/>
				</div>
				<div className="product-info">
					<p className="product-address">{product.full_address}</p>
					<h4 className="green">$ {product.price}</h4>
					<p>{areaArr ? areaArr + ' sq. ft.' : ' '}</p>
				</div>
			</div>
		</div>
	);
};
export default Product;


Product.propTypes = {
	product: PropTypes.object
};