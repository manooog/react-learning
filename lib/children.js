import React from "react";
import { render } from "react-dom";

function Host() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, [1, 2, 3].map(index => /*#__PURE__*/React.createElement("div", {
    key: index
  }, index)));
}

render( /*#__PURE__*/React.createElement(Host, null), document.getElementById("root"));