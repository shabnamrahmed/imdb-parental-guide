import React from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import "./App.css";
import AdvisorySections from "./components/advisory-sections/AdvisorySections";
import NavBar from "./components/nav-bar/NavBar";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

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
        <NavBar
          shouldShowBackButton={!!this.state.parentalGuides.length}
          onBackButtonClicked={this.CloseParentalGuide}
          searchBarRef={this.searchBarRef}
          searchInputValue={this.state.inputValue}
          onInputValueChange={(evt) =>
            this.setState({
              inputValue: evt.target.value,
            })
          }
          onInputKeyUp={this.BlurMobileKeyboardOnSubmit}
          errorMessage={this.state.errorMessage}
          onInputSubmit={this.Submit}
        />

        {this.state.noResultsFound && (
          <div className="no-results-found">No Results Found</div>
        )}
        {this.state.isLoading && <div>{<LoadingSpinner />}</div>}

        {!!this.state.titleOptions.length &&
          !this.state.parentalGuides.length &&
          !this.state.isLoading && (
            <div className="title-options">
              {this.state.titleOptions.map((item) => (
                <div
                  key={item.title}
                  className="option"
                  onClick={() => this.GetParentalGuide(item.id, item.title)}
                >
                  <img className="media-image" src={item.imageURL} alt="" />
                  <div className="text">{item.title}</div>
                </div>
              ))}
            </div>
          )}

        <AdvisorySections
          parentalGuides={this.state.parentalGuides}
          spoilerGuides={this.state.spoilerGuides}
          selectedTitle={this.state.selectedTitle}
          ToggleSectionExpansion={this.ToggleSectionExpansion}
          ToggleContentAdvisoryExpansion={this.ToggleContentAdvisoryExpansion}
          ToggleSpoilersExpansion={this.ToggleSpoilersExpansion}
        />
      </div>
    );
  }
}

export default App;
