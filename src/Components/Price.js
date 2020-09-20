import React, {Component} from "react";

const Price = (props) => {
  const priceStep = [];
  const priceNodes = [1, 80, 160, 240, 1820, 3400, 4980];
  
  return (
  	<div>
  		{price.map((price, index) => (
    		<div className="ais-price-ranges--item">
          <a className="ais-price-ranges--link" href="#">{props.price}</a>
        </div>
    	))}
    </div>
  );
};

export default Price;
