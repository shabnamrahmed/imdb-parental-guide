(this["webpackJsonpparental-guide-client"]=this["webpackJsonpparental-guide-client"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),l=a.n(i),c=(a(24),a(3)),r=a(4),o=a(6),d=a(5),u=a(2),p=a(7),m=a.n(p),h=a(18),v=(a(44),a(45),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,!!this.props.parentalGuides.length&&s.a.createElement("div",{className:"guides-heading"},"Parental Guide for:"," ",s.a.createElement("div",{className:"selected-title"},this.props.selectedTitle)),s.a.createElement("div",{className:this.props.parentalGuides.length?"guides-container":""},!!this.props.parentalGuides.length&&s.a.createElement("div",{className:"expand-collapse",onClick:this.props.ToggleAllExpansion},"Expand/Collapse All"),s.a.createElement("div",null,!!this.props.parentalGuides.length&&s.a.createElement("div",{className:"section-heading"},"Content Advisory:"),this.props.parentalGuides.map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{className:"section-title-text",onClick:function(){return e.props.ToggleSectionExpansion(t.id,!0)}},t.sectionName),s.a.createElement("div",{className:t.isCollapsed?"collapsed-entry":"expanded-entry"},s.a.createElement("div",{className:"guide-summary-text"},t.advisory.summary),s.a.createElement("div",{className:"guide-vote-count-text"},t.advisory.voteCount),s.a.createElement("div",null,s.a.createElement("ul",{className:"entries-list"},t.entries.map((function(e){return s.a.createElement("li",{className:"guide-entry-text"},e)}))))))}))),s.a.createElement("div",null,!!this.props.spoilerGuides.length&&s.a.createElement("div",{className:"section-heading"},"Spoilers:"),this.props.spoilerGuides.map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{className:"section-title-text",onClick:function(){return e.props.ToggleSectionExpansion(t.id)}},t.sectionName),s.a.createElement("div",{className:t.isCollapsed?"collapsed-entry":"expanded-entry"},s.a.createElement("ul",{className:"entries-list"},t.entries.map((function(e){return s.a.createElement("li",{className:"guide-entry-text"},e)})))))})))))}}]),a}(s.a.Component)),E=(a(46),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"sk-circle"},s.a.createElement("div",{class:"sk-circle1 sk-child"}),s.a.createElement("div",{class:"sk-circle2 sk-child"}),s.a.createElement("div",{class:"sk-circle3 sk-child"}),s.a.createElement("div",{class:"sk-circle4 sk-child"}),s.a.createElement("div",{class:"sk-circle5 sk-child"}),s.a.createElement("div",{class:"sk-circle6 sk-child"}),s.a.createElement("div",{class:"sk-circle7 sk-child"}),s.a.createElement("div",{class:"sk-circle8 sk-child"}),s.a.createElement("div",{class:"sk-circle9 sk-child"}),s.a.createElement("div",{class:"sk-circle10 sk-child"}),s.a.createElement("div",{class:"sk-circle11 sk-child"}),s.a.createElement("div",{class:"sk-circle12 sk-child"}))}}]),a}(s.a.Component)),g=function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isCollapsed:!0,id:t})},f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={inputValue:"",titleOptions:[],parentalGuides:[],spoilerGuides:[],isLoading:!1,selectedTitle:""},n.Submit=function(){n.state.inputValue.length&&(n.setState({isLoading:!0,parentalGuides:[],spoilerGuides:[]}),m.a.post("https://imdb-parental-advisory.xsaudahmed.repl.co/findTitles",{titleName:n.state.inputValue}).then((function(e){return n.setState({titleOptions:e.data,isLoading:!1})})))},n.GetParentalGuide=function(e,t){n.setState({isLoading:!0,selectedTitle:t}),m.a.post("https://imdb-parental-advisory.xsaudahmed.repl.co/parentalGuide",{titleId:e}).then((function(e){return n.setState({parentalGuides:e.data.parentalGuide.map(g),spoilerGuides:e.data.spoilersGuide.map(g),isLoading:!1})}))},n.CloseParentalGuide=function(){n.setState({parentalGuides:[],spoilerGuides:[],selectedTitle:""})},n.ToggleAllExpansion=function(){var e,t,a=n.state.parentalGuides.some((function(e){return!e.isCollapsed})),s=n.state.spoilerGuides.some((function(e){return!e.isCollapsed}));a||s?(e=n.state.parentalGuides.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isCollapsed:!0})})),t=n.state.spoilerGuides.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isCollapsed:!0})}))):(e=n.state.parentalGuides.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isCollapsed:!1})})),t=n.state.spoilerGuides.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isCollapsed:!1})}))),n.setState({parentalGuides:e,spoilerGuides:t})},n.ToggleSectionExpansion=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(h.cloneDeep)(t?n.state.parentalGuides:n.state.spoilerGuides);a[e].isCollapsed=!a[e].isCollapsed,t?n.setState({parentalGuides:a}):n.setState({spoilerGuides:a})},n.searchBarRef=s.a.createRef(),n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"search"},!!this.state.parentalGuides.length&&s.a.createElement("button",{className:"back-button",onClick:this.CloseParentalGuide},"Back"),s.a.createElement("input",{className:"search-bar",ref:this.searchBarRef,value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})},onKeyUp:function(t){"Enter"===t.key&&(e.Submit(),e.searchBarRef.current.blur())}}),s.a.createElement("button",{className:"search-button",onClick:this.Submit},"Search")),this.state.isLoading&&s.a.createElement("div",null,s.a.createElement(E,null)),!!this.state.titleOptions.length&&!this.state.parentalGuides.length&&!this.state.isLoading&&s.a.createElement("div",{class:"title-options"},this.state.titleOptions.map((function(t){return s.a.createElement("div",{class:"option",onClick:function(){return e.GetParentalGuide(t.id,t.title)}},s.a.createElement("img",{class:"media-image",src:t.imageURL,alt:""}),s.a.createElement("div",{class:"text"},t.title))}))),s.a.createElement(v,{parentalGuides:this.state.parentalGuides,spoilerGuides:this.state.spoilerGuides,selectedTitle:this.state.selectedTitle,ToggleSectionExpansion:this.ToggleSectionExpansion,ToggleAllExpansion:this.ToggleAllExpansion}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.15b81c96.chunk.js.map