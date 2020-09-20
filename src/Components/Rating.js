import React, {Component} from "react";

const Rating = (props) => {
	const ratings = [5, 4, 3, 2, 1];
  const handleRatingSelect = (rate) => {
  	props.handleRating(rate);
  }
  return (
  	<div>
  		{ratings.map((rate, index) => (
    		<div className="ais-star-rating--item" key={index}>
          <a className="ais-star-rating--link" onClick={() => handleRatingSelect(rate)}>
          	<i className="fa fa-star" aria-hidden="true"></i>
            <i className={rate >= 2 ? "fa fa-star" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rate >= 3 ? "fa fa-star" : "fa fa-star-o"} aria-hidden="true"></i>
 						<i className={rate >= 4 ? "fa fa-star" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rate >= 5 ? "fa fa-star" : "fa fa-star-o"} aria-hidden="true"></i>
          </a>
        </div>
    	))}
    </div>
  );
};

export default Rating;
