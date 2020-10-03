import React from "react";
import PropTypes from "prop-types";

import GuideSection, { guideSectionShape } from "./guide-section/GuideSection";

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
}) {
  return (
    <div>
      {!!parentalGuides.length && (
        <div className="guides-heading">
          <div className="selected-title">{selectedTitle}</div>
        </div>
      )}
      <div className={parentalGuides.length ? "guides-container" : ""}>
        <div>
          {!!parentalGuides.length && (
            <div
              className="section-heading"
              onClick={ToggleContentAdvisoryExpansion}
            >
              Content Advisory
            </div>
          )}

          {parentalGuides.map((item) => (
            <GuideSection
              item={item}
              onToggle={() => ToggleSectionExpansion(item.id, true)}
            />
          ))}
        </div>
        <div>
          {!!spoilerGuides.length && (
            <div className="section-heading" onClick={ToggleSpoilersExpansion}>
              Spoilers
            </div>
          )}

          {spoilerGuides.map((item) => (
            <GuideSection
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
