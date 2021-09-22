import React, { useEffect, useRef, useState } from "react"
import { render } from "react-dom"

function RenderDemo({ once = false }) {
  const renders = useRef(0)

  const [times, setTimes] = useState(0)

  useEffect(() => {
    renders.current++
  })

  function click() {
    // 响应 click 事件
    if (once) {
      // 这种情况下， react 会将多次 setTimes 合并成一次，只会触发一次渲染
      setTimes((time) => ++time)
      setTimes((time) => ++time)
    } else {
      // 如下面的写法，则会触发两次渲染
      Promise.resolve().then(() => {
        setTimes((time) => ++time)
        setTimes((time) => ++time)
      })
    }
  }

  return (
    <div
      style={{
        padding: 8,
        marginTop: 4,
        border: "1px solid red",
      }}
    >
      render {once ? "once" : "twice"}
      <p>render times : {renders.current}</p>
      <span onClick={click}>click: {times}</span>
    </div>
  )
}

function App() {
  return (
    <>
      <RenderDemo once />

      <RenderDemo />
    </>
  )
}

render(<App />, document.getElementById("root"))
