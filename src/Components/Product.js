import React, {Component} from "react";

const Product = (props) => {
  return(
		<article className="hit">
      <div className="product-picture-wrapper">
        <div className="product-picture"><img src={props.item.img} alt="product" /></div>
      </div>
      <div className="product-desc-wrapper">
        <div className ="product-title">
        	<a href="./" className="product-name">{props.item.name}</a>
        </div>
        <p className="product-type">{props.item.type}</p>
        <div className="product-price">${props.item.price}</div>
        <div className="product-rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className={props.item.rating >= 2 ? "fa fa-star" : "fa fa-star-o" } aria-hidden="true"></i>
            <i className={props.item.rating >= 3 ? "fa fa-star" : "fa fa-star-o" } aria-hidden="true"></i>
            <i className={props.item.rating >= 4 ? "fa fa-star" : "fa fa-star-o" } aria-hidden="true"></i>
            <i className={props.item.rating >= 5 ? "fa fa-star" : "fa fa-star-o" } aria-hidden="true"></i>
        </div>
      </div>
    </article>
	);  
}

export default Product;