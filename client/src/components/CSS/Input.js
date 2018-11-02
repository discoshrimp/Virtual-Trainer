import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
import { MdVisibility } from "react-icons/md";

const Input = props => {
  let iconVisibility = null;

  if (props.type === "password") {
    iconVisibility = <MdVisibility className="iconVisibility" />;
  }
  console.log("props: ", props.value);
  return (
    <div className="Input">
      <input
        id={props.name}
        onChange={props.handleInputChange}
        autoComplete="false"
        required
        name={props.name}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
      {iconVisibility}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholer: PropTypes.string
};

export default Input;
