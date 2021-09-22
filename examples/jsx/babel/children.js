import React from "react"
import { render } from "react-dom"

function Host() {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <div key={index}>{index}</div>
      ))}
    </>
  )
}

render(<Host />, document.getElementById("root"))
