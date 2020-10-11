(this["webpackJsonpparental-guide-client"]=this["webpackJsonpparental-guide-client"]||[]).push([[0],{20:function(e,t,a){e.exports=a(54)},25:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),s=a.n(r),l=(a(25),a(15)),c=a(16),o=a(19),u=a(18),d=a(2),m=a(4),p=a.n(m),f=a(17);a(45);function h(e){var t=e.options,a=e.onTitleClick,n=e.isVisible;return i.a.createElement("div",{className:"options-container ".concat(n?"":"hidden")},null===t||void 0===t?void 0:t.map((function(e){return i.a.createElement("div",{key:e.title,className:"title-option-container",onClick:function(){return a(e.id,e.title)}},i.a.createElement("img",{className:"title-image",src:e.imageURL,alt:""}),i.a.createElement("div",{className:"regular-text"},e.title))})))}var v=a(3),g=a.n(v);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var y=i.a.createElement("path",{fill:"currentColor",d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}),S=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return i.a.createElement("svg",E({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-up",className:"svg-inline--fa fa-chevron-up fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},n),a?i.a.createElement("title",null,a):null,y)},O=i.a.forwardRef((function(e,t){return i.a.createElement(S,E({svgRef:t},e))}));a.p,a(48);function N(e){var t=e.isExpanded;return i.a.createElement("div",{className:"toggle-icon-container"},i.a.createElement(O,{className:"toggle-icon ".concat(t?"is-expanded":"")}))}a(49),g.a.shape({id:g.a.number.isRequired,isCollapsed:g.a.bool.isRequired,sectionName:g.a.string.isRequired,entries:g.a.arrayOf(g.a.string),advisory:g.a.shape({summary:g.a.string,voteCount:g.a.string})});function k(e){var t=e.item,a=e.onToggle;return i.a.createElement("div",null,i.a.createElement("div",{className:"section-title-header",onClick:a},i.a.createElement("div",{className:"section-title-text"},t.sectionName),i.a.createElement(N,{isExpanded:!t.isCollapsed})),i.a.createElement("div",{className:"section-contents ".concat(t.isCollapsed?"hidden":"")},t.advisory&&"Severity?"!==t.advisory.summary&&i.a.createElement("div",{className:"section-summary-vote"},i.a.createElement("div",{className:"guide-summary-text"},t.advisory.summary),i.a.createElement("div",null,t.advisory.voteCount)),i.a.createElement("div",null,i.a.createElement("ul",{className:"entries-list"},t.entries.map((function(e){return i.a.createElement("li",{key:e,className:"guide-entry-text"},e)}))))))}a(50);var T=function(e){var t=e.parentalGuides,a=e.spoilerGuides,n=e.selectedTitle,r=e.ToggleContentAdvisoryExpansion,s=e.ToggleSpoilersExpansion,l=e.ToggleSectionExpansion,c=e.isVisible;return i.a.createElement("div",{className:"advisory-section-container ".concat(c?"":"hidden")},!!t.length&&i.a.createElement("div",{className:"guides-heading"},i.a.createElement("div",{className:"selected-title"},n)),i.a.createElement("div",{className:"guides-container"},i.a.createElement("div",null,!!t.length&&i.a.createElement("div",{className:"section-heading",onClick:r},i.a.createElement("div",{className:"empty-div"}),i.a.createElement("div",{className:"section-heading-text"},"Content Advisory"),i.a.createElement("div",{className:"toggle-icon-container"},i.a.createElement(N,{isExpanded:t.some((function(e){return!e.isCollapsed}))}))),t.filter((function(e){return!!e.entries.length})).map((function(e){return i.a.createElement(k,{key:e.id,item:e,onToggle:function(){return l(e.id,!0)}})}))),i.a.createElement("div",null,!!a.length&&i.a.createElement("div",{className:"section-heading",onClick:s},i.a.createElement("div",{className:"empty-div"}),i.a.createElement("div",{className:"section-heading-text"},"Spoilers"),i.a.createElement("div",{className:"toggle-icon-container"},i.a.createElement(N,{isExpanded:a.some((function(e){return!e.isCollapsed}))}))),a.filter((function(e){return!!e.entries.length})).map((function(e){return i.a.createElement(k,{key:e.id,item:e,onToggle:function(){return l(e.id)}})})))))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var G=i.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}),j=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return i.a.createElement("svg",C({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",className:"svg-inline--fa fa-chevron-left fa-w-10",role:"img",viewBox:"0 0 320 512",ref:t},n),a?i.a.createElement("title",null,a):null,G)},w=i.a.forwardRef((function(e,t){return i.a.createElement(j,C({svgRef:t},e))}));a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var B=i.a.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}),I=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return i.a.createElement("svg",R({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?i.a.createElement("title",null,a):null,B)},V=i.a.forwardRef((function(e,t){return i.a.createElement(I,R({svgRef:t},e))}));a.p,a(51);function M(e){var t=e.shouldShowBackButton,a=e.onBackButtonClicked,n=e.searchBarRef,r=e.searchInputValue,s=e.onInputValueChange,l=e.onInputKeyUp,c=e.errorMessage,o=e.onInputSubmit,u=e.isCentered,d=e.isLoading;return i.a.createElement("div",{className:"nav-bar-container \n      ".concat(u?"centered":""," \n      ").concat(d?"hidden":"")},t&&i.a.createElement(w,{className:"back-button nav-icon",onClick:a}),i.a.createElement("div",null,i.a.createElement("input",{className:"search-bar",ref:n,value:r,onChange:s,onKeyUp:l}),c&&i.a.createElement("div",{className:"error-message"},c)),i.a.createElement(V,{className:"search-button nav-icon",onClick:o}))}a(52);function P(e){var t=e.isLoading;return i.a.createElement("div",{className:"sk-circle ".concat(t?"":"hidden")},i.a.createElement("div",{className:"sk-circle1 sk-child"}),i.a.createElement("div",{className:"sk-circle2 sk-child"}),i.a.createElement("div",{className:"sk-circle3 sk-child"}),i.a.createElement("div",{className:"sk-circle4 sk-child"}),i.a.createElement("div",{className:"sk-circle5 sk-child"}),i.a.createElement("div",{className:"sk-circle6 sk-child"}),i.a.createElement("div",{className:"sk-circle7 sk-child"}),i.a.createElement("div",{className:"sk-circle8 sk-child"}),i.a.createElement("div",{className:"sk-circle9 sk-child"}),i.a.createElement("div",{className:"sk-circle10 sk-child"}),i.a.createElement("div",{className:"sk-circle11 sk-child"}),i.a.createElement("div",{className:"sk-circle12 sk-child"}))}a(53);var q=function(e,t){return Object(d.a)(Object(d.a)({},e),{},{isCollapsed:!0,id:t})},X="NO_TITLE_SELECTED",A="SELECT_TITLE",F="VIEW_GUIDES",H="https://imdb-parental-advisory.xsaudahmed.repl.co",K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={inputValue:"",titleOptions:[],parentalGuides:[],spoilerGuides:[],isLoading:!1,selectedTitle:"",errorMessage:"",noResultsFound:!1,currentStep:X,touchStartX:0},n.submitSearchInput=function(){n.setState({errorMessage:"",noResultsFound:!1}),n.state.inputValue.length?(n.setState({isLoading:!0,parentalGuides:[],spoilerGuides:[]}),p.a.post("".concat(H,"/findTitles"),{titleName:n.state.inputValue}).then((function(e){n.setState({titleOptions:e.data,isLoading:!1,noResultsFound:!e.data.length,currentStep:A})}))):n.setState({errorMessage:"*Please enter a title"})},n.addTouchHandlers=function(){document.querySelector("body").ontouchstart=function(e){return n.setState({touchStartX:e.changedTouches[0].clientX})},document.querySelector("body").ontouchend=function(e){e.changedTouches[0].clientX-n.state.touchStartX>125&&n.goToSelectTitleStep()}},n.removeTouchHandlers=function(){document.querySelector("body").ontouchstart=null,document.querySelector("body").ontouchend=null},n.GetParentalGuide=function(e,t){n.setState({isLoading:!0,selectedTitle:t}),p.a.post("".concat(H,"/parentalGuide"),{titleId:e}).then((function(e){n.setState({parentalGuides:e.data.parentalGuide.map(q),spoilerGuides:e.data.spoilersGuide.map(q)}),setTimeout((function(){return n.setState({currentStep:F,isLoading:!1})}),250),n.addTouchHandlers()}))},n.goToSelectTitleStep=function(){n.removeTouchHandlers(),n.setState({currentStep:A,touchStartX:0}),setTimeout((function(){return n.setState({parentalGuides:[],spoilerGuides:[]})}),250)},n.BlurMobileKeyboardOnSubmit=function(e){"Enter"===e.key&&(n.submitSearchInput(),n.searchBarRef.current.blur())},n.ToggleContentAdvisoryExpansion=function(){var e;e=n.state.parentalGuides.some((function(e){return!e.isCollapsed}))?n.state.parentalGuides.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isCollapsed:!0})})):n.state.parentalGuides.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isCollapsed:!1})})),n.setState({parentalGuides:e})},n.ToggleSpoilersExpansion=function(){var e;e=n.state.spoilerGuides.some((function(e){return!e.isCollapsed}))?n.state.spoilerGuides.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isCollapsed:!0})})):n.state.spoilerGuides.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isCollapsed:!1})})),n.setState({spoilerGuides:e})},n.ToggleSectionExpansion=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(f.cloneDeep)(t?n.state.parentalGuides:n.state.spoilerGuides);a[e].isCollapsed=!a[e].isCollapsed,t?n.setState({parentalGuides:a}):n.setState({spoilerGuides:a})},n.searchBarRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"main-container"},!this.state.titleOptions.length&&!this.state.isLoading&&i.a.createElement("div",{className:"instructions regular-text"},"Please enter a movie or TV show title"),i.a.createElement(M,{isCentered:!this.state.titleOptions.length,isLoading:this.state.isLoading,shouldShowBackButton:this.state.currentStep===F,onBackButtonClicked:this.goToSelectTitleStep,searchBarRef:this.searchBarRef,searchInputValue:this.state.inputValue,onInputValueChange:function(t){return e.setState({inputValue:t.target.value})},onInputKeyUp:this.BlurMobileKeyboardOnSubmit,errorMessage:this.state.errorMessage,onInputSubmit:this.submitSearchInput}),this.state.noResultsFound&&i.a.createElement("div",{className:"no-results-found"},"No Results Found"),i.a.createElement(P,{isLoading:this.state.isLoading}),i.a.createElement(h,{options:this.state.titleOptions,onTitleClick:this.GetParentalGuide,isVisible:!!this.state.titleOptions.length&&this.state.currentStep===A&&!this.state.isLoading}),this.state.parentalGuides.length>0&&i.a.createElement(T,{isVisible:this.state.currentStep===F,parentalGuides:this.state.parentalGuides,spoilerGuides:this.state.spoilerGuides,selectedTitle:this.state.selectedTitle,ToggleSectionExpansion:this.ToggleSectionExpansion,ToggleContentAdvisoryExpansion:this.ToggleContentAdvisoryExpansion,ToggleSpoilersExpansion:this.ToggleSpoilersExpansion}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.b9cfee0f.chunk.js.map