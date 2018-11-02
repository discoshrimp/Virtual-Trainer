import React from "react";
// import { withRouter } from "react-router-dom";

const Header = props => {
  let Greeting;
  if (props.user === null) {
    Greeting = <p>Hello Guest</p>;
  } else if (props.user.user) {
    console.log("greeting: ", props.user.user);
    Greeting = (
      <p>
        Welcome <strong>{props.user.user}</strong>
      </p>
    );
  } else if (props.user.userName) {
    console.log("greeting2: ", props.user.userName);
    Greeting = (
      <span>
        <p>
          Welcome <strong>{props.user.userName}</strong>
        </p>
      </span>
    );
  }
  return (
    <div className="Header">
      <div className="greeting">{Greeting}</div>
    </div>
  );
};
export default Header;
