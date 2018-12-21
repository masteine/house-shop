import React from "react";
import "./Buttons.css";
import PropTypes from "prop-types";

const Buttons = ({ buttons, handleClick }) => {

	return (
		<div className="row d-flex justify-content-center mb-md-5"
				 data-toggle="buttons">
			{
				buttons.map(button => (
						<button key={button.id}
										data-id={button.id}
										onClick={handleClick}
										className="btn btn-outline-primary btn-md btn-template">
							Template № {button.id}
						</button>
					)
				)
			}
		</div>
	);
};
export default Buttons;

Buttons.propTypes = {
	buttons: PropTypes.array,
	handleClick: PropTypes.func,
};
