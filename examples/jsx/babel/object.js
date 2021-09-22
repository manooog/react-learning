import React from "react"
import { render } from "react-dom"
const ForwardFef = React.forwardRef((props, ref) => {
  return <div ref={ref}>forwardref</div>
})
function Host() {
  console.log(ForwardFef)
  return <ForwardFef />
}

render(<Host />, document.getElementById("root"))
