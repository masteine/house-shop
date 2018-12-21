import React from "react"

const Product = props => {
	const { ...product } = props;
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					{
						console.log(
							product
						)
					}
					{/*<img src={product.image} alt="product"/>*/}
					{/*<div>{product.full_address}</div>*/}
					{/*<div>{product.area}</div>*/}
					{/*<div>{product.price}</div>*/}
				</div>
			</div>
		</div>
	)
};
export default Product;


