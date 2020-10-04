import React from "react";
import PropTypes from "prop-types";
import "./GuideSection.css";

export const guideSectionShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  sectionName: PropTypes.string.isRequired,
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

export default function GuideSection({ item, onToggle }) {
  return (
    <div>
      <div className="section-title-text" onClick={onToggle}>
        {item.sectionName}
      </div>

      <div className={item.isCollapsed ? "collapsed-entry" : "expanded-entry"}>
        {item.advisory && (
          <div className="section-summary-vote">
            <div className="guide-summary-text">{item.advisory.summary}</div>
            <div className="guide-vote-count-text">
              {item.advisory.voteCount}
            </div>
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
