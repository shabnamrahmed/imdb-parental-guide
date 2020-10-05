import React from "react";
import { ReactComponent as ChevronIcon } from "../../../icons/chevron-up-solid.svg";

import PropTypes from "prop-types";

import "./ToggleIcon.css";

ToggleIcon.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default function ToggleIcon({ isExpanded }) {
  return (
    <div className="toggle-icon-container">
      <ChevronIcon
        className={`toggle-icon ${isExpanded ? "is-expanded" : ""}`}
      />
    </div>
  );
}
