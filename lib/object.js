import React from "react";
import { render } from "react-dom";
const ForwardFef = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, "forwardref");
});

function Host() {
  console.log(ForwardFef);
  return /*#__PURE__*/React.createElement(ForwardFef, null);
}

render( /*#__PURE__*/React.createElement(Host, null), document.getElementById("root"));