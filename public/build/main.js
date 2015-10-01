webpackJsonp([0],{

/***/ 0:
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React         = __webpack_require__(/*! react */ 1);
	var TestComponent = __webpack_require__(/*! ./components/TestComponent.jsx */ 157);
	
	React.render(
	  React.createElement(TestComponent, null),
	  document.getElementById("react-container")
	);

/***/ },

/***/ 157:
/*!******************************************!*\
  !*** ./src/components/TestComponent.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React           = __webpack_require__(/*! react */ 1);
	
	var TestComponent = React.createClass({displayName: "TestComponent",
	  render: function() {
	    return (
	      React.createElement("div", null, "Hello World")
	    );
	  }
	});
	
	module.exports = TestComponent;

/***/ }

});
//# sourceMappingURL=main.js.map