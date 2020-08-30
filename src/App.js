import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    inputValue: "",
    titleOptions: [],
    parentalGuides: [],
    spoilerGuides: [],
    isTitlesLoading: false,
    isParentalGuidsLoading: false,
  };

  Submit = () => {
    this.setState({ isTitlesLoading: true });
    axios
      .post("https://imdb-parental-advisory.xsaudahmed.repl.co/findTitles", {
        titleName: this.state.inputValue,
      })
      .then((res) =>
        this.setState({ titleOptions: res.data, isTitlesLoading: false })
      );
  };

  GetParentalGuide = (titleId) => {
    this.setState({ isParentalGuidsLoading: true });
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
          isParentalGuidsLoading: false,
        })
      );
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(evt) =>
            this.setState({
              inputValue: evt.target.value,
            })
          }
        ></input>
        <button onClick={this.Submit}>Submit</button>

        {this.state.isTitlesLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.state.titleOptions.map((item) => (
              <div onClick={() => this.GetParentalGuide(item.id)}>
                <img src={item.imageURL} alt="" />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        )}

        {this.state.isParentalGuidsLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              {this.state.parentalGuides.map((item) => (
                <div>
                  <div>{item.sectionName}</div>
                  <div>{item.advisory.summary}</div>
                  <div>{item.advisory.voteCount}</div>
                  <div>
                    <ul>
                      {item.entries.map((entry) => (
                        <li>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {this.state.spoilerGuides.map((item) => (
                <div>
                  <div>{item.sectionName}</div>
                  <div>
                    <ul>
                      {item.entries.map((entry) => (
                        <li>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
