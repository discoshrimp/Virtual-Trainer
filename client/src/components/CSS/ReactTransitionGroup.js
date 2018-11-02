import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import { Motion, spring } from "react-motion";
// import NavigationPanel from "./components/CSS/NavigationPanel";
import Modal from "./Modal";
import "../../App.css";

class ReactTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit = e => {
    this.setState({ mounted: false });
    e.preventDefault();
  };

  render() {
    const { mounted } = this.state;

    let child;
    // let test = 12;

    if (mounted) {
      child = (
        <div className="App_test">
          {/* <NavigationPanel /> */}
          <Modal onSubmit={this.handleSubmit} />
        </div>
      );
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {child}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ReactTrans;
