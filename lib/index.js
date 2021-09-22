import React from "react";
import { render } from "react-dom";

function SimpleCom({
  name
}) {
  return /*#__PURE__*/React.createElement("p", null, "Hello ", name);
}

function BeArray() {
  return /*#__PURE__*/React.createElement("div", null, [1, 2, 3].map(index => /*#__PURE__*/React.createElement("p", {
    key: index
  }, index)));
}

function Demo() {
  const Var = /*#__PURE__*/React.createElement("p", null, "var");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SimpleCom, {
    name: "dana5"
  }), /*#__PURE__*/React.createElement(BeArray, null), Var);
}

render( /*#__PURE__*/React.createElement(Demo, null), document.getElementById("root"));