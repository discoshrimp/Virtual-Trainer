import React from "react";

const Dashboard = props => (
  <tr>
    <th scope="row">{props.name}</th>
    <th scope="row">{props.calories.toFixed(2)}</th>
    <th scope="row">{props.carbs.toFixed(2)}</th>
    <th scope="row">{props.protein.toFixed(2)}</th>
    <th scope="row">{props.fat.toFixed(2)}</th>
  </tr>
);

export default Dashboard;
