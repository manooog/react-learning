import React from "react"
import { render } from "react-dom"
function SimpleCom({ name }) {
  return <p>Hello {name}</p>
}

function BeArray() {
  return (
    <div>
      {[1, 2, 3].map((index) => (
        <p key={index}>{index}</p>
      ))}
    </div>
  )
}

function Demo() {
  const Var = <p>var</p>
  return (
    <div>
      <SimpleCom name="dana5" />
      <BeArray />
      {Var}
    </div>
  )
}

render(<Demo />, document.getElementById("root"))
