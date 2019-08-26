import React from "react";
import "./card-details.css";
export const CardDetails = props => (
  <div className="card-details">
    {props.details.map(detail => (
      <span key={detail} className="card-detailts-item">
        {detail}
      </span>
    ))}
  </div>
);
