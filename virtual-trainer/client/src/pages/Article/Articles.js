import React, { Component } from "react";
import API from "../../utils/apis";
<<<<<<< HEAD
import Saved from "../../components/Saved";
import Article from "../../components/Article";
import Results from "../../components/Results";
// import "./Articles.css";

class Articles extends Component {
  state = {
    topic: "",
    articles: [],
    saved: []
  };
  componentDidMount() {
    this.getSavedArticles();
=======

import Article from "../../components/Article";
import Results from "../../components/Results";
import "./Articles.css";
import Saved from "../../components/Saved";
import moment from "moment";

let data = {
	articles: []
}

class Articles extends Component { 
 state = {
 	topic: "",
 	articles : [],
  saved: []
 }
  componentDidMount() {
    this.getSavedArticles()
  }
 getArticles = (event) => {
 	event.preventDefault();
    API.weightLossArticles(this.state.topic)
      .then((data) => {
       this.setState({articles: data.data.response.docs});
      });
>>>>>>> origin/master
  }
  getArticles = event => {
    event.preventDefault();
    API.weightLossArticles(this.state.topic).then(data => {
      this.setState({ articles: data.data.response.docs });
    });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
<<<<<<< HEAD
  };
  getSavedArticles = () => {
    API.getArticles().then(res => {
      this.setState({ saved: res.data });
    });
  };

  handleSaveButton = id => {
    const findArticleByID = this.state.articles.find(el => el._id === id);
    this.state.articles.find(el => console.log(el));
    console.log(this.state.articles.find(el => el._id === id));
    const newSave = {
      title: findArticleByID.headline.main,
      url: findArticleByID.web_url
    };
    API.saveArticles(newSave).then(this.getSavedArticles());
  };
=======
  }
  getSavedArticles = () => {
    API.getArticles()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    this.state.articles.find((el)=> console.log(el));
    console.log(this.state.articles.find((el) => el._id === id));
    const newSave = {title: findArticleByID.headline.main, url: findArticleByID.web_url};
    API.saveArticles(newSave)
    .then(this.getSavedArticles());
  }

  handleDeleteButton = (id) => {
    API.deleteArticles(id)
      .then(this.getSavedArticles());
  }
  renderSavedArticles = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }
  renderArticles = () => {
>>>>>>> origin/master

  handleDeleteButton = id => {
    API.deleteArticles(id).then(this.getSavedArticles());
  };
  renderSavedArticles = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };
  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
<<<<<<< HEAD
        key={article._id}
        title={article.headline.main}
        url={article.web_url}
=======
      	key={article._id}
        title={article.headline.main}
        url = {article.web_url}
>>>>>>> origin/master
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Article
          handleTopicChange={this.handleTopicChange}
          getArticles={this.getArticles}
          renderArticles={this.renderArticles}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel article">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa fa-download" aria-hidden="true" /> Saved
                      Articles
                    </strong>
                  </h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">{this.renderSavedArticles()}</ul>
=======
    	
    	<div>

    		<Article
    			handleTopicChange={this.handleTopicChange}
    			getArticles = {this.getArticles}
    			renderArticles = {this.renderArticles}
    		/>
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      {this.renderSavedArticles()}
                    </ul>
                  </div>
>>>>>>> origin/master
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    );
  }
=======
 
    	</div>
    )}
>>>>>>> origin/master
}

export default Articles;
