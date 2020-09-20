import React, {Component} from "react";

const Header = () => {
  return (
    <header className="content-wrapper">
      <a href="./" className="is-logo"><img src="images/logo.png" alt="logo" width="40" /></a>
      <a href="./" className="logo">amazing</a>
      <div className="input-group">
        <div className="ais-search-box">
          <input type="text" className="form-control ais-search-box--input" id="q" placeholder="Search a product" role="textbox" spellCheck="false"  />
        </div>
        <span className="input-group-btn">
          <button className="btn btn-default"><i className="fa fa-search"></i></button>
        </span>
      </div>
    </header>
  );
}

export default Header;


