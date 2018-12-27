import React from "react"

const ProductDetails = ({ props, match, product }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 d-flex align-items-center flex-column">
					<h1>Product</h1>
					<img src={match.params.image} alt="product"/>
					<div>{match.params.full_address}</div>
					<div>{match.params.area}</div>
					<div>{match.params.price}</div>
				</div>
			</div>
		</div>
	)
};

export default ProductDetails;