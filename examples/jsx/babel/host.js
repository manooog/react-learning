import React from "react"
import { render } from "react-dom"

function FnComp() {
  return <div>function</div>
}

class ClassComp extends React.Component {
  render() {
    return <div>class</div>
  }
}
function Host() {
  const comp = <comp />
  console.log(comp)
  const Fn = <FnComp />
  const HostFn = <fnComp />
  const Cl = <ClassComp />

  return (
    <div>
      {comp}
      {Fn}
      {Cl}
    </div>
  )
}

render(<Host />, document.getElementById("root"))
