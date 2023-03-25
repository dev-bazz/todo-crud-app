import { useState } from "react";
import "./style.scss"

export default function App() {
  const [state, setState] = useState(false)

  const items = [
    {
      title: `Nav Name`,
      children: [{ content: `This is an Item` }, { content: `this is another item` }]
    },
    {
      title: `Nav Name`,
      children: [{ content: `This is an Item` }, { content: `this is another item` }]
    }
  ]

  const sideNav = []


  return (
    <>
      <div className="App">
        <h1>Hello World</h1>

        <div className="accord">
          {items.map((item, key) => {
            return (<details key={key}>
              <summary>{item.title}</summary>
              <ul>
                {item.children.map((child, key) => <li key={key}>{child.content}</li>)}
              </ul>
            </details>)
          })}
        </div>
        <button style={{
          marginTop: "1rem",
          backgroundColor: "black",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "8px"
        }} onClick={() => setState(!state)}> Check Me</button>


      </div>
    </>
  )


}


