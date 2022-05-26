import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div>
      <h3>
        {props.title}
        <Link to={`/portfolio/${props.slug}`}>link</Link>
      </h3>
    </div>
  );
}
