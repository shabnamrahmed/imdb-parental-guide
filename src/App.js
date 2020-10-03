import React from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import "./App.css";
import AdvisorySection from "./AdvisorySection";
import LoadingSpinner from "./LoadingSpinner";

const AddIdToSection = (section, id) => ({
  ...section,
  isCollapsed: true,
  id,
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchBarRef = React.createRef();
  }

  state = {
    inputValue: "",
    titleOptions: [],
    parentalGuides: [],
    spoilerGuides: [],
    isLoading: false,
    selectedTitle: "",
    errorMessage: "",
    noResultsFound: false,
  };

  Submit = () => {
    this.setState({ errorMessage: "", noResultsFound: false });
    if (this.state.inputValue.length) {
      this.setState({
        isLoading: true,
        parentalGuides: [],
        spoilerGuides: [],
      });
      axios
        .post("https://imdb-parental-advisory.xsaudahmed.repl.co/findTitles", {
          titleName: this.state.inputValue,
        })
        .then((res) => {
          this.setState({
            titleOptions: res.data,
            isLoading: false,
            noResultsFound: !res.data.length,
          });
        });
    } else {
      this.setState({ errorMessage: "*Please enter a title" });
    }
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
          parentalGuides: res.data.parentalGuide.map(AddIdToSection),
          spoilerGuides: res.data.spoilersGuide.map(AddIdToSection),
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

  BlurMobileKeyboardOnSubmit = (e) => {
    if (e.key === "Enter") {
      this.Submit();
      this.searchBarRef.current.blur();
    }
  };

  ToggleAllExpansion = () => {
    let newParentalGuides, newSpoilerGuides;

    // check if any list is not isCollapsed
    const isAnyParentalGuideOpen = this.state.parentalGuides.some(
      (section) => !section.isCollapsed
    );

    const isAnySpoilerGuideOpen = this.state.spoilerGuides.some(
      (section) => !section.isCollapsed
    );

    const isAnySectionOpen = isAnyParentalGuideOpen || isAnySpoilerGuideOpen;

    //if something is expanded close everything
    if (isAnySectionOpen) {
      newParentalGuides = this.state.parentalGuides.map((section) => ({
        ...section,
        isCollapsed: true,
      }));

      newSpoilerGuides = this.state.spoilerGuides.map((section) => ({
        ...section,
        isCollapsed: true,
      }));
    }
    //else collapse everything
    else {
      newParentalGuides = this.state.parentalGuides.map((section) => ({
        ...section,
        isCollapsed: false,
      }));

      newSpoilerGuides = this.state.spoilerGuides.map((section) => ({
        ...section,
        isCollapsed: false,
      }));
    }
    this.setState({
      parentalGuides: newParentalGuides,
      spoilerGuides: newSpoilerGuides,
    });
  };

  ToggleContentAdvisoryExpansion = () => {
    let newParentalGuides;

    const isAnyParentalGuideOpen = this.state.parentalGuides.some(
      (section) => !section.isCollapsed
    );

    if (isAnyParentalGuideOpen) {
      newParentalGuides = this.state.parentalGuides.map((section) => ({
        ...section,
        isCollapsed: true,
      }));
    } else {
      newParentalGuides = this.state.parentalGuides.map((section) => ({
        ...section,
        isCollapsed: false,
      }));
    }
    this.setState({
      parentalGuides: newParentalGuides,
    });
  };

  ToggleSpoilersExpansion = () => {
    let newSpoilerGuides;

    const isAnySpoilerGuideOpen = this.state.spoilerGuides.some(
      (section) => !section.isCollapsed
    );

    if (isAnySpoilerGuideOpen) {
      newSpoilerGuides = this.state.spoilerGuides.map((section) => ({
        ...section,
        isCollapsed: true,
      }));
    } else {
      newSpoilerGuides = this.state.spoilerGuides.map((section) => ({
        ...section,
        isCollapsed: false,
      }));
    }
    this.setState({
      spoilerGuides: newSpoilerGuides,
    });
  };

  ToggleSectionExpansion = (id, isParentalGuide = false) => {
    const newGuides = cloneDeep(
      isParentalGuide ? this.state.parentalGuides : this.state.spoilerGuides
    );

    newGuides[id].isCollapsed = !newGuides[id].isCollapsed;

    if (isParentalGuide) {
      this.setState({ parentalGuides: newGuides });
    } else {
      this.setState({ spoilerGuides: newGuides });
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="search">
          {!!this.state.parentalGuides.length && (
            <button className="back-button" onClick={this.CloseParentalGuide}>
              <i class="fa fa-chevron-left"></i>
            </button>
          )}
          <div>
            <input
              className="search-bar"
              ref={this.searchBarRef}
              value={this.state.inputValue}
              onChange={(evt) =>
                this.setState({
                  inputValue: evt.target.value,
                })
              }
              onKeyUp={this.BlurMobileKeyboardOnSubmit}
            ></input>
            {this.state.errorMessage && (
              <div className="error-message">{this.state.errorMessage}</div>
            )}
          </div>

          <button className="search-button" onClick={this.Submit}>
            <i class="fa fa-search"></i>
          </button>
        </div>
        {this.state.noResultsFound && <div>No Results Found</div>}
        {this.state.isLoading && <div>{<LoadingSpinner />}</div>}

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

        <AdvisorySection
          parentalGuides={this.state.parentalGuides}
          spoilerGuides={this.state.spoilerGuides}
          selectedTitle={this.state.selectedTitle}
          ToggleSectionExpansion={this.ToggleSectionExpansion}
          ToggleAllExpansion={this.ToggleAllExpansion}
          ToggleContentAdvisoryExpansion={this.ToggleContentAdvisoryExpansion}
          ToggleSpoilersExpansion={this.ToggleSpoilersExpansion}
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </div>
    );
  }
}

export default App;
