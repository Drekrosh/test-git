webpackJsonp([1],[
/* 0 */
/*!***********************!*\
  !*** ./src/other.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React         = __webpack_require__(/*! react */ 1);
	
	var AnotherComponent = React.createClass({displayName: "AnotherComponent",
	  render: function() {
	    return (
	      React.createElement("div", null, "Hello Again")
	    );
	  }
	});
	
	
	React.render(
	  React.createElement(AnotherComponent, null),
	  document.getElementById("react-container")
	);

/***/ }
]);
//# sourceMappingURL=other.js.map