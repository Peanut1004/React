import React, {Component} from "react";

const Categorie = (props) => {
	const types = [	"Appliances", 
									"Audio", 
									"Cameras & Camcorders", 
									"Car Electronics & GPS", 
									"Cell Phones", 
									"Computers & Tablets", 
									"Health, Fitness & Beauty",
									"Office & School Supplies",
									"TV & Home Theater",
									"Video Games"
								];
  const handleTypeSelect = (type) => {
		props.filterTypeCate(type);
	}
	const className = props.type;
	let  isActive ='';
  return (
  	<div>
  		{types.map((cate, index) => (
  			isActive = className === cate ? 'active' : '',
    		<a href="#" key={index} className={'ais-hierarchical-menu--item ' + isActive} onClick={() => handleTypeSelect(cate)}>
      		<span className="facet-name"><i className="fa fa-angle-right"></i>{cate}</span>
    		</a>
    	))}
    </div>
  );
};

export default Categorie;