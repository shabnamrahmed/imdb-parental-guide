import React from "react";
import PropTypes from "prop-types";

import ToggleIcon from "../toggle-icon/ToggleIcon";

import "./GuideSection.css";

export const guideSectionShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  sectionName: PropTypes.string,
  /**
   * entries may not exist
   */
  entries: PropTypes.arrayOf(PropTypes.string),
  /**
   * advisory secttion only exists for parental guides not for spoiler guides
   */
  advisory: PropTypes.shape({
    summary: PropTypes.string,
    voteCount: PropTypes.string,
  }),
});

GuideSection.propTypes = {
  onToggle: PropTypes.func.isRequired,
  item: guideSectionShape,
};

const NO_ADVISORY_SUMMARY = "Severity?";

export default function GuideSection({ item, onToggle }) {
  return (
    <div>
      <div className="section-title-header" onClick={onToggle}>
        <div className="section-title-text">{item.sectionName}</div>
        <ToggleIcon isExpanded={!item.isCollapsed} />
      </div>
      <div className={`section-contents ${item.isCollapsed ? "hidden" : ""}`}>
        {item.advisory && item.advisory.summary !== NO_ADVISORY_SUMMARY && (
          <div className="section-summary-vote">
            <div className="guide-summary-text">{item.advisory.summary}</div>
            <div>{item.advisory.voteCount}</div>
          </div>
        )}
        <div>
          <ul className="entries-list">
            {item.entries.map((entry) => (
              <li key={entry} className="guide-entry-text">
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
