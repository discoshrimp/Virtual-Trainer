import React from "react";

const Search = props => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="panel profile">
          <div className="panel-heading">
            <h5 className="panel-title">{/* <strong>Profile</strong> */}</h5>
          </div>
          <div className="panel-body">{props.renderProfile()}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
