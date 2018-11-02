import React from "react";
import propTypes from "prop-types";
import "../../App.css";
import { MdArrowForward } from "react-icons/md";
import { FaGooglePlus, FaTwitter, FaFacebook } from "react-icons/fa";
// import { Motion, spring } from "react-motion";

const SubmitButton = props => {
  // console.log(props);
  let socialNets = null;

  if (props.type === "signIn") {
    socialNets = (
      <div className="socialNets">
        <FaGooglePlus className="socialNetsIcon" />
        <FaTwitter className="socialNetsIcon" />
        <FaFacebook className="socialNetsIcon" />
      </div>
    );
  } else {
    socialNets = <div className="socialNets" />;
  }
  return (
    <div className={"submitButton"}>
      {socialNets}
      <button
        onClick={props.handleFormSubmit}
        className={props.type === "signIn" ? "submitSignIn" : "submitSignUp"}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  type: propTypes.String
};

export default SubmitButton;
