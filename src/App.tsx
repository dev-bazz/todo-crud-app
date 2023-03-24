import { useState } from "react";
import "./style.scss"

export default function App() {
  const [state, setState] = useState(false)

  return (
    <div className="App">
      <h1>Hello World</h1>

      <div className={state ? `item show` : ` item`}>
        {state ? <ul>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
        </ul> : ""}
      </div>
      <button onClick={() => setState(!state)}> Check Me</button>
    </div>
  )


}


