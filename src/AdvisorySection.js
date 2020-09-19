import React from "react";
import "./AdvisorySection.css";

class AdvisorySection extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.parentalGuides.length && (
          <div className="guides-heading">
            Parental Guide for:{" "}
            <div className="selected-title">{this.props.selectedTitle}</div>
          </div>
        )}
        <div
          className={this.props.parentalGuides.length ? "guides-container" : ""}
        >
          {!!this.props.parentalGuides.length && (
            <div
              className="expand-collapse"
              onClick={this.props.ToggleAllExpansion}
            >
              Expand/Collapse All
            </div>
          )}

          <div>
            {!!this.props.parentalGuides.length && (
              <div className="section-heading">Content Advisory:</div>
            )}

            {this.props.parentalGuides.map((item) => (
              <div>
                <div
                  className="section-title-text"
                  onClick={() =>
                    this.props.ToggleSectionExpansion(item.id, true)
                  }
                >
                  {item.sectionName}
                </div>
                <div
                  className={
                    item.isCollapsed ? "collapsed-entry" : "expanded-entry"
                  }
                >
                  <div className="guide-summary-text">
                    {item.advisory.summary}
                  </div>
                  <div className="guide-vote-count-text">
                    {item.advisory.voteCount}
                  </div>
                  <div>
                    <ul className="entries-list">
                      {item.entries.map((entry) => (
                        <li className="guide-entry-text">{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {!!this.props.spoilerGuides.length && (
              <div className="section-heading">Spoilers:</div>
            )}

            {this.props.spoilerGuides.map((item) => (
              <div>
                <div
                  className="section-title-text"
                  onClick={() => this.props.ToggleSectionExpansion(item.id)}
                >
                  {item.sectionName}
                </div>
                <div
                  className={
                    item.isCollapsed ? "collapsed-entry" : "expanded-entry"
                  }
                >
                  <ul className="entries-list">
                    {item.entries.map((entry) => (
                      <li className="guide-entry-text">{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AdvisorySection;
