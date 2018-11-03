import React from "react";

const ProfileResult = props => (
  <li className="list-group-item">
    <h5>
      User Name: <strong> {props.user}</strong>
    </h5>
    <br />
    <p>Goal: {props.goal}</p>
    <br />
    <p>Age: {props.age} years</p>
    <br />
    <p>Height: {props.height} ft</p>
    <br />
    <p>Weight: {props.weight} lb</p>
    <br />
  </li>
);
export default ProfileResult;
