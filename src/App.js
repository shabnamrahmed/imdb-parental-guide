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

  GetParentalGuide = (titleId) => {
    this.setState({ isLoading: true });
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
    });
  };

  render() {
    return (
      <div class="main-container">
        <div class="search">
          <button
            class={
              !this.state.isShowingParentalGuides
                ? "close-parental-guide_button"
                : ""
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
          <button onClick={this.Submit}>Submit</button>
        </div>
        {this.state.isLoading && <div class="loading">Loading...</div>}
        {!this.state.parentalGuides.length && (
          <div class={this.state.titleOptions.length ? "titleOptions" : ""}>
            {this.state.titleOptions.map((item) => (
              <div
                class="option"
                onClick={() => this.GetParentalGuide(item.id)}
              >
                <img class="media-image" src={item.imageURL} alt="" />
                <div class="text">{item.title}</div>
              </div>
            ))}
          </div>
        )}

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
