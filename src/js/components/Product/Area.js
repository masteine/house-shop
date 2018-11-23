import React from "react";
import PropTypes from "prop-types";

const Area = ({ area }) => {
	return (
		<p>{area ? area + ' sq. ft.' : ' '}</p>
	);
};

export default Area;

Area.propTypes = {
	area: PropTypes.number
};
