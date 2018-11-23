import React from "react";
import PropTypes from "prop-types";

const Images = ({ images, product }) => {
	return (
		<div className="img-wrapper">
			<img className="img-cover"
					 src={images.length > 1 ? images[0] : images}
					 alt={`house photo #` + product.id}
			/>
		</div>
	);
};

export default Images;

Images.propTypes = {
	area: PropTypes.string
};
