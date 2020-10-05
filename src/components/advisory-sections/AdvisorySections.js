import React from "react";
import PropTypes from "prop-types";

import GuideSection, { guideSectionShape } from "./guide-section/GuideSection";
import ToggleIcon from "./toggle-icon/ToggleIcon";

import "./AdvisorySections.css";

AdvisorySections.propTypes = {
  parentalGuides: PropTypes.arrayOf(guideSectionShape),
  spoilerGuides: PropTypes.arrayOf(guideSectionShape),
  selectedTitle: PropTypes.string,
  ToggleContentAdvisoryExpansion: PropTypes.func.isRequired,
  ToggleSpoilersExpansion: PropTypes.func.isRequired,
  ToggleSectionExpansion: PropTypes.func.isRequired,
};

function AdvisorySections({
  parentalGuides,
  spoilerGuides,
  selectedTitle,
  ToggleContentAdvisoryExpansion,
  ToggleSpoilersExpansion,
  ToggleSectionExpansion,
  isVisible,
}) {
  return (
    <div className={`advisory-section-container ${!isVisible ? "hidden" : ""}`}>
      {!!parentalGuides.length && (
        <div className="guides-heading">
          <div className="selected-title">{selectedTitle}</div>
        </div>
      )}
      <div className={"guides-container"}>
        <div>
          {!!parentalGuides.length && (
            <div
              className="section-heading"
              onClick={ToggleContentAdvisoryExpansion}
            >
              <div className="empty-div"></div>
              <div className="section-heading-text">Content Advisory</div>
              <div className="toggle-icon-container">
                <ToggleIcon
                  isExpanded={parentalGuides.some((item) => !item.isCollapsed)}
                />
              </div>
            </div>
          )}

          {parentalGuides.map((item) => (
            <GuideSection
              key={item.id}
              item={item}
              onToggle={() => ToggleSectionExpansion(item.id, true)}
            />
          ))}
        </div>
        <div>
          {!!spoilerGuides.length && (
            <div className="section-heading" onClick={ToggleSpoilersExpansion}>
              <div className="empty-div"></div>
              <div className="section-heading-text">Spoilers</div>
              <div className="toggle-icon-container">
                <ToggleIcon
                  isExpanded={spoilerGuides.some((item) => !item.isCollapsed)}
                />
              </div>
            </div>
          )}

          {spoilerGuides.map((item) => (
            <GuideSection
              key={item.id}
              item={item}
              onToggle={() => ToggleSectionExpansion(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvisorySections;
