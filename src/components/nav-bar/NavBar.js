import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as BackIcon } from "../../icons/chevron-left-solid.svg";
import { ReactComponent as SearchIcon } from "../../icons/search-solid.svg";
import "./NavBar.css";

NavBar.propTypes = {
  shouldshouldShowBackButton: PropTypes.bool,
  onBackButtonClicked: PropTypes.func.isRequired,
  searchBarRef: PropTypes.object,
  searchInputValue: PropTypes.string.isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  onInputKeyUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  onInputSubmit: PropTypes.func.isRequired,
  isCentered: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function NavBar({
  shouldShowBackButton,
  onBackButtonClicked,
  searchBarRef,
  searchInputValue,
  onInputValueChange,
  onInputKeyUp,
  errorMessage,
  onInputSubmit,
  isCentered,
  isLoading,
}) {
  return (
    <div
      className={`nav-bar-container 
      ${isCentered ? "centered" : ""} 
      ${isLoading ? "hidden" : ""}`}
    >
      {shouldShowBackButton && (
        <BackIcon
          className="back-button nav-icon"
          onClick={onBackButtonClicked}
        />
      )}
      <div>
        <input
          className="search-bar"
          ref={searchBarRef}
          value={searchInputValue}
          onChange={onInputValueChange}
          onKeyUp={onInputKeyUp}
        ></input>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>

      <SearchIcon className="search-button nav-icon" onClick={onInputSubmit} />
    </div>
  );
}
