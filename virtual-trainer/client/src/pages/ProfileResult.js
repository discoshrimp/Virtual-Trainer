import React from "react";

const ProfileResult = props => (
  <li className="list-group-item">
    <h5>
      <span>
        Goal: <em> {props.goal}</em>
      </span>
    </h5>
    <br />
    <p>Age: {props.age} years</p>
    <br />
    <p>Height: {props.height} ft</p>
    <br />
    <p>Weight: {props.weight} lb</p>
    <br />
    <p>Recommended Intake: {props.recommendedIntake}</p>
  </li>
);
export default ProfileResult;
