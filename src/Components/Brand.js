import React, {Component} from "react";
import { useState, useMemo } from "react";

const Brand = (props) => {
	const [brands, setBrands] = useState([]);
	const [search, setSearch] = useState("");

  useMemo(() => {
  	let url = `http://localhost:4000/products?_limit=5`;

  	if (search) {
  		url += `&brand_like=${search}`;
  	}
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      	const brandObj = new Set();
        data.map((el) => brandObj.add(el.brand));
      	setBrands([...brandObj]);
      });
  }, [search]);

	const handleSearchBrand = (e) => {
		setSearch(e.target.value);
	}
	const handleBrand = (e) => {
		if (!e.target.checked) {
			props.handleBrandSelect(
				props.brandFilter.filter((name) => {
					return name !== e.target.value;
				})
			);
		} else {
			props.handleBrandSelect(props.brandFilter.concat(e.target.value));
		}
	}
  return (
  	<div>
    	<form noValidate="" className="searchbox sbx-sffv">
        <div role="search" className="sbx-sffv__wrapper">
          <input type="search" name="search" placeholder="Search for other..." autoComplete="off" className="sbx-sffv__input" onChange={handleSearchBrand} />
          <button type="submit" title="Submit your search query." className="sbx-sffv__submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
      <div className="ais-refinement-list--list">
      	{brands.map((brand, index) => (
	        <div className="ais-refinement-list--item" key={index}>
	          <a href="#" className="facet-item">
	            <input type="checkbox" value={brand} className="ais-refinement-list--checkbox" checked={props.brandFilter.includes(brand) ? true : false} onChange={(e) => handleBrand(e)} />{brand}
	          </a>
	        </div>
	      ))}
      </div>
    </div>
  );
};

export default Brand;