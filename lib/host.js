import React from "react";
import { render } from "react-dom";

function FnComp() {
  return /*#__PURE__*/React.createElement("div", null, "function");
}

class ClassComp extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "class");
  }

}

function Host() {
  const comp = /*#__PURE__*/React.createElement("comp", null);
  console.log(comp);
  const Fn = /*#__PURE__*/React.createElement(FnComp, null);
  const HostFn = /*#__PURE__*/React.createElement("fnComp", null);
  const Cl = /*#__PURE__*/React.createElement(ClassComp, null);
  return /*#__PURE__*/React.createElement("div", null, comp, Fn, Cl);
}

render( /*#__PURE__*/React.createElement(Host, null), document.getElementById("root"));