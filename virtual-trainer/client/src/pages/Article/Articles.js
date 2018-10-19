import React, { Component } from "react";
import API from "../../utils/apis";

import Article from "./../components/Article"
import Results from "./../components/Results";
import moment from "moment";

let data = {
	articles: []
}

class Articles extends Component { 
 state = {
 	topic: "",
 	articles : []
 }
 getArticles = (event) => {
 	event.preventDefault();
    API.weightLossArticles(this.state.topic)
      .then((data) => {
       this.setState({articles: data.data.response.docs});
      });
  }
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }
  renderArticles = () => {

    return this.state.articles.map(article => (
      <Results
      	key={article._id}
        title={article.headline.main}
        url = {article.web_url}
      />
    ));
  }
  render() {
    return (
    	
    	<div>

    		<Article
    			handleTopicChange={this.handleTopicChange}
    			getArticles = {this.getArticles}
    			renderArticles = {this.renderArticles}
    		/>
 
    	</div>
    )}
}

export default Articles;