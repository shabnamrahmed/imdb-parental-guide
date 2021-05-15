import React from 'react';
import axios from 'axios';
import { cloneDeep } from 'lodash';

import TitleOptions from './components/title-options/TitleOptions';
import AdvisorySections from './components/advisory-sections/AdvisorySections';
import NavBar from './components/nav-bar/NavBar';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';

import './App.css';

const AddIdToSection = (section, id) => ({
  ...section,
  isCollapsed: true,
  id,
});

const STEPS = {
  NO_TITLE_SELECTED: 'NO_TITLE_SELECTED',
  SELECT_TITLE: 'SELECT_TITLE',
  VIEW_GUIDES: 'VIEW_GUIDES',
};

const API_URL = 'https://imdb-parental-advisory.xsaudahmed.repl.co';

const SWIPE_THRESHOLD = 125;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchBarRef = React.createRef();
  }

  state = {
    inputValue: '',
    titleOptions: [],
    parentalGuides: [],
    spoilerGuides: [],
    isLoading: false,
    selectedTitle: '',
    errorMessage: '',
    noResultsFound: false,
    currentStep: STEPS.NO_TITLE_SELECTED,
    touchStartX: 0,
    selectedTitleURL: null,
  };

  submitSearchInput = () => {
    this.setState({ errorMessage: '', noResultsFound: false });
    if (this.state.inputValue.length) {
      this.setState({
        isLoading: true,
        parentalGuides: [],
        spoilerGuides: [],
      });
      axios
        .post(`${API_URL}/findTitles`, {
          titleName: this.state.inputValue,
        })
        .then((res) => {
          this.setState({
            titleOptions: res.data,
            isLoading: false,
            noResultsFound: !res.data.length,
            currentStep: STEPS.SELECT_TITLE,
          });
        });
    } else {
      this.setState({ errorMessage: '*Please enter a title' });
    }
  };

  addTouchHandlers = () => {
    document.querySelector('body').ontouchstart = (e) =>
      this.setState({ touchStartX: e.changedTouches[0].clientX });

    document.querySelector('body').ontouchend = (e) => {
      if (
        e.changedTouches[0].clientX - this.state.touchStartX >
        SWIPE_THRESHOLD
      ) {
        this.goToSelectTitleStep();
      }
    };
  };

  removeTouchHandlers = () => {
    document.querySelector('body').ontouchstart = null;
    document.querySelector('body').ontouchend = null;
  };

  GetParentalGuide = async (titleId, titleSelection) => {
    this.setState({
      isLoading: true,
      selectedTitle: titleSelection,
    });
    try {
      const [parentalGuideResponse, ratingResponse] = await Promise.all([
        axios.post(`${API_URL}/parentalGuide`, {
          titleId,
        }),
        axios.post(`${API_URL}/getRatings`, { titleId }),
      ]);
      this.setState({
        parentalGuides:
          parentalGuideResponse.data.parentalGuide.map(AddIdToSection),
        spoilerGuides:
          parentalGuideResponse.data.spoilersGuide.map(AddIdToSection),
        selectedTitleURL: parentalGuideResponse.data.selectedTitleURL,
        selectedTitleRatings: ratingResponse.data.Ratings || [],
      });
      setTimeout(
        () =>
          this.setState({
            currentStep: STEPS.VIEW_GUIDES,
            isLoading: false,
          }),
        250
      );
      this.addTouchHandlers();
    } catch (error) {
      // TODO: handle error
    }
  };

  goToSelectTitleStep = () => {
    this.removeTouchHandlers();
    this.setState({
      currentStep: STEPS.SELECT_TITLE,
      touchStartX: 0,
    });
    setTimeout(
      () => this.setState({ parentalGuides: [], spoilerGuides: [] }),
      250
    );
  };

  BlurMobileKeyboardOnSubmit = (e) => {
    if (e.key === 'Enter') {
      this.submitSearchInput();
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
        {!this.state.titleOptions.length && !this.state.isLoading && (
          <div className="instructions regular-text">
            Please enter a movie or TV show title
          </div>
        )}
        <NavBar
          isCentered={!this.state.titleOptions.length}
          isLoading={this.state.isLoading}
          shouldShowBackButton={this.state.currentStep === STEPS.VIEW_GUIDES}
          onBackButtonClicked={this.goToSelectTitleStep}
          searchBarRef={this.searchBarRef}
          searchInputValue={this.state.inputValue}
          onInputValueChange={(evt) =>
            this.setState({
              inputValue: evt.target.value,
            })
          }
          onInputKeyUp={this.BlurMobileKeyboardOnSubmit}
          errorMessage={this.state.errorMessage}
          onInputSubmit={this.submitSearchInput}
        />
        {this.state.noResultsFound && (
          <div className="no-results-found">No Results Found</div>
        )}
        <LoadingSpinner isLoading={this.state.isLoading} />
        <TitleOptions
          options={this.state.titleOptions}
          onTitleClick={this.GetParentalGuide}
          isVisible={
            !!this.state.titleOptions.length &&
            this.state.currentStep === STEPS.SELECT_TITLE &&
            !this.state.isLoading
          }
        />
        {this.state.parentalGuides.length > 0 && (
          <AdvisorySections
            isVisible={this.state.currentStep === STEPS.VIEW_GUIDES}
            parentalGuides={this.state.parentalGuides}
            spoilerGuides={this.state.spoilerGuides}
            ratings={this.state.selectedTitleRatings}
            selectedTitle={this.state.selectedTitle}
            ToggleSectionExpansion={this.ToggleSectionExpansion}
            ToggleContentAdvisoryExpansion={this.ToggleContentAdvisoryExpansion}
            ToggleSpoilersExpansion={this.ToggleSpoilersExpansion}
            selectedTitleURL={this.state.selectedTitleURL}
          />
        )}
      </div>
    );
  }
}

export default App;
