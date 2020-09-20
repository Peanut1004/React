import React from "react";
import Categorie from "./Categorie";
import Brand from "./Brand";
import Rating from "./Rating";

const Sidebar = (props) => {
  let className;

  let typeExit = props.type.slice(5, props.type.length);
  typeExit = decodeURIComponent(typeExit);
  let brandExit = props.brand;
  let ratingExit = props.rating.slice(7, props.rating.length);
  console.log(ratingExit);
  
  if (typeExit || brandExit.length > 0 || ratingExit) {
    className = "open";
  }else{
    className = "";
  }
  
  const handleClear = () =>{
    props.handleClearCate();
  }
  return (
    <aside>
      <div id="clear-all" className={'show-hide ' + className }>
        <a className="ais-clear-all--link" href="#" onClick={handleClear}>
          <div className="ais-title">
            <i className="fa fa-eraser"></i> Clear all filters
          </div>
        </a>
      </div>
      <section className="facet-wrapper">
        <h3 className="facet-category-title">Show results for</h3>
        <div id="categories">
          <Categorie filterTypeCate={props.filterTypeSide} />
        </div>
      </section>
      {/*categories*/}
      <section className="facet-wrapper">
        <h3 className="facet-category-title">Refine by</h3>
        {/*types*/}
        <div id="brands" className="facet">
          <h4 className="facet-title">Brand</h4>
          <Brand handleBrandSelect={props.handleBrandSide} brandFilter={brandExit} />
        </div>
        {/*brands*/}
        <div id="rating" className="facet">
          <h4 className="facet-title">Ratings</h4>
          <div className="ais-star-rating--list">
            <Rating handleRating={props.handleRatingSide} />
          </div>
        </div>
        {/*rating*/}
        <div id="prices" className="facet">
          <h4 className="facet-title">Prices</h4>   
            <div className="ais-price-ranges--list nav nav-list">
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">≤ 1</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$1 - 80</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$80 - 160</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$160 - 240</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$240 - 1,820</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$1,820 - 3,400</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$3,400 - 4,980</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">≥ $4,980</a>
              </div>
            </div>
            <form className="ais-price-ranges--form">
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                  
                </span>
                <input type="number" className="ais-price-ranges--input"  />
              </label>
              <span className="ais-price-ranges--separator">
                
              </span>
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                  
                </span>
                <input type="number" className="ais-price-ranges--input"  />
              </label>
              <button className="ais-price-ranges--button" type="submit">Go</button>
            </form>
        </div>{/*prices*/}
      </section>
      <div className="thank-you">Data courtesy of <a href="#">Best Buy</a></div>
    </aside>
  );
};

export default Sidebar;
