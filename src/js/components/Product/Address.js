import React from "react";
import PropTypes from "prop-types";

const Address = ({ full_address }) => {
	return (
		<p className="product-address">
			{full_address}</p>
	);
};

export default Address;

Address.propTypes = {
	area: PropTypes.number
};
