import React from "react";

const Search = props => (
  <div className="container main-page">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <div className="main-container">
              <div className="container">
                {/* Jumbotron */}
                <div className="jumbotron">
                  <h1 className="text-center">
                    <strong>Article Search</strong>
                  </h1>
                  <h2 className="text-center">
                    Search for and save articles of interest.
                  </h2>
                </div>
              </div>
            </div>

            <form>
              <div className="form-group">
                <input
                  onChange={props.handleTopicChange}
                  type="text"
                  className="form-control"
                  id="topic"
                  aria-describedby="emailHelp"
                  placeholder="Enter article of interest"
                />
              </div>
              <button
                onClick={props.getArticles}
                type="submit"
                className="btn btn-default"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <div className="row">
      <div className="col-lg-12">
        <div className="panel article">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true" /> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">{props.renderArticles()}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
