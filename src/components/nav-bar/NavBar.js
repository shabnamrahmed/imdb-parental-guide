import React from "react";
import PropTypes from "prop-types";

NavBar.propTypes = {
  shouldshouldShowBackButton: PropTypes.bool.isRequired,
  onBackButtonClicked: PropTypes.func.isRequired,
  searchBarRef: PropTypes.object,
  searchInputValue: PropTypes.string.isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  onInputKeyUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  onInputSubmit: PropTypes.func.isRequired,
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
}) {
  return (
    <div className="search">
      {shouldShowBackButton && (
        <button className="back-button" onClick={onBackButtonClicked}>
          Back
        </button>
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

      <button className="search-button" onClick={onInputSubmit}>
        Search
      </button>
    </div>
  );
}
