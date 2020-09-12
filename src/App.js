import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    inputValue: "",
    titleOptions: [],
    parentalGuides: [],
    spoilerGuides: [],
    isLoading: false,
    selectedTitle: "",
    isOpen: false,
  };

  Submit = () => {
    this.setState({
      isLoading: true,
      parentalGuides: [],
      spoilerGuides: [],
    });
    axios
      .post("https://imdb-parental-advisory.xsaudahmed.repl.co/findTitles", {
        titleName: this.state.inputValue,
      })
      .then((res) =>
        this.setState({ titleOptions: res.data, isLoading: false })
      );
  };

  GetParentalGuide = (titleId, titleSelection) => {
    this.setState({
      isLoading: true,
      selectedTitle: titleSelection,
    });
    axios
      .post("https://imdb-parental-advisory.xsaudahmed.repl.co/parentalGuide", {
        titleId,
      })
      .then((res) =>
        this.setState({
          parentalGuides: res.data.parentalGuide.map((section) => ({
            ...section,
            isOpen: false,
          })),
          spoilerGuides: res.data.spoilersGuide,
          isLoading: false,
        })
      );
  };

  CloseParentalGuide = () => {
    this.setState({
      parentalGuides: [],
      spoilerGuides: [],
      selectedTitle: "",
    });
  };

  ExpandCollapseAll = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div class="main-container">
        <div class="search">
          {!!this.state.parentalGuides.length && (
            <button class="back-button" onClick={this.CloseParentalGuide}>
              Back
            </button>
          )}
          <input
            class="search-bar"
            value={this.state.inputValue}
            onChange={(evt) =>
              this.setState({
                inputValue: evt.target.value,
              })
            }
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                this.Submit();
              }
            }}
          ></input>
          <button class="search-button" onClick={this.Submit}>
            Search
          </button>
        </div>
        {this.state.isLoading && <div class="loading">Loading...</div>}
        {!!this.state.titleOptions.length &&
          !this.state.parentalGuides.length &&
          !this.state.isLoading && (
            <div class="title-options">
              {this.state.titleOptions.map((item) => (
                <div
                  class="option"
                  onClick={() => this.GetParentalGuide(item.id, item.title)}
                >
                  <img class="media-image" src={item.imageURL} alt="" />
                  <div class="text">{item.title}</div>
                </div>
              ))}
            </div>
          )}

        {!!this.state.parentalGuides.length && (
          <div class="guides-heading">
            Parental Guide for:{" "}
            <div class="selected-title">{this.state.selectedTitle}</div>
          </div>
        )}

        <div class={this.state.parentalGuides.length ? "guides-container" : ""}>
          {!!this.state.parentalGuides.length && (
            <div class="expand-collapse" onClick={this.ExpandCollapseAll}>
              Expand/Collapse All
            </div>
          )}

          <div>
            {!!this.state.parentalGuides.length && (
              <div class="section-heading">Content Advisory:</div>
            )}

            {this.state.parentalGuides.map((item) => (
              <div>
                <div class="section-title-text">{item.sectionName}</div>
                <div
                  class={
                    this.state.isOpen ? "expanded-entry" : "collapsed-entry"
                  }
                >
                  <div class="guide-summary-text">{item.advisory.summary}</div>
                  <div class="guide-vote-count-text">
                    {item.advisory.voteCount}
                  </div>
                  <div>
                    <ul class="entries-list">
                      {item.entries.map((entry) => (
                        <li class="guide-entry-text">{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {!!this.state.spoilerGuides.length && (
              <div class="section-heading">Spoilers:</div>
            )}

            {this.state.spoilerGuides.map((item) => (
              <div>
                <div class="section-title-text">{item.sectionName}</div>
                <div
                  class={
                    this.state.isOpen ? "expanded-entry" : "collapsed-entry"
                  }
                >
                  <ul class="entries-list">
                    {item.entries.map((entry) => (
                      <li class="guide-entry-text">{entry}</li>
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

export default App;
