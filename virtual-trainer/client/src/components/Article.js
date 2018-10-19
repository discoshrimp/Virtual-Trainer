import React from "react";

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
              </div>
              <button onClick={props.getArticles} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>
  </div>


export default Search;
