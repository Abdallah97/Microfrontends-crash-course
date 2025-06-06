import React from "react";
import "./CardDetails.css";

const CardDetails = (props) => {
    const {image, name, cuisine, rating } = props.data;

    const handleClick = () => {
      props.callback(props.data);
    }

    return (
      <div className="card-details">
        <img src={image} alt={name} />
        <div className="price">Items at 200 Rs.</div>
        <div className="item-title">{name}</div>
        <div>Coisine: {cuisine}</div>
        <div>Ratings: {rating}</div>
        <button className="add-button" onClick={handleClick}>Add</button>
      </div>
    );
  }

export default CardDetails;
