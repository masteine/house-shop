import React from "react"
import "./Slider.css"

export default function Slider({ imgArray }) {

	let currentSlide = 0;

	let prevSlide = () => {
	};

	let nextSlide = () => {
	};

	if ( imgArray.length < 2 ) {
		return (
			<img src={imgArray}
					 alt="product"/>
		)
	} else {
		return (
			<div className="slider-container">
				{/*<div className="btn-prev"*/}
						 {/*onClick={prevSlide}>*/}
				{/*</div>*/}
				<img className="slider-item"
						 src={imgArray[currentSlide]}
						 alt="product"/>
				{/*<div className="btn-next"*/}
						 {/*onClick={nextSlide}>*/}
				{/*</div>*/}
			</div>

		)
	}

};