import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BackIcon } from '../../icons/chevron-left-solid.svg';
import { ReactComponent as SearchIcon } from '../../icons/search-solid.svg';
import { ReactComponent as LinkIcon } from '../../icons/link-solid.svg';
import './NavBar.css';

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
  shouldShowLinkIcon,
  onBackButtonClicked,
  searchBarRef,
  searchInputValue,
  onInputValueChange,
  onInputKeyUp,
  errorMessage,
  onInputSubmit,
  isCentered,
  isLoading,
  titleId,
}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  async function handleCopyToClipboard() {
    setIsTooltipVisible(true);
    var textArea = document.createElement('textarea');
    textArea.value = `${window.location.origin}${window.location.pathname}?title=${titleId}`;
    textArea.style.position = 'fixed'; //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    setTimeout(() => setIsTooltipVisible(false), 2500);
    document.body.removeChild(textArea);
  }

  return (
    <div
      className={`nav-bar-container 
      ${isCentered ? 'centered' : ''} 
      ${isLoading ? 'hidden' : ''}
      ${shouldShowLinkIcon ? 'title-selected-page' : ''}
      `.trim()}
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
      {shouldShowLinkIcon && (
        <div className={`tooltip ${isTooltipVisible ? 'visible' : ''}`}>
          <span className="tooltiptext">Url copied to clipboard</span>
          <LinkIcon
            className="link-button nav-icon"
            onClick={handleCopyToClipboard}
          />
        </div>
      )}
    </div>
  );
}
