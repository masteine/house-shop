import React from "react";
import PropTypes from "prop-types";

const Price = ({ price }) => {
	return (
		<h4 className="blue-text">$ {price}</h4>
	);
};

export default Price;

Price.propTypes = {
	area: PropTypes.number
};
