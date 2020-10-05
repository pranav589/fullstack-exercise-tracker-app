import React, { Component } from "react";
import { Link } from "react-router-dom";

const Exercise = props => {
  const { username, description, duration, date } = props.exercise;
  
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>Edit</Link> |
        <a
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Exercise;
