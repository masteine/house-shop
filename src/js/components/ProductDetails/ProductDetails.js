import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider/Slider"
import "./ProductDetails.css"

const ProductDetails = ({ ...props }) => {
	let product = props.location.state;
	return (
		<div className="product-details">
			<div className="row mt-2">
				<div className="col-md-12">
					<Link to="/" className="btn btn-outline-secondary btn-template">
						Back
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 d-flex align-items-center flex-column">
					<h1>Product</h1>
				</div>
				<div className="col-md-6">
					<div className="product-details__img">
						<Slider imgArray={product.images} />
					</div>
				</div>
				<div className="col-md-6">
					<h5 className="product-details__address">{product.full_address}</h5>
					<div className="product-details__area">{product.area} sq.m.</div>
					<h4 className="product-details__price blue-text">{product.price}$</h4>
				</div>
			</div>
		</div>
	)
};

export default ProductDetails;