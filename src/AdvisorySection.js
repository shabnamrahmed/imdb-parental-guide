import React from "react";
import "./AdvisorySection.css";

class AdvisorySection extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.parentalGuides.length && (
          <div className="guides-heading">
            <div className="selected-title">{this.props.selectedTitle}</div>
          </div>
        )}
        <div
          className={this.props.parentalGuides.length ? "guides-container" : ""}
        >
          <div>
            {!!this.props.parentalGuides.length && (
              <div
                className="section-heading"
                onClick={this.props.ToggleContentAdvisoryExpansion}
              >
                Content Advisory
              </div>
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
                  <div className="section-summary-vote">
                    <div className="guide-summary-text">
                      {item.advisory.summary}
                    </div>
                    <div className="guide-vote-count-text">
                      {item.advisory.voteCount}
                    </div>
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
              <div
                className="section-heading"
                onClick={this.props.ToggleSpoilersExpansion}
              >
                Spoilers
              </div>
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
