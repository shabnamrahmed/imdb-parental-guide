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
  };

  Submit = () => {
    this.setState({
      isLoading: true,
      parentalGuides: [],
      spoilerGuides: [],
      isShowingParentalGuides: false,
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
          isShowingParentalGuides: true,
        })
      );
  };

  CloseParentalGuide = () => {
    this.setState({
      parentalGuides: [],
      spoilerGuides: [],
      isShowingParentalGuides: false,
      selectedTitle: "",
    });
  };

  render() {
    return (
      <div class="main-container">
        <div class="search">
          <button
            class={
              !this.state.isShowingParentalGuides
                ? "back-button-hidden"
                : "back-button-displayed"
            }
            onClick={this.CloseParentalGuide}
          >
            Back
          </button>
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
        {!this.state.parentalGuides.length && !this.state.isLoading && (
          <div
            class={
              this.state.titleOptions.length
                ? "titleOptions"
                : "title-options-hidden"
            }
          >
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

        <div
          class={
            this.state.parentalGuides.length
              ? "guides-heading"
              : "guides-heading-hidden"
          }
        >
          Parental Guide for:{" "}
          <div class="selected-title">{this.state.selectedTitle}</div>
        </div>

        <div class={this.state.parentalGuides.length ? "guides-container" : ""}>
          <div>
            {this.state.parentalGuides.map((item) => (
              <div>
                <div class="section-title-text">{item.sectionName}</div>
                <div class="guide-summary-text">{item.advisory.summary}</div>
                <div class="guide-vote-count-text">
                  {item.advisory.voteCount}
                </div>
                <div>
                  <ul>
                    {item.entries.map((entry) => (
                      <li class="guide-entry-text">{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div>
            {this.state.spoilerGuides.map((item) => (
              <div>
                <div class="section-title-text">{item.sectionName}</div>
                <div>
                  <ul>
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
