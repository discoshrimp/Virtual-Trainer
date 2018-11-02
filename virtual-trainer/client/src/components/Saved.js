import React from "react";

<<<<<<< HEAD
const Saved = props => (
=======
const Saved = props =>
>>>>>>> origin/master
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
<<<<<<< HEAD
          <button
            className="btn btn-primary"
            onClick={() => props.handleDeleteButton(props._id)}
          >
            Delete
          </button>
=======
          <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
>>>>>>> origin/master
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>
<<<<<<< HEAD
);
=======
>>>>>>> origin/master

export default Saved;
