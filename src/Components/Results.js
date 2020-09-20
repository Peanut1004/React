import React, {Component} from "react";
import { useState, useEffect,useMemo } from "react";
import Pagination from "react-js-pagination";
import Product from "./Product";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Results = () => {
  const [products, setProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState("featured");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState([]);
  const [rating, setRating] = useState("");
  const [page, setPage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(160);

  useEffect(() => {
  	let url = `http://localhost:4000/products?_page=${page}&_limit=16`;
  	if (type) {
  		url += `&${type}`;
  	}
  	if (sortProduct!== 'featured') {
  		url += `&_sort=price&_order=${sortProduct}`;
  	}
  	if (brand.length > 0) {
			for (let i = 0; i < brand.length; i++) {
				url += `&brand=${brand[i]}`;
			}
		}
		if (rating) {
  		url += `&${rating}`;
  	}
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [type, page, sortProduct, brand, rating]);

  useMemo(() => {
  	let url = `http://localhost:4000/products?`;
  	if (type) {
  			url += `${type}`;
  	}
  	if (brand) {
			for (let i = 0; i < brand.length; i++) {
				url += `&brand=${brand[i]}`;
			}
  	}
  	if (rating) {
  		url += `&${rating}`;
  	}
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTotalItemsCount(data.length);
      });
  }, [type, brand, rating]);

	const sortBy = (e) => {
		const sortFilter = e.target.value;
		if (sortFilter == 'asc') {
			setSortProduct("asc");
		}else if(sortFilter == 'desc'){
			setSortProduct("desc");
		}else{
			setSortProduct("featured");
		}
	};

	const filterTypeResult = (value) => {
		setType("type=" + encodeURIComponent(value));
		setPage(1);
	};

	const handleBrandResult = (value) => {
		setBrand(value);
		setPage(1);
	};

	const handleRatingResult = (value) => {
		setRating("rating=" + value);
		setPage(1);
	}

	const handlePageChange = (pageNumber) => {
		setPage(pageNumber);
	};

	const handleClear = () => {
		setType("");
		setBrand([]);
		setRating("");
		setPage(1);
	};

  return (
  	<div className="app">
	  	<Header />
	  	<Sidebar 	type={type}
	  						filterTypeSide={filterTypeResult}
	  			 			brand={brand}  
	  			 			rating={rating}
	  			 			handleBrandSide={handleBrandResult}
	  			 			handleRatingSide={handleRatingResult}
	  			 			handleClearCate={handleClear}
	  	/>
	  	<div className="results-wrapper">
			  <div id="results-topbar">
			    <div id="stats">
			    	<span className="product-result">{products.length} results </span>
			    	<span className="speed-result">found in 2ms</span>
			    </div>
			    <div className="sort-by">
			      <label>Sort by</label>
			      <div id="sort-by-selector">
			        <select data-reactroot="" className="ais-sort-by-selector" value={sortProduct} onChange={sortBy}>
			          <option className="ais-sort-by-selector--item" value="featured">Featured</option>
			          <option className="ais-sort-by-selector--item" value="asc">Price asc.</option>
			          <option className="ais-sort-by-selector--item" value="desc">Price desc.</option>
			        </select>
			      </div>	
			    </div>
			  </div>
			  <main id="hits">
			    <div data-reactroot="" className="ais-hits">
			    	{products.map((el) => (
					    <Product key={el.id} item={el} />)
			    	)}
				  </div>
			  </main>
        <div id="pagination" >
    			<Pagination
	          activePage={page}
	          itemsCountPerPage={16}
	          totalItemsCount={totalItemsCount}
	          pageRangeDisplayed={5}
	          onChange={handlePageChange}
	        />
        </div>
			</div>
		</div>
  );
}

export default Results;



