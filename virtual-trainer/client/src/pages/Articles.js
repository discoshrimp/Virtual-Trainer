import React, { Component } from "react";
import API from "./../utils/apis";


class Articles extends Component { 

  render() {
    return (
    	<div>
    		{API.getFood()}
    	</div>
    )}
}

export default Articles;