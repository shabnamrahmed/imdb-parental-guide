import React from "react";
import PropTypes from "prop-types";

import "./TitleOptions.css";

TitleOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
    })
  ),
};

export default function TitleOptions({ options, onTitleClick, isVisible }) {
  return (
    <div className={`options-container ${isVisible ? "" : "hidden"}`}>
      {options?.map((item) => (
        <div
          key={item.title}
          className="title-option-container"
          onClick={() => onTitleClick(item.id, item.title)}
        >
          <img className="title-image" src={item.imageURL} alt="" />
          <div className="regular-text">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
